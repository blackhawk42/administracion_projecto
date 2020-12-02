// External Dependancies
const boom = require('boom')

// Get Data Models
const Match = require('../models/Match')

exports.getMatches = async (req) => {
	try {
		const hometeam = req.params === undefined ? req.hometeam : req.params.hometeam;
		const awayteam = req.params === undefined ? req.awayteam : req.params.awayteam;
		console.log(hometeam);
		console.log(awayteam);
		const matches = await Match.find({ 
			homeTeam: hometeam, 
			awayTeam: awayteam
		})
		return matches
	} catch (err) {
		throw boom.boomify(err)
	}
}



