const Team = require('../models/Team');

// Post
exports.getTeam = async(req,res) => {

    try{
        const team1 = await Team.find({
            teamName: req.body.homeTeam
        });
        const team2 = await Team.find({
            teamName: req.body.awayTeam
        });
        res.json({team1, team2});

    } catch (error) {

        console.log(error);
        res.status(500).sed('Error');

    }
}

//Get 
exports.getTeams = async(req,res) => {

    try{

        const teams = await Team.find();
        res.json({teams});

    } catch (error) {

        console.log(error);
        res.status(500).sed('Error');

    }
}



