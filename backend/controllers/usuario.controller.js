const { Usuario } = require('../models/usuario.model');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');




module.exports.createUsuario = async (request, response) => {

    try {
        console.log(request.body);
        usuario = Usuario(request.body);

        // ENCRIPTAR CLAVE
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(usuario.password, salt);

        await usuario.save();

        const token = await generarJWT(usuario._id, usuario.correo,usuario.nombre, usuario.apellido );

        response.json({...usuario, token });
    } catch (error) {
        response.status(400).json(error);
    }

}

module.exports.loginUsuario = async (request, response) => {

    try {

        usuario = await Usuario.findOne({ correo: request.body.correo });
        console.log("PASSWORD DE LA BASE DE DATOS: ", usuario.password);
        console.log("PASSWORD DESDE EL FRONTEND:", request.body.password);

        // ENCRIPTAR LO QUE ENVIA EL LOGIN, Y COMPARAR ENTRE CLAVES CIFRADAS CON BCRYPT

        const validPassword = bcrypt.compareSync(request.body.password, usuario.password);

        if (validPassword) {

            const token = await generarJWT(usuario._id, usuario.correo,usuario.nombre, usuario.apellido );
            console.log(token);
            return response.json({ _id: usuario._id, nombre: `${usuario.nombre} ${usuario.apellido}`, token });
        } else {
            return response.status(401).json({ message: "Contraseña incorrecta" });
        }

    } catch (error) {
        response.status(400).json(error);
    }

}

