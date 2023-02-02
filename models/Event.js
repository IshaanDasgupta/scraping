const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    Title:{
        type: String,
        required: true
    },
    Description:{
        type: String,
        default: "-"

    },
    Venue:{
        type: String,
        default: "-"
    },
    Date:{
        type: String,
        default: "-"
    },
    Time:{
        type: String,
        default: "-"
    },
    Banner:{
        type: String,
        default: ""
    },
    Link:{
        type: String,
        default: ""
    },
    Duration:{
        type : String,
        default: "-"
    }
})

module.exports = mongoose.model("Event", eventSchema);