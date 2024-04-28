module.exports = (sequelize, DataTypes) => {
    const group = sequelize.define(
      "groups", {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        ref_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        type:{
          type: DataTypes.STRING,
          allowNull: false,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        name: {
          type: DataTypes.STRING(50),
          allowNull: false,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        player_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        profile_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        amount: {
          type: DataTypes.STRING(50),
          allowNull: false,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        currency: {
          type: DataTypes.STRING(50),
          allowNull: null,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        grand_total: {
          type: DataTypes.INTEGER(50),
          allowNull: false,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"    
        },
        gruppo_grand_total: {
          type: DataTypes.STRING(50),
          allowNull: false,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"    
        },
        status: {
          type: DataTypes.INTEGER,
          allowNull: null,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        description: {
          type: DataTypes.TEXT,
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
  
    return group;
  };