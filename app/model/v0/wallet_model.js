module.exports = (sequelize, DataTypes) => {
    const wallet = sequelize.define(
      "wallets",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        currency: {
          type: DataTypes.STRING,
          allowNull: false,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        amount :{
          type: DataTypes.STRING,
          allowNull: false,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            charset: "utf8mb4",
            collate: "utf8mb4_unicode_ci"
        },
        description: {
          type: DataTypes.STRING,
          allowNull: true,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        createdAt: {
          type: DataTypes.DATE,
          default: new Date(),
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        updatedAt: {
          type: DataTypes.DATE,
          default: new Date(),
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        }
      });
  
    return wallet;
  };
  