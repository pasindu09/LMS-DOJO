
const { tryParse } = require('selenium-webdriver/http');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports.login = async (userDetails) => {
    try {
      const { email, password } = userDetails;
  
      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('User does not exist');
      }
  
      // Compare the provided password with the stored hashed password
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        throw new Error('Invalid password');
      }

      const role = user.role
      const name = user.name
      const class1 = user.class
  
      // Return the user and token
      return {
        user,
        name,
        role,
        class1,
      };
    } catch (error) {
      throw error;
    }
  };

module.exports.getAllUsers = () => {
    return new Promise(function (resolve, reject) {
        User.find()
            .then(users => resolve(users))
            .catch(error => reject(error));
    });
}

module.exports.createUser = (userDetails) => {
    return new Promise(function (resolve, reject) {
        // Check if a user with the same email already exists
        User.findOne({ email: userDetails.email })
            .then(existingUser => {
                if (existingUser) {
                    reject(new Error('User with the same email already exists'));
                    return;
                }

                var userModelData = new User();
                userModelData.name = userDetails.name;
                userModelData.email = userDetails.email;
                userModelData.role = userDetails.role;
                userModelData.class = userDetails.class;
                userModelData.teacherclasses = userDetails.teacherclasses;
                userModelData.selectedSubjects = userDetails.selectedSubjects;
               

                // Hash the password
                bcrypt.hash(userDetails.password, saltRounds, function (err, hash) {
                    if (err) {
                        reject(err);
                    } else {
                        userModelData.password = hash;

                        userModelData
                            .save()
                            .then(() => resolve(true))
                            .catch((error) => reject(error));
                    }
                });
            })
            .catch(error => reject(error));
    });
};

module.exports.updateUser = (email, userDetails) => {
  return new Promise(function (resolve, reject) {
    User.findOne({ email })
      .then(user => {
        if (!user) {
          reject(new Error('User does not exist'));
          return;
        }

        user.name = userDetails.name;
        user.email = userDetails.email;
        user.role = userDetails.role;
        user.class = userDetails.class;
        user.selectedSubjects = userDetails.selectedSubjects;
        user.teacherclasses = userDetails.teacherclasses;
        

        // Checking if the password field is empty
        if (userDetails.password !== undefined && userDetails.password !== "") {
          bcrypt.hash(userDetails.password, saltRounds, function (err, hash) {
            if (err) {
              reject(err);
            } else {
              user.password = hash;

              user.save()
                .then(() => resolve(true))
                .catch((error) => reject(error));
            }
          });
        } else {
          // If the password field is empty, saving the user without updating the password
          user.save()
            .then(() => resolve(true))
            .catch((error) => reject(error));
        }
      })
      .catch(error => reject(error));
  });
};






module.exports.getAllClasses = async (userEmail) => {
  
  try {

    const user = await User.findOne({email: userEmail , role: "teacher"});
   
    if (!user) {
      return { success: false, message: 'There is no such user' };
    }
    
    const teacherclasses = user.teacherclasses;
    if(!teacherclasses){
      return { success: false, message: 'You are not a teacher' };
    }

    return { success: true, teacherclasses };
    
  } catch (error) {
    console.error(error.message);
    return { success: false, message: 'Server Error' };
    
  }
}


module.exports.getAllSubjects = async (userEmail) => {
  try {
    const user = await User.findOne({email: userEmail});
    if (!user) {
      return { success: false, message: 'There is no such user' };
    }
    const selectedSubjects = user.selectedSubjects;

    if(!selectedSubjects){
      return { success: false, message: 'You are not a student' };
    }

    
  } catch (error) {
    console.error(error.message);
    return { success: false, message: 'Server Error' };
    
  }

}






module.exports.deleteUser = (email) => {
    return new Promise(function (resolve, reject) {
        User.findOneAndDelete({ email })
            .then(() => resolve(true))
            .catch(error => reject(error));
    });
};

module.exports.getStudentByclass = async (studentClass,studentsubject) => {
  /* try {
     const rolesToSearch = ['pStudent', 'lsStudent', 'usStudent'];
     
 
     const user = await User.find({
       role: { $in: rolesToSearch },
       class: studentClass,
     });
     if (!user) {
       return { success: false, message: 'There is no such user' };
     }
 
     return { success: true, user };
     
   } catch (error) {
     console.error(error.message);
     return { success: false, message: 'No student with the specific class' };
     
   }*/
   return new Promise(function (resolve, reject) {
     const rolesToSearch = ['pStudent', 'lsStudent', 'usStudent'];
      User.find({
       role: { $in: rolesToSearch },
       class: studentClass,
       selectedSubjects: { $in: [studentsubject] },
     })
         .then(user => resolve(user))
         .catch(error => reject(error));
 });
     
 };
