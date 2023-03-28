'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', { 
      users_id: { 
        type: Sequelize.INTEGER, 
        autoIncrement: true, 
        primaryKey: true
      }, 
      full_name: {type: Sequelize.STRING}
    });
    await queryInterface.renameColumn('users', 'full_name', 'name');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
    await queryInterface.renameColumn('users', 'name', 'full_name');

  }
};
