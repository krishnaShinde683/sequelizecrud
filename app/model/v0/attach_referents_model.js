module.exports = (sequelize, DataTypes) => {
    const attach_referent = sequelize.define(
      "attach_referents",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        root_name:{
          type: DataTypes.STRING,
          allowNull: false,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        main_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        attach_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        type:{
          type: DataTypes.STRING,
          allowNull: false,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        description:{
          type: DataTypes.STRING,
          default:"",
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        createdAt: {
          type: DataTypes.DATE,
          allowNull: null,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        updatedAt: {
          type: DataTypes.DATE,
          allowNull: null,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        }
      });
  
    return attach_referent;
  };
  