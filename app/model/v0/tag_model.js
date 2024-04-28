module.exports = (sequelize, DataTypes) => {
    const Tag = sequelize.define(
      "tags",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: DataTypes.STRING(50),
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
          default:Date.now(),
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
        updatedAt: {
          type: DataTypes.DATE,
          default:Date.now(),
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        },
      },
     { timestamps: false});
    return Tag;
  };
  