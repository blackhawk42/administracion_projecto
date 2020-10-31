const mongoose = require('mongoose');

const MatchSchema = mongoose.Schema({
    div:{
        type: String,
        require: true
    },
    date:{
        type: Date,
        require: true
    },
    homeTeam:{
        type: String,
        require: true
    },
    awayTeam: {
        type: String,
        require: true
    },
    homeGoals:{
        type: String,
        require: true
    },
    fthg:{
        type: Number,
        require:true
    },
    ftag:{
        type: Number,
        require:true
    },
    ftr:{
        type: Number,
        require:true
    },
    hst:{
        type: Number,
        require:true
    },
    ast:{
        type: Number,
        require:true
    }
});

module.exports = mongoose.model('Match', MatchSchema);