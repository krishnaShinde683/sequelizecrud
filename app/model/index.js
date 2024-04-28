const Sequelize = require("sequelize")
const {DB,User,password,dialect,pool,Host} = require("../config/db.config")


const sequelize = new Sequelize(DB,User,password,{
    Host,dialect,pool
})

sequelize.authenticate().then(()=>console.log("db connected")).catch(err=>console.log(err.message))


const db={}

db.sequelize=sequelize
db.Sequelize=Sequelize

db.user_model=require("./user_model")(sequelize,Sequelize)
sequelize.sync().then(()=>console.log("table synced"))

module.exports=db