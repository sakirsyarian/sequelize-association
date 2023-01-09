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
    const bands = JSON.parse(fs.readFileSync('./data/bands.json', 'utf-8'))
    const dataBands = bands
      .map(element => {
        delete element.id
        element.createdAt = new Date()
        element.updatedAt = new Date()

        return element
      })

    return queryInterface.bulkInsert('Bands', dataBands, {});
  },

  down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    return queryInterface.bulkDelete('Bands', null, {});
  }
};
