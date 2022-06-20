const Express = require('express');

const database = require('./database');

const routes = require('./routes');

const app = Express();

app.use(Express.json());

routes.setRoutes(app);

// definindo "not found"
app.use((req, res, next) => {
    const err = new Error("Recurso não encontrado");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    if (err.status != undefined){
        res.status(err.status).json({ message: err.message});
    }
    else {
        res.status(500).json({ message: "Um erro interno aconteceu", err});
    }
});

app.listen(5000, () =>{
    database.connect();
    console.log("Servidor online na porta 5000.");
});