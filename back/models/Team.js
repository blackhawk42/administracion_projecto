const mongoose = require('mongoose');

const TeamSchema = mongoose.Schema({
    teamName:{
        type: String,
        require: true
    },
    goals:{
        type: Number,
        require: true
    },
    matches:{
        type: Number,
        require: true
    },
    goalsPerMatches:{
        type: Number,
        require: true
    },
    logo:{
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Team', TeamSchema);