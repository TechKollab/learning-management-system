import {Courses, CourseReg, Student} from "../model/schema.js"
import Validator from "../module/validator.js"; 
import  escapeStringRegexp from 'escape-string-regexp'
const {escapeStringRegexp2}=escapeStringRegexp

 
    const getCourse=  async (req,res)=>{
        const title= req.params.title
        try{
        const records= await Courses.findOne({title:title})
    
            res.render('courses',{data:records,imgurl:req.session.user.imgurl})
            }catch(error){
                res.render('error',{errorCode:'404',errorMsg:"Server Error"})
            }
        }
    const allCourse=  async (req,res)=>{
            try{
            const records= await Courses.find({},{title:1,description:1,coursecode:1})
            res.render('course',{title:'course',firstname:req.session.user.firstname, imgurl:req.session.user.imgurl,   courses:records})
                }catch(error){
                    console.log(error)
                    res.render('error',{errorCode:'404',errorMsg:"Server Error"})
                }

            }
       
                const registerCourse= async(req,res)=>{
                    
                    const studentId= req.session.user.studentId;
                    const title=req.params.title
                    const courseId=req.params.id
                    
                    try{
                    const coursereg=await CourseReg.findOne({$and:[{CourseTitle:title},{Student:studentId}]})
                    if(coursereg){
                        res.json("You are already registered for the Course")
                    }
                    else{
                    const reg= new CourseReg({ Student:studentId,CourseTitle:title,CourseId:courseId })
                    reg.save()
                    res.json("You have succesfully register for the course")
                    }
                }catch(error){
                    res.json("An error occured")
                }

                }
                const deleteStudentfromCourse=async (req,res)=>{
                    const student= req.body.studentId;
                    try{
                    const query= await CourseReg.deleteOne({Student:student})
                    res.json("Student Succesfully removed")
                    }
                    catch(error){
                        res.json("An error Occured")
                    }
                }
         
    

    export {
        getCourse,
        allCourse,
        registerCourse,
        deleteStudentfromCourse
    }

    
