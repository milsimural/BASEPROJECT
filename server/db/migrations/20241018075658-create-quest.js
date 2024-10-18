/* eslint-disable lines-around-directive */
/* eslint-disable no-unused-vars */
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Quests', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      Ans1: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Ans2: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Ans3: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      RightAns: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Text: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      ThemeId: { 
        type: Sequelize.INTEGER,
        references: {
          model: 'Themes',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Quests');
  },
};
