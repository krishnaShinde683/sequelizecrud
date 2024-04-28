const config = require("../../config/DB.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: 0,
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.log("Unable to connect to the database:", err);
  });
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
//models
db.roleModal = require("./role_model")(sequelize, Sequelize);
db.usersModal = require("./users_modal")(sequelize, Sequelize);
db.slip_model = require("./slip_model")(sequelize, Sequelize);
db.players_model = require("./players_model")(sequelize, Sequelize);
// db.referent_model = require("./referent_model")(sequelize, Sequelize);
db.profile_model = require("./profile_model")(sequelize, Sequelize);
db.group_model = require("./group_model")(sequelize, Sequelize);
db.satellitegroups_model = require("./satellitegroups_model")(sequelize, Sequelize);
db.wallet_model = require("./wallet_model")(sequelize, Sequelize);
db.transaction_model = require("./transaction_model")(sequelize, Sequelize);
db.attach_referents_model = require("./attach_referents_model")(sequelize, Sequelize);
db.groupcurrency_model = require("./groupcurrency_model")(sequelize, Sequelize);
db.tag_model = require("./tag_model")(sequelize, Sequelize);





//joins
db.usersModal.hasOne(db.roleModal, {
  foreignKey: "id",
  sourceKey: "role_id"
});

db.group_model.hasOne(db.usersModal, {
  foreignKey: "id",
  sourceKey: "ref_id",
  as:"referent"
});

db.group_model.hasOne(db.players_model, {
  foreignKey: "id",
  sourceKey: "player_id"
});

db.players_model.hasMany(db.group_model, {
  foreignKey: "player_id",
  sourceKey: "id",
  as:'groupDetail'
});

db.group_model.hasOne(db.profile_model, {
  foreignKey: "id",
  sourceKey: "profile_id"
});

db.players_model.hasOne(db.profile_model, {
  foreignKey: "id",
  sourceKey: "profile_id"
});


db.slip_model.hasOne(db.group_model, {
  foreignKey: "id",
  sourceKey: "group_id"
});


db.group_model.hasMany(db.satellitegroups_model,{
  foreignKey: "main_id",
  sourceKey: "id",
  as:"group_detail"
})
db.satellitegroups_model.belongsTo(db.group_model,{
  foreignKey: "main_id",
  sourceKey: "id",
  as:"group_detail"
})

db.profile_model.hasMany(db.satellitegroups_model,{
  foreignKey: "main_id",
  sourceKey: "id",
  as:"profile_detail"
})
db.satellitegroups_model.belongsTo(db.profile_model,{
  foreignKey: "main_id",
  sourceKey: "id",
  as:"profile_detail"
})


db.players_model.hasMany(db.satellitegroups_model,{
  foreignKey: "main_id",
  sourceKey: "id",
  as:"player_detail"
})
db.satellitegroups_model.belongsTo(db.players_model,{
  foreignKey: "main_id",
  sourceKey: "id",
  as:"player_detail"
})


db.usersModal.hasMany(db.satellitegroups_model,{
  foreignKey: "main_id",
  sourceKey: "id",
  as:"user_detail"
})
db.satellitegroups_model.belongsTo(db.usersModal,{
  foreignKey: "main_id",
  sourceKey: "id",
  as:"user_detail"
})

db.satellitegroups_model.hasOne(db.group_model,{
  foreignKey: "id",
  sourceKey: "group_id"
})
db.usersModal.hasMany(db.attach_referents_model,{
  foreignKey: "main_id",
  sourceKey: "id",
  as:"refrents_detail"
})
db.attach_referents_model.belongsTo(db.usersModal,{
  foreignKey: "main_id",
  sourceKey: "id",
  as:"refrents_detail"
})

db.usersModal.hasMany(db.attach_referents_model,{
  foreignKey: "attach_id",
  sourceKey: "id",
  as:"collabority"
})
db.attach_referents_model.belongsTo(db.usersModal,{
  foreignKey: "attach_id",
  sourceKey: "id",
  as:"collabority"
})

db.usersModal.hasMany(db.attach_referents_model,{
  foreignKey: "main_id",
  sourceKey: "id",
  as:"collobority_detail"
})
db.attach_referents_model.belongsTo(db.usersModal,{
  foreignKey: "main_id",
  sourceKey: "id",
  as:"collobority_detail"
})
db.attach_referents_model.hasOne(db.usersModal,{
  foreignKey: "id",
  sourceKey: "attach_id"
})


db.usersModal.hasMany(db.attach_referents_model,{
  foreignKey: "main_id",
  sourceKey: "id",
  as:"contratii_detail"
})

db.attach_referents_model.belongsTo(db.usersModal,{
  foreignKey: "main_id",
  sourceKey: "id",
  as:"contratii_detail"
})

db.attach_referents_model.hasOne(db.profile_model,{
  foreignKey: "id",
  sourceKey: "attach_id",
  as:'profile_detail'
})
db.group_model.hasMany(db.transaction_model,{
  foreignKey: "group_id",
  sourceKey: "id",
  
})
db.transaction_model.belongsTo(db.group_model,{
  foreignKey: "id",
  sourceKey: "group_id",
  
})
db.transaction_model.hasOne(db.group_model,{
  foreignKey: "id",
  sourceKey: "group_id"
})
db.groupcurrency_model.belongsTo(db.group_model, {
  foreignKey: "group_id",
  sourceKey: "id",
  // as:"groupcurrency"
})
db.group_model.hasMany(db.groupcurrency_model, {
  foreignKey: "group_id",
  sourceKey: "id",
  as:"groupcurrency"

})
db.group_model.hasMany(db.attach_referents_model,{
  foreignKey: "main_id",
  sourceKey: "ref_id",
  as:"referent_details",
})
db.attach_referents_model.belongsTo(db.group_model,{
  foreignKey:"main_id",
  sourceKey:"ref_id",
  as:"referent_details",

})

db.transaction_model.belongsTo(db.group_model,{
  foreignKey: "group_id",
  sourceKey: "id",
  as:"income_outcome_group_detail"
})
  
db.transaction_model.belongsTo(db.group_model, {
  foreignKey: "from_id",
  targetKey: "id",
  as: "from_group"
});

db.transaction_model.belongsTo(db.group_model,{
  foreignKey: "to_id",
  sourceKey: "id",
  as:"to_group"
})
 






db.op=db.Sequelize.Op;
module.exports = db;