module.exports = (sequelize, DataTypes) => {
    const profile = sequelize.define(
      "profiles", {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
       
        profile_name: {
          type: DataTypes.STRING(50),
          allowNull: false,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        type_id: {
          type: DataTypes.INTEGER,
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
        
        freeroll: {
          type: DataTypes.INTEGER,
          allowNull: false,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        action: {
          type: DataTypes.INTEGER,
          allowNull: null,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        tasse: {
          type: DataTypes.INTEGER,
          allowNull: null,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        status: {
          type: DataTypes.INTEGER,
          allowNull: 1,
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
  
    return profile;
  };