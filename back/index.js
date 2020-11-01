const express = require('express');
const conectarDB = require('./config/db');
const conectarRedisCache = require('./config/redis_cache')
const cors = require('cors');

//Crear el servidor
const app = express();

//Conectar a la base de datos
conectarDB();

// Conectar al cache de redis
cache = conectarRedisCache();

//habilitar cors
app.use(cors());

//Habilitar express.json
app.use(express.json({ extended: true}));

//Puerto del server
const port = process.env.PORT || 4000

//Importar rutas
app.use('/', cache.route(), require('./routes/match'));

app.use('/api/auth', require('./routes/auth'));

app.use('/api/usuarios', require('./routes/usuarios'));

//Arrancar server
app.listen(port, '0.0.0.0', () => {
    console.log(`El server esta corriendo en el puerto ${port}`);
});
