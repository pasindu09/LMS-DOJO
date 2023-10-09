var userService = require('../services/userService');
const path = require('path');
const jwt = require('jsonwebtoken');
const secretKey = 'abc@123';

var login = async (req, res) => {
    try {
        const user = await userService.login(req.body);

        const token = await generateToken(user);
        console.log(token);
        console.log(user.role);

        res.set('authorization', `Bearer ${token}`);

        // Redirect based on user role
        if (user.role === 'admin') {
            res.status(200).json({ status: true, message: 'admin', token, user });
        } else if (user.role === 'teacher') {
            res.status(200).json({ status: true, message: 'teacher', token, user });
        } else if (user.role === 'pStudent') {
            res.status(200).json({ status: true, message: 'pStudent', token, user });
        } else if (user.role === 'lsStudent') {
            res.status(200).json({ status: true, message: 'lsStudent', token, user });
        } else if (user.role === 'usStudent') {
            res.status(200).json({ status: true, message: 'usStudent', token, user });
        } else {
            res.status(200).json({ status: false, message: 'Invalid role', token });
        }
    } catch (error) {
        res.send({ status: false, message: error.message });
    }
};



async function generateToken(user) {
    const payload = {
      name: user.name,
      email: user.email,
      role: user.role,
    };
  
    // Check if the user role is 'pStudent', 'lsStudent', or 'usStudent'
    if (['pStudent', 'lsStudent', 'usStudent'].includes(user.role)) {
      payload.class = user.class1;
    }
  
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
    return token;
  }
  

var getStudentUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        const filteredUsers = users.filter(user => ['lsStudent', 'pStudent', 'usStudent'].includes(user.role));

        res.status(200).json({ status: true, data: filteredUsers });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, data: [] });
    }
}


const getStudentUsersfiltered = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        const filteredUsers = users.filter(user => ['lsStudent'].includes(user.role));
        const filteredUsers2 = users.filter(user => ['usStudent'].includes(user.role));
        const filteredUsers3 = users.filter(user => ['pStudent'].includes(user.role));

        const counts = [filteredUsers.length, filteredUsers2.length, filteredUsers3.length];

        res.status(200).json({ status: true, data: counts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, data: [] });
    }
};

const getStudentUsersfiltered2 = async (req, res) => {
    try {
        const TeacherclassOptions = ['1A', '1B', '1C', '2A', '2B', '2C', '3A', '3B', '3C', '4A', '4B', '4C', '5A', '5B', '5C', '6A', '6B', '6C', '7A', '7B', '7C', '8A', '8B', '8C', '9A', '9B', '9C', '10A', '10B', '10C', '11A', '11B', '11C', '12A', '12B', '12C'];
        const users = await userService.getAllUsers();

        // Initialize an array to store counts
        const classCounts = [];

        // Loop through each class option
        for (const classOption of TeacherclassOptions) {
            // Filter users for the current class
            const classUsers = users.filter(user => user.class === classOption);

            // Get the count of documents for this class
            const classDocumentCount = classUsers.length;

            // Get an array of roles for this class
            const classRoles = classUsers.map(user => user.role);

            // Store the information in the classCounts array
            classCounts.push({
                classOption,
                documentCount: classDocumentCount,
                roles: classRoles
            });
        }
         console.log(classCounts);
        res.status(200).json({ status: true, data: classCounts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: "bad respond eint" });
    }
};


var getAdminUsers = async (req, res) => {
    try {
      const users = await userService.getAllUsers();
      const filteredUsers = users.filter(user => user.role === 'admin');
      
      res.status(200).json({ status: true, data: filteredUsers });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: false, data: [] });
    }
  };
  

var getTeacherUsers = async (req, res) => {
    try {
      const users = await userService.getAllUsers();
      const filteredUsers = users.filter(user => user.role === 'teacher');
      
      res.status(200).json({ status: true, data: filteredUsers });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: false, data: [] });
    }
  };
  

const createUser = async (req, res) => {
    try {
        const status = await userService.createUser(req.body);
        if (status) {
            res.status(200).json({ status: true, message: 'User created successfully' });
        } else {
            res.status(400).json({ status: false, message: 'Error creating user' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, message: 'An error occurred while creating the user' });
    }
};



var updateUser = async (req, res) => {
    const email = req.params.email;
    try {
        const status = await userService.updateUser(email, req.body);
        if (status) {
            res.send({ status: true, message: "User updated successfully" });
        } else {
            res.send({ status: false, message: "Error updating user" });
        }
    } catch (error) {
        res.send({ status: false, message: "Error updating user", error });
    }
};

var deleteUser = async (req, res) => {
    var email = req.params.email;
    var status = await userService.deleteUser(email);
    if (status) {
        res.send({ "status": true, "message": "User deleted successfully" });
    } else {
        res.send({ "status": false, "message": "Error deleting user" });
    }
};



var getAllClasses = async (req, res) => {
    var email = req.params.email;
    var classes = await userService.getAllClasses(email);
    if (classes) {
        res.send({ "status": true, "message": "Classes found", classes });
    }
    else {
        res.send({ "status": false, "message": "Error finding Classes" });
    }
  
}

var getAllSubjects = async (req, res) => {
    var email = req.params.email;
    var subjects = await userService.getAllSubjects(email);
    if (subjects) {
        res.send({ "status": true, "message": "Subjects found", subjects });
    }
    else {
        res.send({ "status": false, "message": "Error finding Subjects" });
    }
}

var getStudentByclass = async (req, res) => {
    
    try {

        var value = await req.params.selectedValue;
        var value2 = await req.params.selectedValue2;
        const users = await userService.getStudentByclass(value,value2);
        console.log(value);
        console.log(value2);
        console.log(users);
        
        
        res.status(200).json({ status: true, data: users });
      } catch (error) {
        console.error(error);
        res.status(500).json({ status: false, data: [] });
      }
    
};


module.exports = { login, getStudentUsers, getStudentUsersfiltered,getStudentUsersfiltered2, getAdminUsers, getTeacherUsers, createUser, updateUser, deleteUser, getAllClasses , getAllSubjects , getStudentByclass};
