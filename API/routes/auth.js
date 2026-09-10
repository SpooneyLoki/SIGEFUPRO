const express = require('express');
const router = express.Router();
const Usuario = require('../models/Usuario'); // Asegúrate de que la ruta a tu modelo sea correcta

// 1. Ruta para REGISTRAR (Crear) un nuevo usuario
router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        const nuevoUsuario = new Usuario({ email, password });
        await nuevoUsuario.save();
        res.status(201).json({ message: "Usuario registrado con éxito" });
    } catch (error) {
        res.status(500).json({ message: "Error al registrar el usuario", error });
    }
});

// 2. Ruta para EDITAR (Actualizar) un usuario por su ID
router.put('/usuarios/:id', async (req, res) => {
    try {
        const usuarioActualizado = await Usuario.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            { new: true } // Esto es clave para que devuelva el dato ya modificado
        );
        if (!usuarioActualizado) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json({ message: "Usuario editado con éxito", usuario: usuarioActualizado });
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar", error });
    }
});

// 3. Ruta para ELIMINAR un usuario por su ID
router.delete('/usuarios/:id', async (req, res) => {
    try {
        const usuarioEliminado = await Usuario.findByIdAndDelete(req.params.id);
        if (!usuarioEliminado) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        res.status(200).json({ message: "Usuario eliminado con éxito" });
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar", error });
    }
});
