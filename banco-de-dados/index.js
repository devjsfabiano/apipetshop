const Sequelize = require('sequelize')

const instancia = new sequelize(
    'petshop',
    'root',
    'Fijpac0705!!',
    {
        host: '127.0.0.1',
        dialect: 'mysql'
    }
)

module.exports = instancia