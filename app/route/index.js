const Router  = require("express").Router()

Router.use("/api/",require("./user_route"))

module.exports=Router