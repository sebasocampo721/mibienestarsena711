'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    static associate(models) {
      event.belongsTo(models.category, { foreignKey: 'categoryId' });
      event.belongsTo(models.user, { foreignKey: 'userId' });
    }
  }
  event.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    state: DataTypes.STRING,
    maxCapacity: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'event',
  });
  return event;
};
