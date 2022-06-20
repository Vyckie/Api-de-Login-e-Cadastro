const usuario = require('./usuario');

module.exports = {
    setRoutes(app){
        app.use(usuario);
    }
}