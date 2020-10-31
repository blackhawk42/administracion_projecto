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
        type: Number,
        require: true
    },
    awayGoals:{
        type: Number,
        require: true
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