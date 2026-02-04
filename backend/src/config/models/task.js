const { DataTypes } = require("sequelize");
const sequelize = require("../database");

const Task = sequelize.define("Task", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [3],
    },
  },
  description: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.ENUM("PENDING", "IN_PROGRESS", "DONE"),
    allowNull: false,
    defaultValue: "PENDING",
  },
});

module.exports = Task;
