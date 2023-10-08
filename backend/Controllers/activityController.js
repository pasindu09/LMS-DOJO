const Submission = require('../models/SubmissionModel');
const Activity = require('../models/activityModel');
const activityService = require('../services/ActivityService'); 
const submissionService = require('../services/submissionService');
const path = require('path');


const createActivity = async (req, res) => {
    try {

          if(!req.file){
            return res.status(400).json({ status: false, message: 'No activityFile file provided' });
        }
        console.log(req.body.activityFile);
        console.log(req.body);
        const uploadedFile = req.file;
        console.log(uploadedFile);
        const fileName = uploadedFile.filename;
        const filePath = uploadedFile.path;
        console.log(fileName);
        console.log(filePath);

            
            /*if (!req.file.filename) {
                return res.status(400).json({ status: false, message: 'No activityImage file provided' });
            }
            console.log(req.file.filename);*/


            const activityData = {
                activityName: req.body.activityName,
                activityDescription: req.body.activityDescription,
                dueDate: req.body.dueDate,
                submissiontime: req.body.submissiontime,
                activityFile: fileName,
                forclasses: req.body.forclasses,
                submissionLink: req.body.submissionLink,
                downloadLink: req.body.downloadLink,
                submissionGrade: req.body.submissionGrade,
                feedback: req.body.feedback,
                createdBy: req.body.createdBy,
                Activity_ID: req.body.Activity_ID,
                ActivityselectedSubjects: req.body.ActivityselectedSubjects,
                
            };
            const status = await activityService.createActivity(activityData);
            const responseData = {
                message: 'Activity created successfully',
                data: activityData // Include the created activity data here
              };
    
            if (status) {
                res.status(200).json({ status: true, message: 'Activity created successfully' , data: responseData });

            } else {
                res.status(400).json({ status: false, message: 'Error creating activity' });
            }
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: 'An error occurred while creating the activity' });
        
    }
}


const getAllActivities = async (req, res) => {
    try {
        const activities = await activityService.getAllActivities();
        res.status(200).json({ status: true, data: activities });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: 'An error occurred while fetching activities' });
    }
};



const getActivitiesPerTeacher = async (req, res) => {
    try {
        const Currentemail = req.params.Currentemail;
        const activities = await activityService.getActivitiesPerTeacher(Currentemail);
        res.status(200).json({ status: true, data: activities });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: 'An error occurred while fetching activities' });
    }
};


const getActivitiesPerClass = async (req, res) => {
     
    try {

        const studentClass = req.params.studentClass;
       
        const activities = await activityService.getActivitiesPerClass(studentClass);

        res.status(200).json({ status: true, data: activities });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: 'An error occurred while fetching activities' });
    }
};







const updateActivity = async (req, res) => {

    try {
        const activityData = {
            activityName: req.body.activityName,
            activityDescription: req.body.activityDescription,
            dueDate: req.body.dueDate,
            submissiontime: req.body.submissiontime,
            //activityImage: req.file.filename,
            //class: req.body.class,
            forclasses: req.body.forclasses,
            submissionLink: req.body.submissionLink,
            downloadLink: req.body.downloadLink,
            submissionGrade: req.body.submissionGrade,
            feedback: req.body.feedback,
            createdBy: req.body.createdBy,
            Activity_ID: req.body.Activity_ID,
            submissionstatus: req.body.submissionstatus,
        };

        const updatedActivity = await activityService.updateActivity(req.params.selectedActivityId, activityData);
        console.log(updatedActivity)
        if (updatedActivity) {
            return res.status(200).json({ message: 'Activity updated successfully', updatedActivity });
        } else {
            return res.status(400).json({ message: 'Error updating activity' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: 'An error occurred while updating the activity' });
    }
};





const deleteActivity = async (req, res) => {
    try {
        const activityId = req.params.activityId;
        const deletedActivity = await activityService.deleteActivity(activityId);
        if (deletedActivity) {
            return res.status(200).json({ message: 'Activity deleted successfully', deletedActivity });
        } else {
            return res.status(400).json({ message: 'Error deleting activity' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: 'An error occurred while deleting the activity' });
    }
};


const addGrades = async (req, res) => {
    try {
        // Extract data from request body and params
        const activityId = req.params.activityId;
        const studentEmail = req.body.studentEmail;
        const grade = req.body.grade;
        const feedback = req.body.feedback;

      
        const updatedActivity = await activityService.addGrades(activityId, studentEmail, grade, feedback);

        if (updatedActivity) {
            return res.status(200).json({
                status: true,
                message: 'Activity updated successfully',
                updatedActivity: updatedActivity
            });
        } else {
            return res.status(400).json({
                status: false,
                message: 'Error updating activity'
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: false,
            message: 'An error occurred while updating the activity'
        });
    }
};


const fetchGradesPerActivity = async (req, res) => {
    try {
        const activityId = req.params.activityId;
        const grades = await activityService.fetchGradesPerActivity(activityId);
        res.status(200).json({ status: true, data: grades });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: 'An error occurred while fetching grades' });
        
    }
}


const EditGradePerStudentForActivity = async (req, res) => {
    try {
        const activityId = req.params.activityId;
        const grade = req.body.grade;
        const studentEmail = req.body.studentEmail;
        const feedback = req.body.feedback;
        const updatedActivity = await activityService.EditGradePerStudentForActivity(activityId, grade, studentEmail , feedback);
        if (updatedActivity) {
            return res.status(200).json({
                status: true,
                message: 'Activity updated successfully',
                updatedActivity: updatedActivity
            });
        } else {
            return res.status(400).json({
                status: false,
                message: 'Error updating activity'
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: false,
            message: 'An error occurred while updating the activity'
        });
    }
};


 const updateSubmissionStatus = async (studentEmail, activityId) => {
    try {
        const submission = await Submission.findOne({ studentEmail: studentEmail, activityId: activityId });
        if (submission) {
            const activity = await Activity.findOne({ _id: activityId });
            if (activity) {
                activity.submissionStatus = true;
                await activity.save();
                return true;
            }
        }
        return false;
    } catch (error) {
        throw error;
    }
}




const getGradeForActivity = async (req, res) => {
    try {
        const { activityId } = req.params;
        console.log('Received activityId:', activityId);

        const studentEmail = req.body.studentEmail; // Assuming the student's email is sent in the request body
        const grade = await activityService.getGradeForActivity(activityId, studentEmail);
        console.log(grade)

        if (grade) {
            res.status(200).json({ status: true, data: grade });
        } else {
            // Handle the case where the grade is not found
            res.status(404).json({ status: false, message: 'Grade not found for the specified activity and student' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: 'An error occurred while fetching grade' });
    }
};


const results = async (req, res) => {
    try {
        const { studentEmail } = req.params;
        const grades = await activityService.results(studentEmail);
        res.status(200).json({ status: true, data: grades });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: 'An error occurred while fetching grades' });
    }
}
/*
const updateActivityStatus = async (activityId ,  Currentemail) => {
    try {
       
        const submission = Submission.findOne({ Activity_ID: activityId  , studentEmail: Currentemail });
        if (submission) {
                activity.submissionStatus = true;
                await activity.save();
                return true;
            }
            activity.submissionStatus = false;
            await activity.save();
            return false;
    } catch (error) {
        throw error;
    }
}*/
           



module.exports = { createActivity , getAllActivities , 
    getActivitiesPerTeacher , getActivitiesPerClass , 
    updateActivity , deleteActivity , updateSubmissionStatus , 
    addGrades , fetchGradesPerActivity , EditGradePerStudentForActivity , getGradeForActivity ,
    results};   