const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");



class Users extends Model {
  checkPassword(loginPw) {
    // return bcrypt.compareSync(loginPw, this.password);
    return (loginPw == this.password)
  }
}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "users",
  }
);

module.exports = Users;
