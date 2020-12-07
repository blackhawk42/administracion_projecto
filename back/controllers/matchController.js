const Match = require('../models/Match');

// Post
exports.postMatches = async (req, res) => {
 
    const match = new Match(req.body);
    
    //guarda el Prediccion en la db
     try{
        await match.save();
    
        //Todo bien
        res.json({ msg: 'Datos guardados' });
    
    
     }catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
      }
    };

//Get matches
exports.getMatches = async(req,res) => {

    try{

        const matches = await Match.find();
        res.json({matches});

    } catch (error) {

        console.log(error);
        res.status(500).sed('Error');

    }
}

exports.getMatchesWithParams = async(req,res) => {
    console.log(req.params.homeTeam);
    try{

        const matches = await Match.find({
            homeTeam: req.params.homeTeam
            
        });
        res.json({matches});

    } catch (error) {

        console.log(error);
        res.status(500).sed('Error');

    }
}

