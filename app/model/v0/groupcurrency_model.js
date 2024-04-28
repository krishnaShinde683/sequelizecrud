module.exports = (sequelize, DataTypes) => {
    const group_currency = sequelize.define(
      "group_currencies",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        group_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },  
        amount :{
          type: DataTypes.INTEGER,
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
        status: {
            type: DataTypes.INTEGER,
            default:1,
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
  
    return group_currency;
  };
  