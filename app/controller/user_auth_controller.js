const {
  usersModal,roleModal
} = require("../../models/v0/");
const apiResponse = require("../../Helpers/apiResponse");
const Utility = require("../../Helpers/Utility");
const message = require("../../Helpers/message");
var md5 = require('md5');
module.exports = {
  login
}


async function login(req, res) {
  usersModal.findOne({
    where: {
      email: req.body.email
    }, include: [
      {
        model: roleModal,
        attributes: [
          "type"
        ]
      }]
  })
    .then(async (user) => {
      if (!user) {
        return apiResponse.notFoundResponse(res, message.usernotfound);
      }
      if (user.password != md5(req.body.password)) {
        return apiResponse.notFoundResponse(res, message.invalidpassword);
      }

      if (user.status == 0) {
        return apiResponse.notFoundResponse(res, message.inactiveAcount);
      }
      if (user.status == 2) {
        return apiResponse.notFoundResponse(res, message.deletedAccount);
      }

      var token = Utility.generateJWTToken({
        id: user.id
      })
      console.log(user);
      let userData={};
      userData["id"] = user.id;
      userData["email"] = user.email;
      userData["phone"] = user.phone;
      userData["userName"] = user.user_name;
      userData["name"] = user.name;
      userData["profile_image"] = user.profile_image;
      userData["roleId"] = user.role_id;
      userData["roleName"] = user.role;
      userData["token"] = token;
      usersModal.update({
        token: token
      }, {
        where: {
          id: user.id
        }
      }).then((data) => {
        apiResponse.successResponseWithData(res, message.loginsuccessfully, userData);

      }).catch((err) => {
        apiResponse.ErrorResponse(res, err.message);
      });

    })
    .catch((err) => {
      apiResponse.ErrorResponse(res, err.message);
    });
}