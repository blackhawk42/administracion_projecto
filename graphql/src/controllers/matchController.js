// External Dependancies
const boom = require('boom')

// Get Data Models
const Match = require('../models/Match')

exports.getMatches = async (req) => {
	try {
		const matches = await Match.find({ 
		})
		return matches
	} catch (err) {
		throw boom.boomify(err)
	}
}



