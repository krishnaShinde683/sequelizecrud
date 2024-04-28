module.exports = (sequelize, DataTypes) => {
    const slip = sequelize.define(
      "slips", {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        group_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        quotes_json:{
          type: DataTypes.JSON,
          allowNull: false,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        type: {
          type: DataTypes.STRING(50),
          allowNull: false,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        sport_Id: {
          type: DataTypes.STRING(50),
          allowNull: false,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        sport_name: {
          type: DataTypes.STRING(50),
          allowNull: false,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        sport_name: {
          type: DataTypes.STRING(50),
          allowNull: false,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        slip: {
          type: DataTypes.STRING(50),
          allowNull: false,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        quotes: {
          type: DataTypes.TEXT,
          allowNull: false,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        amount: {
          type: DataTypes.STRING(50),
          allowNull: null,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        currency:{
          type: DataTypes.STRING(50),
          allowNull: null,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        slip_type: {
          type: DataTypes.STRING(50),
          allowNull: null,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
     
        status: {
          type: DataTypes.STRING(50),
          allowNull: null,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },

        win_status: {
          type: DataTypes.STRING(50),
          allowNull: null,
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
        },
        deletedAt: {
          type: DataTypes.DATE,
          allowNull: null,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        }
  
      });
  
    return slip;
  };