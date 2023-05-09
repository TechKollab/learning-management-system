import express from 'express'
const route = express.Router();
import {Courses} from "../model/schema.js"
import { getCourse,allCourse,registerCourse,deleteStudentfromCourse } from '../controller/course.js';
import {allLectures, viewLectures,task} from '../controller/lectures.js'
import { register, viewStudent, getAccount,allStudent, updateStudent, deleteStudent, loginStudent } from '../controller/studentcontroller.js';
import { checkCourse } from '../controller/dashboard.js';

function isLoggedIn(req, res, next) {
    if (req.session.user) return next();
    res.redirect("/login")
  }
route.get("/", async(req, res) => {
    try{
        const records= await Courses.find({},{title:1,description:1,coursecode:1})
        res.render('index',{title:'LMNS',data:records})
            }catch(error){
                
                res.render('error',{errorCode:'404',errorMsg:"Server Error"})
            }
  
});
route.get('/login', (req, res) => {
    res.render('login', {
        title: "Login EasyLearn",
        message: ""
    })
})
route.get('/register', (req, res) => {
    res.render('register', {
        title: "Register EasyLearn",
        message: "",
        success:" "
    })
})
route.get('/about', (req, res) => {
    res.render('about', {
        title: "About",
        message: ""
    })
})

route.get('/contact', (req, res) => {
    res.render('contactus', {
        title: "Contact Us",
        message: ""
    })
})
route.get('/dashboard',isLoggedIn, checkCourse)

route.get('/logout', (req, res) => {
    req.session.user = null
    req.session.save(function (err) {
      if (err) next(err)
  
      // regenerate the session, which is good practice to help
      // guard against forms of session fixation
      req.session.regenerate(function (err) {
        if (err) next(err)
        res.redirect('/')
      })
    })

})


route.post("/login", loginStudent)
route.post("/register",register)
route.get("/student/:email",isLoggedIn, viewStudent)
route.get("/allstudent",isLoggedIn, allStudent)
route.post("/updatestudent",isLoggedIn, updateStudent)
route.delete("/remove",isLoggedIn,deleteStudent)
route.get("/lectures/:title/:id",isLoggedIn, allLectures)
route.get("/viewlectures/:id",isLoggedIn, viewLectures)
route.get("/task",isLoggedIn, task)
route.get("/courses", allCourse)
route.get("/viewcourses/:id",isLoggedIn, getCourse)
route.get("/studentaccount",isLoggedIn, getAccount)
route.get("/registercourse/:title/:id",isLoggedIn, registerCourse)



export default route;
