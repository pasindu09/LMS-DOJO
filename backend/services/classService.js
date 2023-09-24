const Class = require('../models/classModel');


module.exports.createClass = (userDetails) => {
    return new Promise(function (resolve, reject) {
    var classModelData = new Class();
    classModelData.class = userDetails.nameclass;
    classModelData.date = userDetails.date;
    classModelData.sessionStart = userDetails.sessionStart;
    classModelData.sessionEnd = userDetails.sessionEnd;
    classModelData.Students = userDetails.studentByClasss;
    classModelData.subject = userDetails.subject;

       // console.log(req.body.nameclass, req.body.date, req.body.sessionStart, req.body.sessionEnd, req.body.studentByClasss);
    classModelData.save()
    .then((savedClass) => resolve(savedClass))
    .catch((error) => reject(error));
    });
}

module.exports.getmyattendance = (userid,Subject) => {
    return new Promise(function (resolve, reject) {
        Class.countDocuments({  Students:{
            $elemMatch: {
              $in: [userid]
            }
          }, subject:Subject })
        .then((attendance) => resolve(attendance))
        .catch((error) => reject(error));
    });
}

module.exports.NoOfSessionsForClass = (studentclass,subject) => {
    return new Promise(function (resolve, reject) {
        Class.countDocuments({subject: subject , class: studentclass})
        .then((attendance) => resolve(attendance))
        .catch((error) => reject(error));
    });
}