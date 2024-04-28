module.exports = (sequelize, DataTypes) => {
    const satellitegroup = sequelize.define(
      "satellitegroups",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        main_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        group_id: {
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
  
    return satellitegroup;
  };
  