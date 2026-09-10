const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    }
});

// El tercer argumento 'usuarios' fuerza el nombre de la colección en MongoDB
module.exports = mongoose.model('Usuario', usuarioSchema, 'usuarios');