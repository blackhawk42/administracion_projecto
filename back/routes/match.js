const { Router } = require('express');
const express = require('express');
const router = express.Router();
const matchController = require('../controllers/matchController');

//Agregar match



//Obtener todos los matches
router.get('/',
    matchController.getMatches
)

router.get('/hello',
    function(req, res){
        res.send('Estoy funcionando wey');
    }
)

module.exports = router;