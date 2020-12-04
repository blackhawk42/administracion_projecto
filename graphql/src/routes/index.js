// Import our Controllers
const matchController = require('../controllers/matchController')

// Import Swagger documentation
// const documentation = require('./documentation/carApi')

const routes = [
  {
    method: 'POST',
    url: '/api/matches',
    handler: matchController.getMatches
  }
]

module.exports = routes
