const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'tasks_db',
  'admin',
  'admin',
  {
    host: 'localhost',
    port: Number(process.env.DB_PORT) || 5437,
    dialect: 'postgres'
  }
);

module.exports = sequelize;
