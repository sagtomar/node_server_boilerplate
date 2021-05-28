const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        username: DataTypes.STRING,
        password: DataTypes.STRING,
        key: DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }

  // static associate(models) {

  // }
}

module.exports = User;
