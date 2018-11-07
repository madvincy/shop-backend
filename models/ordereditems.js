'use strict';
module.exports = (sequelize, DataTypes) =>{
    const Ordereditem = sequelize.define('Ordereditem',
        {

            quantity_ordered: {
                type: DataTypes.INTEGER,
                timestamps: false,
            }
        },

    {timestamps: false}


  );

    Ordereditem.associate = function(models) {
        // associations can be defined here

    };
    return Ordereditem;
}
