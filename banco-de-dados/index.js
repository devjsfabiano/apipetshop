const Sequelize = require('sequelize')

const instancia = new sequelize(
    'petshop',
    'root',
    '******',
    {
        host: '127.0.0.1',
        dialect: 'mysql'
    }
)

module.exports = instancia