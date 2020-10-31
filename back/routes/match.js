const { Router } = require('express');
const express = require('express');
const router = express.Router();
const matchController = require('../controllers/matchController');

//Agregar match
//Obtener todos los matches
router.get('/',
    matchController.getMatches
)

//Agregar un 
router.post('/',
    matchController.postMatches
);

module.exports = router;