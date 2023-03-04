import express from 'express'
const route=express.Router();
import {register,viewStudent,allStudent,updateStudent,deleteStudent,loginStudent} from '../controller/register.js';

route.get("/",(req,res)=>{
    res.render('landing',{
        title:'LMNS'
    })
});
route.get('/login', (req,res)=>{
    res.render('login',{
        title:"Login EasyLearn",
        message:""
    })
})
route.get('/register', (req,res)=>{
    res.render('register',{
        title:"Register EasyLearn",
        message:""
    })
})
route.get('/dashboard', (req,res)=>{
    res.render('dashboard',{
        title:"EasyLearn Dashobard",
        firstname:req.session.user
    })
})
route.post("/login",loginStudent)
route.post("/register",register)
route.get("/student/:email",viewStudent)
route.get("/allstudent",allStudent)
route.post("/update",updateStudent)
route.delete("/remove",deleteStudent)




export default route;