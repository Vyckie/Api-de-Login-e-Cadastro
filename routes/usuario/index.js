const { Router } = require('express');
const usuarioController = require('../../controller/usuario');

const routes = Router();

routes.post('/usuario/criar', usuarioController.create);

routes.get('/usuario/buscar/:userEmail', usuarioController.findOne);

routes.put('/usuario/atualizar/:userEmail', usuarioController.update);

routes.delete('/usuario/deletar/:userEmail', usuarioController.destroy);

module.exports = routes;