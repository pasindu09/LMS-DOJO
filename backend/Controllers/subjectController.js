const { Console } = require('console');
const subjectService = require('../services/subjectService');
const path = require('path');

const createSubject = async (req, res) => {
    try{

        const subjectData = {
            subjectName: req.body.subjectName,
            subjectCode: req.body.subjectCode,
        };
        const status = await subjectService.createSubject(subjectData);

        if (status) {
            res.status(200).json({ status: true, message: 'Subject created successfully' });
        } else {
            if (status.validationErrors) {
                const errorMessage= "invalid input"
                res.status(400).json({ status: false, message: 'Validation Errors', errors:errorMessage });
            }
            else
            res.status(400).json({ status: false, message: 'Error creating subject' });
        }

    }
    catch(error){
        console.error(error);
        res.status(500).json({ status: false, message: 'An error occurred while creating the subject' });
    }


};


const getAllSubjects = async (req, res) => {
    try {
        const subjects = await subjectService.getAllSubjects();
        res.status(200).json({ status: true, data: subjects });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: 'An error occurred while fetching subjects' });
    }
};



const updateSubject = async (req, res) => {
    try {
        const subjectData ={
            subjectName: req.body.subjectName,
            subjectCode: req.body.subjectCode,
        };
        const updatedSubject = await subjectService.updateSubject(req.params.selectedSubjectId, subjectData);
        console.log(updatedSubject);
        if (updatedSubject.status) {
            res.status(200).json({ status: true, message: updatedSubject.message });
        } else {
            res.status(400).json({ status: false, message: updatedSubject.message });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: 'An error occurred while updating the subject' });
    }
};


const deleteSubject = async (req, res) => {
    try {
        const subjectId = req.params.subjectId;
        const deletedSubject = await subjectService.deleteSubject(subjectId);
        if (deletedSubject) {
            res.status(200).json({ status: true, message: "deleted succesfully" });
        } else {
            res.status(400).json({ status: false, message: "subject not found " });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: 'An error occurred while deleting the subject' });
    }

}

const subjectsForUser = async (req, res) => {
    try{
        var huti = req.params.userName;
        console.log(huti);
         const usernmae = req.body;
         const eventToOccur = await subjectService.subjectsForUser(huti);
         if (eventToOccur) {
            res.status(200).json({ status: true, data: eventToOccur });
        } else {
            res.status(400).json({ status: false, message: "subject not found " });
        }
    }
    catch(error){
        // console.error(error);
        // res.status(500).json({ status: false, message: 'An error occurred while getting the subject' });
    }
};


module.exports = { createSubject , getAllSubjects , updateSubject , deleteSubject , subjectsForUser};