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

    const songs = JSON.parse(fs.readFileSync('./data/songs.json'))
      .map(el => {
        delete el.id
        el.createdAt = new Date()
        el.updatedAt = new Date()

        return el
      })

    return queryInterface.bulkInsert('Songs', songs, {});
  },

  down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    return queryInterface.bulkDelete('Songs', null, {});
  }
};
