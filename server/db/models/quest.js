'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Quest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Quest.belongsTo(models.Theme, {
        foreignKey: 'ThemeID',
        as: 'theme',
      });
    }
  }
  Quest.init(
    {
      Ans1: DataTypes.STRING,
      Ans2: DataTypes.STRING,
      Ans3: DataTypes.STRING,
      RightAns: DataTypes.STRING,
      Text: DataTypes.TEXT,
      ThemeID: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Quest',
    },
  );
  return Quest;
};
