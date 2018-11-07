'use strict';
module.exports = (sequelize, DataTypes) => {
    const Itemupdate = sequelize.define('Itemupdate', {

            unit_price: {
                type: DataTypes.INTEGER
            },
            updatedAt: DataTypes.DATE,
        },
        { timestamps: false }
    );
    Itemupdate.associate = function(models) {
        // Itemupdate.belongsToMany(models.Order, {through: 'Ordereditem'});
        // associations can be defined here
    };

    return Itemupdate;
};