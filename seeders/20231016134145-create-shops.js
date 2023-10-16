"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Shops", [
      {
        name: "Toko 1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Toko 2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Toko 3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Toko 4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Toko 4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Shops", null, {});
  },
};
