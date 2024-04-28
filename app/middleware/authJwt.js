const jwt = require("jsonwebtoken");
const config = require("../config/Auth.config");
const connection = require("../config/DB.config");
const message = require("../Helpers/message");
const {
  usersModal
} = require("../models/v0/");
const apiResponse = require("../Helpers/apiResponse");
verifyToken = (req, res, next) => {

  let token = req.headers["authorization"];

  if (!token) {
    return apiResponse.notFoundResponse(res, message.NotokenProvided);
  }

  usersModal.findOne({
    where: {
      token: token
    }
  }).then(async (user) => {
   
    if (user && user?.role_id==2 || user?.role_id==3 || user?.role_id==1) {
      jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
          return apiResponse.unauthorizedResponse(res, message.Unauthorized);
        }

        req.userId = decoded.id;
        next();
      });
    } else {
      return apiResponse.unauthorizedResponse(res, message.Unauthorized);
    }


  }).catch((err) => {
    apiResponse.ErrorResponse(res, err.message);
  });


};

adminverifyToken = (req, res, next) => {

  let token = req.headers["authorization"];
  if (!token) {
    return apiResponse.notFoundResponse(res, message.NotokenProvided);
  }

  usersModal.findOne({
    where: {
      token: token
    }
  }).then(async (user) => {
    if (user && user?.role_id==1 || user?.role_id==3) {
      jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
          return apiResponse.unauthorizedResponse(res, message.Unauthorized);
        }

        req.userId = decoded.id;
        next();
      });
    } else {
      return apiResponse.unauthorizedResponse(res, message.Unauthorized);
    }


  }).catch((err) => {
    apiResponse.ErrorResponse(res, err.message);
  });


};


const authJwt = {
  verifyToken: verifyToken,
  adminverifyToken:adminverifyToken
};
module.exports = authJwt;