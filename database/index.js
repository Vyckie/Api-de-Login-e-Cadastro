const Sequelize = require('sequelize');

const dbConnection = new Sequelize({
    database: "db_eCommerce",
    username: "root",
    password: "8113",
    host: "localhost",
    dialect: "mysql"
});

function connect(){
    //conectar com o banco de dados
    dbConnection.authenticate().then(
        console.log("conexão com banco de dados realizada com sucesso")
    ).catch(err => {
        console.log("Erro ao conectar no banco!", err);
    });

    // sincronizar as tabela
    dbConnection.sync().then(
        console.log("tabelas criadas com sucesso")
    ).catch(err => {
        console.log("erro ao criar tabelas", err);
    });
}

module.exports = { dbConnection, connect};