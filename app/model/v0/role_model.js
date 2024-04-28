module.exports = (sequelize, DataTypes) => {
    const Role = sequelize.define(
      "roles",
      {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        type: {
          type: DataTypes.STRING(50),
          allowNull: false,
          charset: "utf8mb4",
          collate: "utf8mb4_unicode_ci"
        }
      });
  
    return Role;
  };
  