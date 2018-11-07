'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    order_date: DataTypes.DATE,

  }, {timestamps: true});
  Order.associate = function(models) {
    // associations can be defined here
    //   Order.hasMany(models.Item)
  };
  return Order;
};