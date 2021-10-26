const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const UsuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario'],
        trim: true,
        minlength: [3, 'El nombre debe tener al menos 3 caracteres'],
    },
    apellido: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    correo: {
        type: String,
        unique: true,
        required: [true, 'El correo es necesario']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es necesaria']
    }
}, { timestamps: true });

UsuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe ser unico' });
const Usuario = mongoose.model('Usuario', UsuarioSchema);
module.exports = {Usuario};