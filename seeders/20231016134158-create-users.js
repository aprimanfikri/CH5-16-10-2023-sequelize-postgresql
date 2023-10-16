"use strict";
const { Shop, User } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const shops = await Shop.findAll();
    await queryInterface.bulkInsert("Users", [
      {
        name: "User 1",
        address: "Jl. User 1",
        age: 20,
        shopId: shops[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "User 2",
        address: "Jl. User 2",
        age: 20,
        shopId: shops[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "User 3",
        address: "Jl. User 3",
        age: 20,
        shopId: shops[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "User 4",
        address: "Jl. User 4",
        age: 20,
        shopId: shops[3].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "User 5",
        address: "Jl. User 5",
        age: 20,
        shopId: shops[4].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    // const users = await queryInterface.sequelize.query("SELECT * FROM Users");

    const users = await User.findAll();
    // const userRows = users[0];

    await queryInterface.bulkInsert("Auths", [
      {
        email: "user1@mail.com",
        password:
          "$2a$10$OKAKpCrn6NrQyOG7Mee37euv6YDfauU3SNEH/kQM79/tYAHZU4b1y",
        confirmPassword:
          "$2a$10$OKAKpCrn6NrQyOG7Mee37euv6YDfauU3SNEH/kQM79/tYAHZU4b1y",
        userId: users[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "user2@mail.com",
        password:
          "$2a$10$OKAKpCrn6NrQyOG7Mee37euv6YDfauU3SNEH/kQM79/tYAHZU4b1y",
        confirmPassword:
          "$2a$10$OKAKpCrn6NrQyOG7Mee37euv6YDfauU3SNEH/kQM79/tYAHZU4b1y",
        userId: users[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "user3@mail.com",
        password:
          "$2a$10$OKAKpCrn6NrQyOG7Mee37euv6YDfauU3SNEH/kQM79/tYAHZU4b1y",
        confirmPassword:
          "$2a$10$OKAKpCrn6NrQyOG7Mee37euv6YDfauU3SNEH/kQM79/tYAHZU4b1y",
        userId: users[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "user4@mail.com",
        password:
          "$2a$10$OKAKpCrn6NrQyOG7Mee37euv6YDfauU3SNEH/kQM79/tYAHZU4b1y",
        confirmPassword:
          "$2a$10$OKAKpCrn6NrQyOG7Mee37euv6YDfauU3SNEH/kQM79/tYAHZU4b1y",
        userId: users[3].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "user5@mail.com",
        password:
          "$2a$10$OKAKpCrn6NrQyOG7Mee37euv6YDfauU3SNEH/kQM79/tYAHZU4b1y",
        confirmPassword:
          "$2a$10$OKAKpCrn6NrQyOG7Mee37euv6YDfauU3SNEH/kQM79/tYAHZU4b1y",
        userId: users[4].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
    await queryInterface.bulkDelete("Auths", null, {});
  },
};
