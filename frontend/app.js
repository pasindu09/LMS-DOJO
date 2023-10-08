






const adminSidebar = {
  template: `
  <div class="adminsidebar">
  <span class="absolute text-white text-4xl top-5 left-4 cursor-pointer">
      <i class="fas fa-bars px-2 bg-gray-900 rounded-md" @click="OpenSidebar()"></i></span>
                  <div class="text-gray-100 text-xl">
  <div class="fixed top-0 bottom-0 lg:left-0 left-[-300px] p-2 w-[300px] overflow-y-auto text-center bg-black" id="adminsidebar">
  
   

      <div class="p-2.5 mt-1 flex items-center">
        <i class="fas fa-user-circle"></i>
        <h1 class="font-bold texy-gray-200 text-[15px] ml-3"> User Name</h1>
        <i class="fas fa-times ml-20 cursor-pointer lg:hidden" @click="OpenSidebar()"></i>
        </div>
        <hr class="my-2 text-gray-700">


        <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover bg-orange-600 text-white ">
          <i class="fas fa-home"></i> 
          <span class="text-[15px] ml-4 text-gray-200">

          <a href="./admin-dashboard.html">Dashboard</a></span>  
          </div>

          <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover bg-orange-600 text-white " @click="dropdown()">
          <i class="fas fa-user"></i> 
          <div class="flex justify-between w-full items-center">
          <span class="text-[15px] ml-4 text-gray-200">Manage Users</span>  
          <span class="text-sm rotate-0" id="arrow"><i class="fas fa-chevron-down ml-2"></i></span>
      </div>
      </div>


      <div class="text-left text-sm font-thin mt-2 w-4/5 mx-auto text-gray-200 flex flex-col hidden" id="submenu">
        <a href="./manage-students.html" class="cursor pointer p-2 hover:bg-gray-700 rounded-md mt-1 hover:text-white">Manage Students</a>  
        <a href="./manage-teachers.html" class="cursor pointer p-2 hover:bg-gray-700 rounded-md mt-1 hover:text-white">Manage Teachers</a>  
        <a href="./manage-admins.html" class="cursor pointer p-2 hover:bg-gray-700 rounded-md mt-1 hover:text-white">Manage Administrators</a>  
        <a href="./manage-subjects.html" class="cursor pointer p-2 hover:bg-gray-700 rounded-md mt-1 hover:text-white">Manage Subjects</a>  


        </div>

      
   


      
      <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover bg-orange-600 text-white ">
      <i class="fa-solid fa-clipboard-user"></i>
          <a href="#" class="text-[15px] ml-4 text-gray-200">Classes</a> 
          </div>
   


      
      <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover bg-orange-600 text-white ">
          <i class="fa fa-calendar"></i> 
          <a href="./manage-events.html" class="text-[15px] ml-4 text-gray-200">Manage Events</a>
      </div>


          <hr class="my-4 text-gray-700">

              
      

        <div class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover bg-orange-600 text-white " @click="logout">
        <i class="fa-solid fa-arrow-right-from-bracket"></i>
          <span class="text-[15px] ml-4 text-gray-200">Logout</span>  
      </div>
      </div>


    </div>
</div>
  `,
  methods: {
    navigateTo(url) {
      window.location.href = url;
    },
    dropdown() {
      document.querySelector("#submenu").classList.toggle("hidden");
      document.querySelector("#arrow").classList.toggle("rotate-180");
    },
    OpenSidebar() {
      document.querySelector("#adminsidebar").classList.toggle("left-[-300px]");
    },

    logout() {
      this.$emit('logout');
    }
  },
};

Vue.component('adminsidebar', adminSidebar);


new Vue({
  el: '#app',
  data() {
    return {
      myattendancenew: [],
      idoftheuser: '',
      arrayofsubjectstwo: [],
      arrayofpresent: [],
      valueforexample: 'valueforexample',
      arrayofsubjects: [],
      veryweird: '',
      userrn: [],
      studentByClass: [],
      teacherusercount: '',
      showSubmissionsPopup: false,
      openGradesPopup: false,
      TeacherclassOptions: ['1A', '1B', '1C', '2A', '2B', '2C', '3A', '3B', '3C', '4A', '4B', '4C', '5A', '5B', '5C', '6A', '6B', '6C', '7A', '7B', '7C', '8A', '8B', '8C', '9A', '9B', '9C', '10A', '10B', '10C', '11A', '11B', '11C', '12A', '12B', '12C'],
      teacherclasses: [],
      userSubjects: [],
      studentUsers: [],
      studentUserCount: '',
      classname: '',
      adminUsers: [],
      admincount: '',
      teacherUsers: [],
      forclasses: [],
      events: [],
      submissions: [],
      activities: [],
      subjects: [],
      searchQuery: '',
      selectedSubjects: [],
      Activity_ID: '',
      ActivityID: '',
      currentActivityID: '',
      activitiesPerTeacher: [],
      activitiesPerClass: [],
      currentemail: '',
      user: '',
      activity: '',
      timetables: [],
      userName: '',
      studentClass: '',
      email: '',
      password: '',
      loginError: '',
      nameclass: '',
      myattendance: [],
      date: '',
      sessionStart: '',
      sessionEnd: '',
      subject: '',
      subjectsForUserarray: '',
      showEditActivityPopup: false,
      openCreateUserPopup: false,
      showEditUserPopup: false,
      showEditEventPopup: false,
      showEditSubjectPopup: false,
      isFileInputDisabled: false,
      grades: '',
      feedback: '',
      submission: '',
      activityId: '',
      studentEmail: '',
      grade: 0,
      hasGrade: false,
      openGradesBoardPopUp: false,
      ShowEditGradesForm: false,
      selectedActivityForGrade: null,
      grades: [],
      theresultspopupisopen: false,
      results: null,
    

    
    



      classOptions: ['1A', '1B', '1C', '2A', '2B', '2C', '3A', '3B', '3C', '4A', '4B', '4C', '5A', '5B', '5C', '6A', '6B', '6C', '7A', '7B', '7C', '8A', '8B', '8C', '9A', '9B', '9C', '10A', '10B', '10C', '11A', '11B', '11C', '12A', '12B', '12C'],
      user: {
        name: '',
        email: '',
        password: '',
        role: '',
        forclasses: '',
        teacherclasses: [],
        subjects: [],
        selectedSubjects: [],

      },
      editedUser: {
        name: '',
        email: '',
        role: '',
        password: '',
        class: '',
        teacherclasses: [],
        selectedSubjects: [],

      },
      successMessage: '',
      errors: {
        password: ''
      },
      activity: {
        activityName: '',
        activityDescription: '',
        dueDate: '',
        submissiontime: '',
        forclasses: [],
        submissionLink: '',
        downloadLink: '',
        submissionGrade: '',
        feedback: '',
        createdBy: '',
        Activity_ID: '',
        submissionStatus: '',
        ActivityselectedSubjects: [],
        activityFile: '' 



      },

      event: {
        name: '',
        date: '',
        time: '',
        description: '',
        location: '',
        image: null,
      },
      editedEvent: {
        selectedEventId: '',
        name: '',
        date: '',
        time: '',
        description: '',
        location: '',
        image: null,
      },

      editedActivity: {
        selectedActivityId: '',
        activityName: '',
        activityDescription: '',
        dueDate: '',
        submissiontime: '',
        forclasses: [],
        Activity_ID: '',

      },

      editedGrades: {
        selectedActivityId: '',
        studentEmail: '',
        grade: '',
        feedback: ''
      },



      submission: {
        submissionName: '',
        submissionFile: null,
        Activity_ID: '',
        currentActivityID: '',

      },

      editedSubject: {
        selectedSubjectId: '',
        subjectName: '',
        subjectCode: '',

      },



      subject: {
        subjectName: '',
        subjectCode: '',
      },

      quiz: {
        quizName: '',
        SingleQuestion: [],
      },





    };
  },

  mounted() {
   this.getStudentUsers();
    this.getAdminUsers();
     this.getTeacherUsers();
    this.getAllSubjects();
     this.getAllEvents();
     this.getAllClasses();
    this.getActivitiesPerClass();

    //do not uncomment  this.getAllActivities();
    //do not uncomment this.getSubmissionsByActivity();

    this.getActivitiesPerTeacher();

    this.getAllSubmissions();

  },



  created() {
    this.loadUserName();
    this.getAllTimetables();
    this.loadClassName();
    this.subjectsForUser();
    this.getmyattendance();
  },

  computed: {
    isEmailValid() {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(this.user.email);
    },
    isPasswordValid() {
      return this.user.password.length >= 8;
    },

    timetableData() {
      if (this.timetables.length === 0) return [];

      const timetable = this.timetables[0].timetable;
      const newTimetableData = [];

      // Add the first 4 rows to the new array
      for (let i = 0; i < 4; i++) {
        newTimetableData.push(timetable[i]);
      }
      newTimetableData.push({
        time: "10.55 AM - 11.10 AM",
        Monday: "Interval",
        Tuesday: "Interval",
        Wednesday: "Interval",
        Thursday: "Interval",
        Friday: "Interval",
      });

      for (let i = 4; i < timetable.length; i++) {
        newTimetableData.push(timetable[i]);
      }

      return newTimetableData;
    },

    filteredSubjects() {
      // Filter the subjects based on the search query
      return this.subjects.filter(subject => {
        const normalizedQuery = this.searchQuery.toLowerCase();
        return (
          subject.subjectName.toLowerCase().includes(normalizedQuery) ||
          subject.subjectCode.toLowerCase().includes(normalizedQuery)
        );
      });
    },

    totalcount() {
      return this.studentUserCount + this.teacherusercount + this.admincount;
    },

    buttonText() {
      return this.hasGrade ? 'Edit marks' : 'Add grades';
    }


  },

  watch: {
    'user.role': 'updateClassOptions'
  },

  methods: {


    async downloadLearningMaterial(filename) {
     try {
      
      const encodedFilename = encodeURIComponent(filename);
      const response = await axios.get(`/downloadLearningMaterial?filename=${encodedFilename}`, {
        responseType: 'blob',
      });

      console.log(response.data);
      const blob = new Blob([response.data], { type: 'application/octet-stream' });

      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(blob);

      // Decode the filename before setting it as the download attribute
      const decodedFilename = decodeURIComponent(filename);
      downloadLink.download = decodedFilename;

      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      URL.revokeObjectURL(downloadLink.href);
      
     } catch (error) {
        console.error(error);


      
     }


    },


    async downloadFile(filename) {
      try {
        const encodedFilename = encodeURIComponent(filename);
        const response = await axios.get(`/download?filename=${encodedFilename}`, {
          responseType: 'blob',
        });

        const blob = new Blob([response.data], { type: 'application/octet-stream' });

        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);

        // Decode the filename before setting it as the download attribute
        const decodedFilename = decodeURIComponent(filename);
        downloadLink.download = decodedFilename;

        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);

        URL.revokeObjectURL(downloadLink.href);

      } catch (error) {
        console.error(error);
      }
    },




    //handleBeforeUnload(e) {
    //localStorage.removeItem('Activity_ID');

    //},

    validatePassword() {
      if (this.user.password.length < 8) {
        this.errors.password = 'Password must be at least 8 characters long';
      } else {
        this.errors.password = '';
      }
    },


    login() {
      const userData = {
        email: this.email,
        password: this.password,
      };

      email = this.email
      localStorage.setItem('Currentemail', email);

      // Send the user data to the backend using an HTTP request
      // After successful login
      axios.post('/user/login', userData)
        .then(response => {
          const token = response.data.token;

          if (response.data.status === false) {
            this.loginError = response.data.message;
            return;
          }

          const decodedToken = JSON.parse(atob(token.split('.')[1]));
          console.log(decodedToken);
          const userName = decodedToken.name;
          const studentClass = decodedToken.class;

          // Store the token in the local storage
          localStorage.setItem('token', token);
          localStorage.setItem('userName', userName);
          localStorage.setItem('studentClass', studentClass);
          const storedToken = localStorage.getItem('token');
          console.log(storedToken);
          console.log(studentClass);


          // Redirect based on user role
          if (response.data.user.role === 'admin') {
            window.location.href = `/admin/admin-dashboard?token=${token}`;
          } else if (response.data.user.role === 'teacher') {
            window.location.href = `/teacher/teacher-dashboard?token=${token}`;
          } else if (response.data.user.role === 'pStudent') {
            window.location.href = `/primary-student/primary-student-dashboard?token=${token}`;
          } else if (response.data.user.role === 'lsStudent') {
            window.location.href = `/lower-secondary-student/lower-secondary-student-dashboard?token=${token}`;
          } else if (response.data.user.role === 'usStudent') {
            window.location.href = `/upper-secondary-student/upper-secondary-student-dashboard?token=${token}`;
          } else {
            console.error('Invalid role');
          }

        })
        .catch(error => {
          console.log(error.response);
          console.log(error.message);
          console.log(error);
          this.loginError = error.response && error.response.data && error.response.data.message
            ? error.response.data.message
            : error.message || 'An error occurred during login.';

        });
    },

    loadUserName() {
      const userName = localStorage.getItem('userName');

      if (userName) {
        this.userName = userName;
      } else {
        this.userName = 'Guest';
      };
      console.log("the thing is working soo please work", userName);
    },




    getStudentUsers() {
      axios.get('/admin/getStudentUsers')
        .then(response => {
         // console.log(response.data);
          this.studentUsers = response.data.data;
          this.studentUserCount = response.data.data.length;
        })
        .catch(error => {
          console.error(error);
        });
    },
    getAdminUsers() {
      axios.get('/admin/getAdminUsers')
        .then(response => {
         // console.log(response.data);
          this.adminUsers = response.data.data;
          this.admincount = response.data.data.length;
        })
        .catch(error => {
          console.error(error);
        });
    },
    getTeacherUsers() {
      axios.get('/admin/getTeacherUsers')
        .then(response => {
          console.log(response.data);
          this.teacherUsers = response.data.data;
          this.teacherusercount = response.data.data.length;
        })
        .catch(error => {
          console.error(error);
        });
    },

    openPopup() {
      this.openCreateUserPopup = true;
    },

    updateClassOptions() {
      if (this.user.role === 'pStudent') {
        this.classOptions = ['1A', '1B', '1C', '2A', '2B', '2C', '3A', '3B', '3C', '4A', '4B', '4C', '5A', '5B', '5C'];
        this.user.class = this.classOptions[0];
      } else if (this.user.role === 'lsStudent') {
        this.classOptions = ['6A', '6B', '6C', '7A', '7B', '7C', '8A', '8B', '8C', '9A', '9B', '9C', '10A', '10B', '10C'];
        this.user.class = this.classOptions[0];
      } else if (this.user.role === 'usStudent') {
        this.classOptions = ['11A', '11B', '11C', '12A', '12B', '12C'];
        this.user.class = this.classOptions[0];
      }
    },

    //quiz handler
    addQuestion() {
      this.quiz.SingleQuestion.push({
        question: '',
        options: '',
        correctAnswer: ''
      });
    },


    CreateQuiz() {
      axios.post('/quiz/createQuiz', this.quiz)
        .then(response => {
          alert(response.data.message);
          this.quiz.quizName = '';
          this.quiz.SingleQuestion = [];
          this.quiz.correctAnswer = '';
          this.quiz.options = [];
          console.log(response.data.data);
        })
        .catch(error => {
          console.error(error);
          alert('An error occurred while creating the quiz.');
        });
    },



    submitCreateUserForm() {
      this.validatePassword();

      if (this.errors.email || this.errors.password) {
        return;
      }

      axios
        .post('/admin/createUser', this.user)
        .then(response => {
          alert(response.data.message);
          this.openCreateUserPopup = false;

          if (this.user.role === 'admin') {
            this.getAdminUsers();
          } else if (this.user.role === 'teacher') {
            this.getTeacherUsers();
          } else if (['lsStudent', 'pStudent', 'usStudent'].includes(this.user.role)) {
            this.getStudentUsers();
          }

          // Clear the user object fields
          this.user.name = '';
          this.user.email = '';
          this.user.password = '';
          this.user.role = '';
          this.user.class = '';
          this.user.teacherclasses = [];
          this.user.selectedSubjects = [];
        })
        .catch(error => {
          console.error(error);
          alert('An error occurred while creating the user.');
        });
    },

    openEditUserPopup(user) {
      console.log(this.user);
      this.editedUser = { ...user };
      this.editedUser.password = '';
      this.showEditUserPopup = true;
    },


    updateEditedClassOptions() {
      // Filter the classOptions array based on the selected role
      if (this.editedUser.role === 'pStudent') {
        return this.classOptions.filter(option => option.startsWith('1') || option.startsWith('2') || option.startsWith('3') || option.startsWith('4') || option.startsWith('5'));
      } else if (this.editedUser.role === 'lsStudent') {
        return this.classOptions.filter(option => option.startsWith('6') || option.startsWith('7') || option.startsWith('8'));
      } else if (this.editedUser.role === 'usStudent') {
        return this.classOptions.filter(option => option.startsWith('9') || option.startsWith('10') || option.startsWith('11') || option.startsWith('12'));
      } else {
        return [];
      }
    },

    submitEditUserForm() {
      const isPasswordEmpty = this.editedUser.password === undefined || this.editedUser.password === "";

      if (isPasswordEmpty) {
        delete this.editedUser.password;
      }


      axios.put(`/admin/updateUser/${this.editedUser.email}`, this.editedUser)
        .then(response => {
          console.log(response.data);
          this.showEditUserPopup = false;
          // Update the user list based on role
          if (this.editedUser.role === 'admin') {
            this.getAdminUsers();
          } else if (this.editedUser.role === 'teacher') {
            this.getTeacherUsers();
          } else if (['lsStudent', 'pStudent', 'usStudent'].includes(this.editedUser.role)) {
            this.getStudentUsers();
          }
        })
        .catch(error => {
          console.error(error);
        });
    },

    deleteUser(email) {
      const confirmed = window.confirm(`Are you sure you want to delete the user with email ${email}?`);

      if (confirmed) {
        axios.delete(`/admin/deleteUser/${email}`)
          .then(response => {
            console.log(response.data);
            // Update the user list based on role
            if (this.adminUsers.find(user => user.email === email)) {
              this.adminUsers = this.adminUsers.filter(user => user.email !== email);
            } else if (this.teacherUsers.find(user => user.email === email)) {
              this.teacherUsers = this.teacherUsers.filter(user => user.email !== email);
            } else if (this.studentUsers.find(user => user.email === email)) {
              this.studentUsers = this.studentUsers.filter(user => user.email !== email);
            }
          })
          .catch(error => {
            console.error(error);
          });
      }
    },




    // Event handlers

    onFileChangeCreateEvent(e) {
      console.log(e.target.files[0]);
      this.event.image = e.target.files[0];
    },

    formatDate(dateString) {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    },




    //class handler

    getAllClasses() {
      const currentemail = localStorage.getItem('Currentemail');
      console.log(currentemail)
      axios.get(`/user/getAllClasses/${currentemail}`)

        .then(response => {
          console.log(response.data);
          this.teacherclasses = response.data.classes.teacherclasses;
          console.log(this.teacherclasses);
        }).catch(error => {
          console.error(error);
        });


    },


    //activity Handler



    submitCreateActivityForm() {
      const currentemail = localStorage.getItem('Currentemail');

      // Set the currentemail to the activity object
      this.activity.createdBy = currentemail;
      console.log(currentemail);

      const formData = new FormData();
      formData.append("activityName", this.activity.activityName);
      formData.append("activityDescription", this.activity.activityDescription);
      formData.append("dueDate", this.activity.dueDate);
      formData.append("submissiontime", this.activity.submissiontime);
      formData.append("forclasses", this.activity.forclasses);
      formData.append("submissionLink", this.activity.submissionLink);
      formData.append("downloadLink", this.activity.downloadLink);
      formData.append("submissionGrade", this.activity.submissionGrade);
      formData.append("feedback", this.activity.feedback);
      formData.append("createdBy", this.activity.createdBy);
      formData.append("Activity_ID", this.activity.Activity_ID);
      formData.append("activityFile", this.activityFile);
     
      axios.post('/activity/createActivity', formData ,{
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(response => {
          alert(response.data.message);
          console.log("Created Activity Data:", response.data.data);

          this.activity.activityName = '';
          this.activity.activityDescription = '';
          this.activity.dueDate = '';
          this.activity.submissiontime = '';
          this.activity.forclasses = '';
          this.activity.submissionLink = '';
          this.activity.downloadLink = '';
          this.activity.submissionGrade = '';
          this.activity.feedback = '';
          this.activity.createdBy = currentemail;
          this.activity.Activity_ID = '';
          this.activityFile = null;


        })

        .catch(error => {
          console.error(error);
          alert('An error occurred while creating the activity.');
        });

    },





    // getAllActivities() {
    //   axios.get('/activity/getAllactivities')
    //     .then(response => {
    //       console.log(response.data);
    //       this.activities = response.data.data;
    //     }
    //     ).catch(error => {
    //       console.error(error);
    //     }
    //     );

    // },

    getActivitiesPerTeacher() {
      const currentemail = localStorage.getItem('Currentemail');
      console.log(currentemail)
      axios.get(`/activity/getActivitiesPerTeacher/${currentemail}`)
        .then(response => {
          //console.log(response.data);
          this.activities = response.data.data;
        }
        ).catch(error => {
          console.error(error);
        }
        );

    },







    getActivitiesPerClass() {


      const studentclass = localStorage.getItem('studentClass');
      console.log(studentclass);
      axios.get(`/activity/getActivitiesPerClass/${studentclass}`)

        .then(response => {
          // console.log(response.data);
          this.activities = response.data.data;

        }
        ).catch(error => {
          console.error(error);
        }
        );


    },


    openthepopupthatdisplaystheresults(){
      this.theresultspopupisopen = true;
      this.fetchResults();
    },

    fetchResults() {
      const currentemail = localStorage.getItem('Currentemail');
      console.log(currentemail);
      axios.get(`/results/${currentemail}`)
        .then(response => {
          console.log(response.data);
          this.grades = response.data.data;
          console.log(this.grades);
        })
        .catch(error => {
          console.error(error);
        });
    },






   
    



    //submission handler
    storeActivityID(Activity_ID) {
      currentActivityID = localStorage.setItem('Activity_ID', Activity_ID);
      console.log(currentActivityID);

    },

    submitCreateSubmissionForm() {

      const currentemail = localStorage.getItem('Currentemail');
      const currentActivityID = localStorage.getItem('Activity_ID');
      const formData = new FormData();
      formData.append("submissionName", this.submission.submissionName)
      formData.append("submissionFile", this.submissionFile);
      formData.append("submissionFile", this.submissionFile.name);
      formData.append("Activity_ID", currentActivityID); // Use the stored Activity_ID
      formData.append("studentEmail", currentemail); // Use the stored student email
      if (this.submissionFile != null) {
        this.submissionStatus = 'Submitted';

      }

      axios.post(`/uploads`, formData)
        .then(response => {
          alert(response.data.message);
          console.log(response.data.data);
          console.log(this.submissionFile.name);
          console.log(this.submission.Activity_ID);
          console.log(currentActivityID);
          console.log(currentemail);
          console.log(this.submissionStatus);
          localStorage.removeItem('Activity_ID');
          this.isFileInputDisabled = true;

        }
        ).catch(error => {
          console.error(error);
          alert('An error occurred while creating lala the submission.');
        });
    },



    openUpdateActivityPopup(activity) {

      this.editedActivity.selectedActivityId = activity._id;
      this.editedActivity.activityName = activity.activityName;
      this.editedActivity.activityDescription = activity.activityDescription;
      this.editedActivity.dueDate = this.formatDate(activity.dueDate);
      this.editedActivity.submissiontime = activity.submissiontime;
      this.editedActivity.forclasses = activity.forclasses;
      this.editedActivity.Activity_ID = activity.Activity_ID;
      this.showEditActivityPopup = true;

    },


    async submitGrades() {
      try {
        console.log(
          this.Activity_ID,
          this.studentEmail,
          this.grade,
          this.feedback
        )
        // Make a POST request to your API endpoint
        const response = await axios.post(`/activity/addGrades/${this.Activity_ID}`, {

          Activity_ID: this.Activity_ID,
          studentEmail: this.studentEmail,
          grade: this.grade,
          feedback: this.feedback
        });
          
        openGradesPopup = false;

        // Handle the response as needed (show a success message, etc.)
        console.log('Grades added successfully', response.data);
        alert('Grades added successfully!');

      } catch (error) {
        // Handle errors (show an error message, log the error, etc.)
        console.error('Error adding grades:', error);
      }
    },




    fetchGradesPerActivity(activity) {
      this.openGradesBoardPopUp = true;
      this.activityId = activity.Activity_ID;
      console.log(this.activityId);
      axios.get(`/activity/fetchGradesPerActivity/${this.activityId}`)
        .then(response => {
          console.log(response.data);
          this.grades = response.data.data;
          console.log(this.grades);
        }
        ).catch(error => {
          console.error(error);
        }
        );
    },

    EditGradesForm() {
      this.ShowEditGradesForm = true;

    },



    EditGrades() {
      axios.put(`/activity/EditGradePerStudentForActivity/${this.Activity_ID}`, {
        Activity_ID: this.Activity_ID,
        studentEmail: this.studentEmail,
        grade: this.grade,
        feedback: this.feedback
      }).then(response => {
        console.log(response.data);
        this.ShowEditGradesForm = false;
        this.openGradesBoardPopUp = false;
      }
      ).catch(error => {
        console.error(error);
      }
      );
    },



    submitEditActivityForm() {
      const formData = new FormData();
      formData.append('activityName', this.editedActivity.activityName);
      formData.append('activityDescription', this.editedActivity.activityDescription);
      formData.append('dueDate', this.editedActivity.dueDate);
      formData.append('submissiontime', this.editedActivity.submissiontime);
      formData.append('forclasses', this.editedActivity.forclasses);
      formData.append('Activity_ID', this.editedActivity.Activity_ID);
      //formData.append('Activity_ID', this.editedActivity.Activity_ID);

      console.log(this.editedActivity);

      axios.put(`/activity/updateActivity/${this.editedActivity.selectedActivityId}`, this.editedActivity)
        .then((response) => {
          this.showEditActivityPopup = false;
          this.getActivitiesPerTeacher();
          console.log(response.data);
        })
        .catch((error) => {
          console.error('Error updating activity:', error);
        });

    },


    confirmDeleteActivity(activityId) {
      if (confirm('Are you sure you want to delete this activity?')) {
        this.deleteActivity(activityId);
      }

    },




    deleteActivity(activityId) {
      axios.delete(`/activity/deleteActivity/${activityId}`)

        .then(response => {
          console.log(response.data);
          this.getActivitiesPerTeacher();



        })
        .catch(error => {
          console.error(error);
        });
    },



    //submission handler

    confirmDeleteSubmission(submissionId) {
      if (confirm('Are you sure you want to delete this submission?')) {
        this.deleteSubmission(submissionId);
      }
    },

    deleteSubmission(submissionId) {
      axios.delete(`/uploads/deleteSubmission/${submissionId}`)
        .then(response => {
          console.log(response.data);
          this.showSubmissionsPopup = false;



        })
        .catch(error => {
          console.error(error);
        });
    },




    viewSubmissionsForActivity(Activity_ID) {
      this.showSubmissionsPopup = true;
      this.getSubmissionsByActivity(Activity_ID);

    },

    addGradesForSubmission(
      Activity_ID,
      studentEmail,
      grade,
      feedback
    ) {

      this.openGradesPopup = true;
      this.Activity_ID = Activity_ID;
      this.studentEmail = studentEmail;
      this.grade = grade;
      this.feedback = feedback;




    },






    getSubmissionsByActivity(Activity_ID) {
      axios.get(`/uploads/getSubmissionsByActivity/${Activity_ID}`)
        .then(response => {
          console.log(response.data);
          this.submissions = response.data.data;
        }
        ).catch(error => {
          console.error(error);
        }
        );
    },





    onFileChangeCreateSubmission(event) {
      console.log(event.target.files[0]);
      this.submissionFile = event.target.files[0];
      console.log('Selected file:', this.submissionFile); // Log the selected file to verify


    },

    onFileChangeCreateActivity(event) {
      console.log(event.target.files[0]);
      this.activityFile = event.target.files[0];
      console.log('Selected file:', this.activityFile); // Log the selected file to verify
    },


    getAllSubmissions() {
      axios.get('/uploads/getAllSubmissions')
        .then(response => {
          console.log(response.data);
          this.submissions = response.data.data;
        }
        ).catch(error => {
          console.error(error);
        });

    },


    //subject handler



    submitCreateSubjectForm() {
      axios.post('/subject/createSubject', this.subject)
        .then(response => {
          alert(response.data.message);
          if (response.data.status) {
            window.location.href = '/admin/manage-subjects.html';
          }
        })
        .catch(error => {
          console.error(error);
          alert('An error occurred while creating the subject.');
          window.location.href = '/admin/manage-subjects.html';
        });
    },


    getAllSubjects() {
      axios.get('/subject/getAllSubjects')
        .then(response => {
          console.log(response.data);
          this.subjects = response.data.data;
        }
        ).catch(error => {
          console.error(error);
        }
        );
    },



    openEditSubjectPopup(subject) {
      this.editedSubject.selectedSubjectId = subject._id;
      this.editedSubject.subjectName = subject.subjectName;
      this.editedSubject.subjectCode = subject.subjectCode;
      this.showEditSubjectPopup = true;
    },

    submitEditSubjectForm() {

      const formData = new FormData();
      formData.append('subjectName', this.editedSubject.subjectName);
      formData.append('subjectCode', this.editedSubject.subjectCode);


      axios.put(`/subject/updateSubject/${this.editedSubject.selectedSubjectId}`, this.editedSubject)

        .then(response => {
          this.showEditSubjectPopup = false;
          this.getAllSubjects();
          console.log(response.data);
        })
        .catch(error => {
          console.error('Error updating subject:', error);
        });
    },


    confirmDeleteSubject(subjectId) {
      if (confirm('Are you sure you want to delete this subject?')) {
        this.deleteSubject(subjectId);
      }

    },


    deleteSubject(subjectId) {
      axios.delete(`/subject/deleteSubject/${subjectId}`)

        .then(response => {
          console.log(response.data);
          this.getAllSubjects();
        })
        .catch(error => {
          console.error(error);
        });
    },






    //event handler

    submitCreateEventForm() {
      const formData = new FormData();
      formData.append("eventName", this.event.name);
      formData.append("eventDate", this.formatDate(this.event.date));
      formData.append("eventTime", this.event.time)
      formData.append("eventDescription", this.event.description);
      formData.append("eventLocation", this.event.location);
      formData.append("eventImage", this.event.image);

      axios.post('/event/createEvent', formData)
        .then(response => {
          alert(response.data.message);
          this.getAllEvents();
          this.resetEventForm();
        })
        .catch(error => {
          console.error(error);
          alert('An error occurred while creating the event.');
        });
    },





    getAllEvents() {
      axios.get('/event/getAllEvents')
        .then(response => {
          console.log(response.data);
          this.events = response.data.data;
        })
        .catch(error => {
          console.error(error);
        });
    },

    resetEventForm() {
      this.event.name = '';
      this.event.date = '';
      this.event.time = '';
      this.event.description = '';
      this.event.location = '';
      this.event.image = null;
    },




    onFileChangeEditEvent(e) {
      console.log(e.target.files[0]);
      this.editedEvent.image = e.target.files[0];
    },

    openEditEventPopup(event) {
      this.editedEvent.selectedEventId = event._id;
      this.editedEvent.name = event.eventName;
      this.editedEvent.date = this.formatDate(event.eventDate);
      this.editedEvent.time = event.eventTime;
      this.editedEvent.description = event.eventDescription;
      this.editedEvent.location = event.eventLocation;
      this.editedEvent.image = event.eventImage;
      this.showEditEventPopup = true;
    },


    onEditFileChange(event) {
      const fileInput = event.target;
      if (fileInput.files.length > 0) {
        this.editedEvent.image = fileInput.files[0].name;
      }
    },


    submitEditEventForm() {
      const formData = new FormData();
      formData.append('eventName', this.editedEvent.name);
      formData.append('eventDate', this.editedEvent.date);
      formData.append('eventTime', this.editedEvent.time);
      formData.append('eventDescription', this.editedEvent.description);
      formData.append('eventLocation', this.editedEvent.location);
      formData.append('eventImage', this.editedEvent.image);

    
      axios.put(`/event/updateEvent/${this.editedEvent.selectedEventId}`, formData)
        .then((response) => {
          this.showEditEventPopup = false;
          this.getAllEvents();
        })
        .catch((error) => {
          console.error('Error updating event:', error);
        });
    },
    




    deleteEvent(eventId) {
      axios.delete(`/event/deleteEvent/${eventId}`)
        .then(response => {
          console.log(response.data);
          this.getAllEvents();
        })
        .catch(error => {
          console.error(error);
        });
    },









    // Timetable handler

    loadClassName() {
      const studentClass = localStorage.getItem('studentClass');

      if (studentClass) {
        this.studentClass = studentClass;
      } else {
        this.studentClass = '';
      };
    },




    getAllTimetables() {
      const studentClass = localStorage.getItem('studentClass');
      console.log(studentClass)
      axios.get(`/timetable/getClassTimetables/${studentClass}`)
        .then(response => {
          console.log(response.data);
          this.timetables = response.data.data;
        })
        .catch(error => {
          console.error(error);
        });
    },



    handleLogout() {
      localStorage.removeItem('token');
      localStorage.removeItem('userName');
      localStorage.removeItem('studentClass');
      localStorage.removeItem('Activity_ID');

      window.location.href = '/';
    },
    async getStudentForClass() {
      const endpointURL = '/class/';
      var selectElement = document.getElementById("mySelect");
      const selectsubject = document.getElementById('selectedsubject');
      var selectedValue = selectElement.value;
      selectsubject.disabled = false;
      console.log(selectedValue);

      // Create an object with a key-value pair
      if (selectsubject.value !== '') {
        var selectedValue2 = selectsubject.value;

        // fetch(endpointURL, {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify(data), // Send the object as JSON
        // })
        axios.get(`/class/${selectedValue}/${selectedValue2}`)
          .then(response => {
            console.log(response.data);

            this.studentByClass = response.data.data;
          })
          .catch(error => {
            console.error(error);
          });
      }


    },

    CreateClass() {
      var tbodyElement = document.getElementById('Getpresentuser');
      var rows = tbodyElement.querySelectorAll('tr');
      rows.forEach((row) => {
        var selectElement = row.querySelector('select');
        var selectedValue = selectElement.value;
        var useridrow = row.querySelector('#idvalue');
        var userid = useridrow.textContent;
        if (selectedValue === 'present') {
          this.arrayofpresent.push(userid);
        }
      });
      let studentByClasss = this.arrayofpresent;
      data = {
        nameclass: this.nameclass,
        date: this.date,
        sessionStart: this.sessionStart,
        sessionEnd: this.sessionEnd,
        subject: this.subject,
        studentByClasss,
      }
      const shouldCreate = confirm("Are you sure you want to create this class?");

      if (shouldCreate) {
        axios
          .post('/class/createClass', data)
          .then(response => {
            alert(response.data.message);
          })
          .catch(error => {
            console.error(error);
          });
      }

      // console.log(this.class);
      // var studentObject = {studentName: 1, studentEmail: 3, studentClass: teacherclass};
      // axios.post('/class/createClass', this.class)
      //   .then(response => {
      //     alert(response.data.message);
      //     this.class.class = '';
      //     this.class.date = '';
      //     this.class.sessionStart = '';
      //     this.class.sessionEnd = '';
      //     this.class.subject = '';
      //     this.getAllClasses();
      //     console.log(response.data.data);
      //   })
      //   .catch(error => {
      //     console.error(error);
      //     alert('An error occurred while creating the class.');
      //   });

      this.arrayofpresent = [];

    },


    subjectsForUser() {
      let userName = this.userName;

      axios.get(`/subjectsForUser/${userName}`)
        .then(response => {
          this.userrn = response.data.data;
          this.arrayofsubjects = this.userrn[0].selectedSubjects
          console.log(this.userrn[0].selectedSubjects);
        })
        .catch(error => {
          console.error(error);
        });





    },




    getmyattendance() {
      // this.subjectsForUsertwo() = this.arrayofsubjectstwo;
      // let userName = this.userName;
      // console.log(this.arrayofsubjectstwo);
      // let subject = this.subject;


      let userName = this.userName;

      axios.get(`/subjectsForUser/${userName}`)
        .then(response => {
          this.userrn = response.data.data;
          console.log(this.userrn[0].class)
          this.arrayofsubjects = this.userrn[0].selectedSubjects
          for (let i = 0; i < this.arrayofsubjects.length; i++) {
            this.arrayofsubjectstwo.push(this.arrayofsubjects[i]);
          }
          this.idoftheuser = this.userrn[0]._id;
          console.log(this.arrayofsubjects);
          console.log("kmdqkmwdkqmwdkmqwd");
          var userid = this.userrn[0]._id;
          axios.get(`/getmyattendance/${userid}/${this.arrayofsubjectstwo}/${this.userrn[0].class}`)
            .then(response => {
              console.log(response.data.data);
              console.log(response.data.dataNew);
              this.myattendance = response.data.data;
              console.log(this.myattendance);
              for (let i = 0; i < this.myattendance.length; i++) {

                // if(this.myattendance[i]/response.data.dataNew[i] *100 == NaN){
                //   valueforeach = 0;
                // }
                // else{
                //   valueforeach = this.myattendance[i]/response.data.dataNew[i] *100;
                // }
                // this.myattendancenew.push(valueforeach);
                let valueforeach = this.myattendance[i] / response.data.dataNew[i] * 100;
                if (valueforeach > 0) {
                  this.myattendancenew.push(valueforeach + "%");
                }
                else {
                  this.myattendancenew.push("0%");
                }
              }
              console.log(this.myattendancenew);
            })
            .catch(error => {
              console.error(error);
            });

        })
        .catch(error => {
          console.error(error);
        });

    }


  }
});






