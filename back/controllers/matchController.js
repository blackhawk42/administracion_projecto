const Match = require('../models/Match');

exports.createMatch = async(req, res) => {
    
    //Revisar si hay errores
    /*const error = validationResult(req);

    if(!error.isEmpty()){
        return res.status(400).json({error: error.array()})
    }*/

    const {match} = req.body;

    try{
        //Creamos un nuevo match
        matchBase = new Match(req.body);

        //Guardamos el match
        await matchBase.save();

        //Mensaje de confirmación
        res.json({ msg:'Match created correctly'});
    
    } catch(error){
        res.status(400).send("Error");
        console.log(error);
    } 

}

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