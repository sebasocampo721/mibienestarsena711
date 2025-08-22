'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('rols', [
      {
        name: 'Coordinador',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Instructor',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Aprendiz',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('roles', null, {});
  }
};
