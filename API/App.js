const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

// Conexión local a MongoDB en tu PC
const uri = 'mongodb://localhost:27017/sena_db';

mongoose.connect(uri)
    .then(() => console.log("¡Conectado exitosamente a MongoDB Local!"))
    .catch(err => console.log("❌ Error crítico de conexión a MongoDB:", err.message));

const authRoutes = require('./routes/auth');
app.use('/api', authRoutes);

app.get('/', (req, res) => {
    res.json({ message: "API de autenticación SENA funcionando correctamente" });
});

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});