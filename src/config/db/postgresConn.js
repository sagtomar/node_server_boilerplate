const Sequelize = require("sequelize");
const { postgresDB } = require("../config");
const User = require("../../models/User");

const ConfigDB = {
  /** Change Dialect for other DB Connection */
  dialect: "postgres",
  host: postgresDB.host,
  username: postgresDB.username,
  password: postgresDB.password,
  database: postgresDB.database,
  port: postgresDB.port,
  define: {
    timestamps: true,
    underscored: true,
  },
};

const connection = new Sequelize(ConfigDB);

User.init(connection);

// User.associate(connection.models);

module.exports = connection;
