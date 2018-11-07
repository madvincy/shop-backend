'use strict';
module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('Customer', {

            cust_name: {
                type: DataTypes.STRING
            },
            phone_no: {
                type: DataTypes.INTEGER
            }
        },
        { timestamps: false }
    );
    Customer.associate = function(models) {
        Customer.hasMany(models.Order, {foreignKey: 'cust_id'})
        // associations can be defined here
    };

    return Customer;
};
