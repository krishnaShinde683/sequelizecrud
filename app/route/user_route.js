const route = require("express").Router()
const controller=require("../controller/user_controller")


route.get("/get-user/",controller.test)

module.exports=route