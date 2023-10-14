const  Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Property = sequelize.define('property', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
 },
 role: {
      type: Sequelize.STRING(255),
      allowNull: false
 },
 name: Sequelize.STRING,
 picture: {
        type: Sequelize.BLOB('long'),
        allowNull: false
 },
 location: {
    type: Sequelize.STRING(255),
    allowNull: false
},
 price: {
        type: Sequelize.STRING(255),
       allowNull: false
 },
 description: {
    type: Sequelize.STRING(255),
   allowNull: false
},

});

module.exports = Property