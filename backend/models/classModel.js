const mongoose = require('mongoose');



const ClassSchema = new mongoose.Schema({

    id: mongoose.Schema.Types.ObjectId,

    class: {
        type: String,
        trim: true,
    },

    date: {
        type: String,
        trim: true,
    },
    sessionStart: {
        type: String,
        trim: true,
    },

    sessionEnd: {
        type: String,
        trim: true,
    },

    Students: [{
        type: String
    }],

    subject:{
        type: String,
        trim: true,
    },

});

const Class = mongoose.model('Class', ClassSchema);
module.exports = Class;
