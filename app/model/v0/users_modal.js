module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "users", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci"
      },
      lastname:{
        type: DataTypes.STRING(50),
        allowNull: false,
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci"
      },
      user_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci"
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci"
      },
      phone: {
        type: DataTypes.STRING(50),
        allowNull: true,
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci"
      },
      password: {
        type: DataTypes.STRING(50),
        allowNull: true,
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci"
      },
      role_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci"
      },
      notification_setting: {
        type: DataTypes.INTEGER,
        allowNull: true,
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci"
      },
      token: {
        type: DataTypes.TEXT,
        allowNull: true,
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci"
      },
      profile_image: {
        type: DataTypes.TEXT,
        allowNull: true,
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci"
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
        charset: "utf8mb4",
        collate: "utf8mb4_unicode_ci"
      },
      status: {
        type: DataTypes.INTEGER,
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

  return User;
};