'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Customers', [{
      cust_name: 'paul',
      phone_no: 722445566,
        // createdAt: Date.now(), updatedAt: Date.now()
    },

        {
            cust_name: 'Kevin',
            phone_no: 712345678,
            // createdAt: Date.now(), updatedAt: Date.now()
        },
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
      return queryInterface.bulkDelete('Customers', null, {});
  }
};
