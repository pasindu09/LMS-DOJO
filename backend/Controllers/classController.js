var classService = require('../services/classService');

const createClass = async (req, res) => {
    try {
       

       // console.log(req.body.nameclass, req.body.date, req.body.sessionStart, req.body.sessionEnd, req.body.studentByClasss);
        const status = classService.createClass(req.body);
        if (status) {
            res.status(200).json({ status: true, message: 'Class created successfully' });
        } else {
            res.status(400).json({ status: false, message: 'Error creating Class' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: 'An error occurred while creating the Class' });
    }
};

const getmyattendance = async (req, res) => {
    let arrayforattendance = [];
    let arrayForNofSessions = [];
    let items = req.params.subject.split(',');
//    for (let index = 0; index < items.length; index++) {
//     arrayforattendance.push(items[index]);
//     console.log(arrayforattendance);
// }
    console.log(items); 
    console.log(req.params.class);

    var studentclass = req.params.class;
    var vale = 0;
console.log(req.params.userid);
    try {
        for (let index = 0; index < items.length; index++) {
            const attendance = await classService.getmyattendance(req.params.userid,items[index]);
            if (attendance === 0) {
                arrayforattendance.push(vale);
            } else {
                arrayforattendance.push(attendance);
            }
            
            
            
        }


        for (let index = 0; index < items.length; index++) {
            const attendance = await classService.NoOfSessionsForClass(studentclass,items[index]);
            if (attendance === 0) {
                arrayForNofSessions.push(vale);
            } else {
                arrayForNofSessions.push(attendance);
            }
            
            console.log(arrayForNofSessions);
            
        }


                res.status(200).json({ status: true, data: arrayforattendance, dataNew: arrayForNofSessions});
       
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: 'An error occurred while getting attendance' });
    }

}


module.exports = {createClass,getmyattendance};