const moment = require("moment");
const {
  Op
} = require("sequelize");
const {
  usersModal,
  roleModal
} = require("../../models/v0/");
const AWS = require("aws-sdk");
const {
  Console
} = require("console");
const apiResponse = require("../../Helpers/apiResponse");
const message = require("../../Helpers/message");
const emailCheck = require("../../Helpers/Utility");
var md5 = require('md5');
module.exports = {
  getUserDetails,
  changePassword,
  resetPassword,
  updateDetail
}


async function getUserDetails(req, res) {
  try {
    const user = await usersModal.findOne({
      where: {
        id: req.userId
      },
      include: [{
        model: roleModal,
        attributes: [
          "type"
        ]
      }]
    });

    let userData = {};
    if (!user) {
      apiResponse.successResponseWithData(res, message.usernotfound, userData);
    } else {


      apiResponse.successResponseWithData(res, message.userfetch, user);
    }
  } catch (error) {
    return apiResponse.ErrorResponse(res, error.message)
  }

}

async function changePassword(req, res) {
  try {

    const {
      old_password,
      new_password,
      confirm_password
    } = req.body;

    if (new_password != confirm_password) return apiResponse.notFoundResponse(res, message.confirmpasswordnotmatch)

    let data = {
      password: md5(new_password)
    }
    usersModal.findOne({
        where: {
          password: md5(old_password)
        }
      })
      .then(async (user) => {

        if (!user) {
          return apiResponse.notFoundResponse(res, message.oldpasswordiswrong);
        } else {
          await usersModal.update(data, {
            where: {
              id: req.userId
            }
          })
          return apiResponse.successResponse(res, message.changepasswordsuccess);

        }

      })
      .catch((err) => {
        apiResponse.ErrorResponse(res, err.message);
      });
  } catch (error) {
    return apiResponse.ErrorResponse(res, error.message)
  }
}


async function resetPassword(req, res) {
  try {

    const {
      token,
      new_password,
      confirm_password
    } = req.body;

    if (new_password != confirm_password) return apiResponse.notFoundResponse(res, message.confirmpasswordnotmatch)

    let data = {
      password: md5(new_password)
    }
    usersModal.findOne({
        where: {
          token: token
        }
      })
      .then(async (user) => {

        if (!user) {
          return apiResponse.notFoundResponse(res, message.invaildtoken);
        } else {
          await usersModal.update(data, {
            where: {
              id: req.userId
            }
          })
          return apiResponse.successResponse(res, message.changepasswordsuccess);

        }

      })
      .catch((err) => {
        apiResponse.ErrorResponse(res, err.message);
      });
  } catch (error) {
    return apiResponse.ErrorResponse(res, error.message)
  }
}

async function updateDetail(req, res) {
  try {

    const {
      name,
      email,
      notification_setting,
      phone
    } = req.body;

    if (!emailCheck.isEmail(email)) return apiResponse.notFoundResponse(res, message.emailformat)
    if(req?.file){
      req.body.profile_image=req.file.path.replace(/\\/g, "/")
   }
    usersModal.findOne({
        where: {
          id: req.userId
        }
      })
      .then(async (user) => {
        if (!user) {
          return apiResponse.notFoundResponse(res, message.usernotfound);
        } else {
          await usersModal.update(req.body, {
            where: {
              id: req.userId
            }
          })
          return apiResponse.successResponse(res, message.profileupdate);

        }

      })
      .catch((err) => {
        apiResponse.ErrorResponse(res, err.message);
      });
  } catch (error) {
    return apiResponse.ErrorResponse(res, error.message)
  }
}