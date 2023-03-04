import {Courses, CourseReg, Student} from "../model/schema.js"
import Validator from "../module/validator.js"; 
import{ escapeStringRegexp} from 'escape-string-regexp'


 
    const getCourse=  async (req,res)=>{
        const title= req.params.title
        try{
        const record= await Courses.findOne({title:title})
        res.json(record)
        }catch(error){
            res.json("An error Occured")
        }
    
        }
    const allCourse=  async (req,res)=>{
            try{
            const records= await Courses.aggregate([{$group:{id:coursecode,course:title,total:{$count:1}}}])
            res.json(records)
            }catch(error){
                res.json("An error Occured")
            }
        
            }
       
                const registerCourse=(res,req)=>{re
                    const studentId= req.body.id;
                    const title= req.body.title;
                    try{
                    const reg= new CourseReg({ Student:studentId,CourseTitle:title
                     
                    })
                    res.json("You have succesfully register for the course")
                }catch(error){
                    res.json("An arror occured")
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

    