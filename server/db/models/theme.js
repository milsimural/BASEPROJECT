'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Theme extends Model {
    static associate(models) {
      Theme.hasMany(models.Quest, {
        foreignKey: 'ThemeID', 
        as: 'quests' 
      });
    }
  }
  
  Theme.init({
    name: DataTypes.STRING,
    pic: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Theme',
  });
  
  return Theme;
};
