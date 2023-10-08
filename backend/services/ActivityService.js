const { model } = require('mongoose');
const Activity = require('../models/activityModel');
const { request } = require('express');

const Submission = require('../models/SubmissionModel');
const { ObjectId } = require('mongoose').Types;


module.exports.createActivity = async (activityDetails) => {


    try {
        return new Promise((resolve, reject) => {

        const activity = new Activity({
            activityName: activityDetails.activityName,
            activityDescription: activityDetails.activityDescription,
            dueDate: activityDetails.dueDate,
            submissiontime : activityDetails.submissiontime,
            //activityImage: activityDetails.activityImage,
            //class: activityDetails.class,
            activityFile : activityDetails.activityFile,
            forclasses: activityDetails.forclasses,
            submissionLink: activityDetails.submissionLink,
            downloadLink: activityDetails.downloadLink,
            submissionGrade: activityDetails.submissionGrade,
            feedback: activityDetails.feedback,
            createdBy: activityDetails.createdBy,
            Activity_ID: activityDetails.Activity_ID,
            ActivityselectedSubjects: activityDetails.ActivityselectedSubjects
            
        });

        activity.save()
            .then((savedActivity) => resolve(savedActivity))    
            .catch((error) => reject(error));

        } 
    )} catch (error) {
        throw error;

        
    
    };
};


module.exports.getAllActivities = () => {
    return new Promise((resolve, reject) => {
        Activity.find({})
            .then((activities) => resolve(activities))
            .catch((error) => reject(error));
        });
    };

module.exports.addGrades = (activityId, studentEmail , grade , feedback) => {
    return new Promise((resolve, reject) => {
        console.log('Adding grades for Activity ID:', activityId);
        console.log('Student Email:', studentEmail);
        console.log('Grade:', grade);
        console.log('Feedback:', feedback);
        console.log('Adding grades for Activity ID:', activityId);
        console.log('Student Email:', studentEmail);

        // Create a new grade object with studentEmail and any other properties you need
        const newGrade = {
            studentEmail: studentEmail,
            grade: grade,
            feedback: feedback,
        };

        Activity.findOneAndUpdate(
            { Activity_ID: activityId }, // Find activity by Activity_ID
            { $push: { grades: newGrade } }, // Push the new grade object to the grades array
            { new: true } // To return the updated document
        )
        .then(updatedActivity => {
            // Logging the updated activity for troubleshooting
            console.log('Updated Activity:', updatedActivity);
            resolve(updatedActivity); // Resolve with the updated activity
        })
        .catch(error => {
            // Logging the error for troubleshooting
            console.error('Error adding grades:', error);
            reject(error); // Reject with the error if there's any problem updating the activity
        });
    });
};

    

module.exports.fetchGradesPerActivity = (activityId ) => {
    return new Promise((resolve, reject) => {
        Activity.findOne({ Activity_ID: activityId })
            .then((activity) => resolve(activity.grades))
            .catch((error) => reject(error));

    });
};


module.exports.EditGradePerStudentForActivity = (activityId, grade, studentEmail  , feedback) => {
    return new Promise((resolve, reject) => {
        console.log('Editing grade for Activity ID:', activityId);
        console.log('Student Email:', studentEmail);
        console.log('Grade:', grade);
        console.log('Feedback:', feedback);

        Activity.findOneAndUpdate(
            { Activity_ID: activityId, 'grades.studentEmail': studentEmail }, // Find activity by Activity_ID and studentEmail
            { $set: { 'grades.$.grade': grade, 'grades.$.feedback': feedback } }, // Set the grade and feedback
          
            { new: true } // To return the updated document
        )
        .then(updatedActivity => {
            // Logging the updated activity for troubleshooting
            console.log('Updated Activity:', updatedActivity);
            resolve(updatedActivity); // Resolve with the updated activity
        })
        .catch(error => {
            // Logging the error for troubleshooting
            console.error('Error editing grade:', error);
            reject(error); // Reject with the error if there's any problem updating the activity
        });
    });
};



module.exports.getActivitiesPerTeacher = async (Currentemail) => {
    return new Promise((resolve, reject) => {
        Activity.find({ createdBy: Currentemail })
            .then((activities) => resolve(activities))
            .catch((error) => reject(error));
        });
    }


    module.exports.getActivitiesPerClass = async (studentClass) => {
        return new Promise((resolve, reject) => {
            Activity.find({ forclasses: studentClass })
                .then((activities) => resolve(activities))
                .catch((error) => reject(error));
            });
        }







module.exports.deleteActivity = (activityId) => {
    return new Promise((resolve, reject) => {
        Activity.findOneAndDelete({ _id : new ObjectId(activityId)})
            .then((deletedActivity) => resolve(deletedActivity))
            .catch((error) => reject(error));
    }
    );
}


module.exports.updateActivity = (selectedActivityId, activityDetails) => {
    return new Promise(function (resolve, reject) {
    
        Activity.findOneAndUpdate(
            { _id: new ObjectId(selectedActivityId) }, // Find event by _id
            
            {
                activityName: activityDetails.activityName,
                activityDescription: activityDetails.activityDescription,
                dueDate: activityDetails.dueDate,
                submissiontime : activityDetails.submissiontime,
                //activityImage: activityDetails.activityImage,
                //class: activityDetails.class,
                forclasses: activityDetails.forclasses,
                submissionLink: activityDetails.submissionLink,
                downloadLink: activityDetails.downloadLink,
                submissionGrade: activityDetails.submissionGrade,
                feedback: activityDetails.feedback,
                createdBy: activityDetails.createdBy,
                Activity_ID: activityDetails.Activity_ID,
                submissionStatus: activityDetails.submissionStatus,
                
            },
            { new: true } // To return updated document
        )
            .then((updatedActivity) => {
                if (!updatedActivity) {
                    return reject('Activity not found');
                }
                resolve(updatedActivity);
            }
            )
            .catch((error) => reject(error));
    });
};




module.exports.getGradeForActivity = async (activityId, studentEmail) => {
    try {
        const activity = await Activity.findOne({ Activity_ID: activityId, 'grades.studentEmail': studentEmail });
        if (activity && activity.grades) {
            const grade = activity.grades.find(grade => grade.studentEmail === studentEmail);
            return grade;
        } else {
            // Handle the case where the activity or grades are not found
            return null;
        }
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching grade from the database');
    }
};

module.exports.results = async (studentEmail) => {
    try {
      // Use Mongoose to find activities that match the studentEmail in their grades array
      const activitiesWithGrades = await Activity.find({
        'grades.studentEmail': studentEmail
      }, { _id: 0, activityName: 1, grades: 1 });
  
      // Extract grades and relevant information from the fetched activities
      const grades = activitiesWithGrades.map(activity => {
        const grade = activity.grades.find(grade => grade.studentEmail === studentEmail);
        return {
          activityName: activity.activityName,
          grade: grade.grade,
          feedback: grade.feedback
        };
      });
  
      return grades;
    } catch (error) {
      // Handle errors, log them, or throw an exception if necessary
      console.error(error);
      throw new Error('Error fetching grades from the database');
    }
  };



