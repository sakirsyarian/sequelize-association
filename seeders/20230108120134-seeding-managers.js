'use strict';

const fs = require('fs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const managers = JSON.parse(fs.readFileSync('./data/managers.json', 'utf-8'))
      .map(el => {
        delete el.id
        el.createdAt = new Date()
        el.updatedAt = new Date()

        return el
      })

    return queryInterface.bulkInsert('Managers', managers, {});
  },

  down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    return queryInterface.bulkDelete('Managers', null, {});
  }
};
