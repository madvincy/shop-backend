'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    item_name: DataTypes.STRING,


  },

        {timestamps: false});
    timestamps: false,

  Item.associate = function(models) {
      Item.belongsToMany(models.Order, {through: 'Ordereditem'});
      // Item.belongsToMany(models.Itemupdate, {through: 'Ordereditem'});
      Item.hasMany(models.Itemupdate, {foreignKey: 'item_id'})
      // Item.belongsTo(models.Order)
  };
  return Item;
};