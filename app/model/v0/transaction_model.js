module.exports = (sequelize, DataTypes) => {
    const transaction = sequelize.define(
      "transactions",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        tag_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        group_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        transaction_type:{
          type: DataTypes.STRING,
          allowNull: true,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        type: {
          type: DataTypes.STRING,
          allowNull: false,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        category: {
          type: DataTypes.STRING,
          allowNull: true,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        // group_type: {
        //   type: DataTypes.STRING,
        //   allowNull: false,
        //   charset: "utf8mb4",
        //   collate: "utf8mb4_unicode_ci"
        // },
        event: {
          type: DataTypes.STRING,
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
        to_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        from_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        transaction_image:{
          type: DataTypes.STRING,
          allowNull: true,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        note: {
          type: DataTypes.STRING,
          allowNull: true,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        transaction_status: {
          type: DataTypes.STRING,
          default: "success",
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        status:{
          type: DataTypes.TINYINT,
          default: true,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        created_by: {
          type: DataTypes.INTEGER,
          allowNull:false,
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
  
    return transaction;
  };
  