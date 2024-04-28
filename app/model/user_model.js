module.exports=(sequelize,DataTypes)=>{
 const user= sequelize.define("users",{
 id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
 },
 fullname: {
    type: DataTypes.STRING(50),
    allowNull: false,
    charset: "utf8mb4",
    collate: "utf8mb4_unicode_ci",
  },
// timestamp:true,
// tableName: "users"
},
)
return user
}