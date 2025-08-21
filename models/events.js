'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    event.belongsTo(models.category, { foreignKey: 'categoryId' });
    // Si tienes usuario, también
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