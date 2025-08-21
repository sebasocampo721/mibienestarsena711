'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('categories', [
      {
        name: 'Salud',
        description: 'Categoría relacionada con bienestar y salud',
        image: 'salud.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Educación',
        description: 'Categoría relacionada con educación',
        image: 'educacion.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('categories', null, {});
  }
};
