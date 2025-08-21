'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('events', [
      {
        name: 'Charla de Salud Mental',
        description: 'Una charla para promover el bienestar mental',
        startDate: new Date('2025-09-01T10:00:00'),
        endDate: new Date('2025-09-01T12:00:00'),
        state: 'active',
        maxCapacity: 50,
        categoryId: 1, // Asumiendo que la categoría Salud tiene id 1
        userId: 1,     // Asumiendo que el usuario con id 1 es el organizador
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Curso de Programación',
        description: 'Curso básico para aprender a programar',
        startDate: new Date('2025-10-15T09:00:00'),
        endDate: new Date('2025-10-15T17:00:00'),
        state: 'active',
        maxCapacity: 30,
        categoryId: 2, // Educación
        userId: 2,     // Otro usuario organizador
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('events', null, {});
  }
};
