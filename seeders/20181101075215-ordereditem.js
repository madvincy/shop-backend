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
      return queryInterface.bulkInsert('ordereditems', [{
          quantity_ordered: '2',
          itemid: 1,
          orderid: 1,
      },
          {
              quantity_ordered: '1',
              itemid: 2,
              orderid: 1,
          },
          {
              quantity_ordered: '1',
              itemid: 1,
              orderid: 2,
          },
          {
              quantity_ordered: '2',
              itemid: 2,
              orderid: 3,
          }
          ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
      return queryInterface.bulkDelete('ordereditems', null, {});
  }
};
