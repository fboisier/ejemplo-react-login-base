const { Usuario } = require('../models/usuario.model');

module.exports.createUsuario = (request, response) => {
    console.log(request.body);
    // SE DEBE ENCRIPTAR LA CONTRASEÑA ANTES DE GUARDAR
    Usuario.create(request.body).then(usuario => response.json(usuario))
        .catch(err => response.status(400).json(err));
}

module.exports.loginUsuario = (request, response) => {
    Usuario.findOne({correo:request.body.correo})
        .then(usuario => {
            console.log("PASSWORD DE LA BASE DE DATOS: ",usuario.password);
            console.log("PASSWORD DESDE EL FRONTEND:",request.body.password);

            // ENCRIPTAR LO QUE ENVIA EL LOGIN, Y COMPARAR ENTRE CLAVES CIFRADAS CON BCRYPT

            if(usuario.password == request.body.password){
                return response.json({_id: usuario._id, nombre: `${usuario.nombre} ${usuario.apellido}`});
            }else{
                return response.status(401).json({message:"Contraseña incorrecta"});
            }
        })
        .catch(err => response.status(400).json(err))
}

