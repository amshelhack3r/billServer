const { Sequelize } = require('sequelize')
require('dotenv').config()

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
});

sequelize.authenticate()
    .then(() => {
        console.log('Database Connection established successfully');
    })
    .catch(err => {
        console.error("Error in connection: ", err)
    })
module.exports = sequelize