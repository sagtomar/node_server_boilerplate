const Sequelize = require("sequelize");
const { mySqlDb } = require("../config");
const StudentSum = require("../../models/StudentSum");
const { contentSecurityPolicy } = require("helmet");

const ConfigDB = {
  /** Change Dialect for other DB Connection */
  host: mySqlDb.host,
  user: mySqlDb.username,
  password: mySqlDb.password,
  database: mySqlDb.db,
  port: mySqlDb.port,
};

const connection = new Sequelize(ConfigDB.database, ConfigDB.user, ConfigDB.password, {dialect: "mysql"});

connection
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

StudentSum.init(connection);
StudentSum.findAll().then((data)=>{console.log(data)});
// User.associate(connection.models);

module.exports = connection;
