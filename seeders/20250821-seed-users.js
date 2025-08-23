'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'juanperez',
        email: 'juan@example.com',
        password: '123', // Idealmente debería estar hasheada (bcrypt, etc), pero para pruebas está bien
        phone: '3001234567',
        birthday: new Date('1990-01-15'),
        document: '123456789',
        gender: 'M',
        state: 'active',
        roleId: 1,  // Admin
        passwordResetToken: null,
        passwordResetExpires: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'mariagomez',
        email: 'maria@example.com',
        password: '123',
        phone: '3009876543',
        birthday: new Date('1992-05-20'),
        document: '987654321',
        gender: 'F',
        state: 'active',
        roleId: 2,  // User
        passwordResetToken: null,
        passwordResetExpires: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
