const mongoose = require('mongoose');
const mongooseHidden = require('mongoose-hidden')()

var uniqueValidator = require('mongoose-unique-validator');

let rolesValidos ={
    values: ['ADMIN_ROLE','USER_ROLE'],
    message: '{VALUE} no es un rol válido'
};

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El nombre es necesario']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es obligatoria']
    },
    //default: 'USER_ROLE'
    role: {
        type: String,
        default: 'USER_ROLE',
        enum: rolesValidos
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único'});
usuarioSchema.plugin(mongooseHidden, { hidden: { _id: false, password: true } });

module.exports = mongoose.model('Usuario', usuarioSchema);