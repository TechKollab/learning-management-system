import {Courses,CourseReg} from "../model/schema.js"
import {ObjectId} from "mongodb";
import mongoose from "mongoose";
import { request } from "node:http";
const checkCourse=async(req, res) => {

    const id=req.session.user.studentId

    try{
    
    const courseid=[]
   for await(const doc of CourseReg.find({Student:id})){
      courseid.push(doc.CourseId)
   }


    const stuCourses=await Courses.find({_id:{$in:courseid}})
    
   
    res.render('dashboard', {
        title: "EasyLearn Dashobard",
        firstname: req.session.user.firstname,
        imgurl:req.session.user.imgurl,   
        courses:stuCourses
     
    })

}catch(error){
    console.log(error)
    res.render('error',{errorCode:'404',errorMsg:"Server Error"})
}
}
export {checkCourse}