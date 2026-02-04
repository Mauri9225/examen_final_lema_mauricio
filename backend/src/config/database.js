const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "tasks_db",
  "admin",
  "admin",
  {
    host: "localhost",
    dialect: "postgres",
    port: 5436,
    logging: false,
  }
);

module.exports = sequelize;
