const { DataTypes } = require('sequelize');
const { dbConnection } = require('../../database');

const Usuario = dbConnection.define("Usuario",
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cpf: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefone: {
            type: DataTypes.STRING
        },
        cep: {
            type: DataTypes.INTEGER
        },
        estado: {
            type: DataTypes.STRING
        },
        cidade: {
            type: DataTypes.STRING
        },
        dataDeNascimento: {
            type: DataTypes.DATE
        }
    },
    {
        timestamps: false
    }
);

module.exports = Usuario;