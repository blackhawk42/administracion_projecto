const { Router } = require('express');
const auth = require ('../middleware/auth');
const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');

//Agregar match
//Obtener todos 
router.post('/',
    //auth,
    teamController.getTeam
)

router.get('/',
    //auth,
    teamController.getTeams
)

module.exports = router;