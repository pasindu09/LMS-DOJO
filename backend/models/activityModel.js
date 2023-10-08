const mongoose = require('mongoose');


const activitySchema = new mongoose.Schema({

    id: mongoose.Schema.Types.ObjectId,

    activityName: {
        type: String,
        required: true,
    },

   activityDescription: {
        type: String,
       
    },

    activityFile: {
        type: String,
        required: true,
       
    },

    dueDate: {
        type: Date,
        required: true,
    },

    submissiontime: {
        type: String,
      
    },

    /*activityImage :{
        type: String,
        
    },*/


    ActivityselectedSubjects: [{
        type: String,
      
      
    }],

    forclasses:[{
        type: String,
    }],

    submissionLink:{
        type: String,
    },

    downloadLink:{
        type: String,
        
    },

    submissionGrade: {
        type: Number,
        default: 0,
    },

    // feedback:{
    //     type: String,
        
    // },

    createdBy:{
        type:String,
        required:true,
    },

    Activity_ID:{
        type: String,
        required: true,

    },

    submissionStatus: {
        type: String,
        default: 'Pending',
        ref: 'Submission',
        
    },

    grades: [
        {
            studentEmail: {
                type: String,
                required: true,
            },
            grade: {
                type: Number,
                default: 0,
            },
            feedback: {
                type: String,
            },
        },
    ],

  






});

const Activity = mongoose.model('Activity', activitySchema);
module.exports = Activity;