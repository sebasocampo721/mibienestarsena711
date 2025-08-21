'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class role extends Model {
    static associate(models) {
      role.hasMany(models.user, { foreignKey: 'roleId' });
    }
  }
  role.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'role',
  });
  return role;
};
