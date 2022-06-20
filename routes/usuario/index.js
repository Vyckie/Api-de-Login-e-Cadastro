const { Router } = require('express');
const usuarioController = require('../../controller/usuario');

const routes = Router();

routes.post('/usuario/criar', usuarioController.create);

module.exports = routes;