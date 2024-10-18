'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Themes', [
      {
        name: 'Группа Орлы',
        pic: 'db/images/img1.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Котики',
        pic: 'db/images/img2.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Программисты',
        pic: 'db/images/img3.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Камасутра',
        pic: 'db/images/img4.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Themes', null, {});
  },
};
