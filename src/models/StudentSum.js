const { Model, DataTypes } = require("sequelize");

class StudentSum extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        class: DataTypes.STRING,
        social: DataTypes.INTEGER,
        science: DataTypes.INTEGER,
        math: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: "student_sum",
        createdAt: false,
        updatedAt: false,
        freezeTableName: true
      }
    );
  }

  // static associate(models) {

  // }
}

module.exports = StudentSum;
