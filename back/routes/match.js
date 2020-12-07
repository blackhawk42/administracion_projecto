const { Router } = require('express');
const auth = require ('../middleware/auth');
const express = require('express');
const router = express.Router();
const matchController = require('../controllers/matchController');

//Agregar match
//Obtener todos los matches
router.get('/',
    //auth,
    matchController.getMatches
)

router.get('/homeTeam/{homeTeam}',
    matchController.getMatchesWithParams
)

//Agregar un 
router.post('/',
    matchController.postMatches
);

module.exports = router;