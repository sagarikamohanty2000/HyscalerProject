const  Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
 },
 name: Sequelize.STRING,
 email: {
        type: Sequelize.STRING(255),
        allowNull: false
 },
 
 password: {
        type: Sequelize.STRING(255),
       allowNull: false
 },
 role: {
    type: Sequelize.JSON,
   allowNull: false
},

});

module.exports = User