const UsuarioController = require('../controllers/usuario.controller');

module.exports = function(app){
    app.post('/api/auth/register', UsuarioController.createUsuario);
    app.post('/api/auth/login', UsuarioController.loginUsuario);
}