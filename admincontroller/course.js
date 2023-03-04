import {Courses, CourseReg, Student} from "../model/schema.js"
import Validator from "../module/validator.js"; 
import{ escapeStringRegexp} from 'escape-string-regexp'

const createCourse=  async (req,res)=>{
    const title=escapeStringRegexp(req.body.title)
    const code=escapeStringRegexp(req.body.coursecode)
    const description=escapeStringRegexp(req.body.description)
    const startDate=escapeStringRegexp(req.body.startDate)
    const endDate=escapeStringRegexp(req.body.endDate)
    const lecturer=escapeStringRegexp(req.body.lecturerId)

    
    try{
        const course= new Courses({title:title,description:description,startDate:startDate,endDate:endDate,coursecode:code,
            Lecturers:lecturer
        
            })
        const query=course.save()
        res.json("Course succesfully Saved")
    }
    catch(error){
      res.json("An error occured")
    }

    

    }
 
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
            const updateCourse=  async (req,res)=>{
            
                const {title,description,startDate,endDate,coursecode,
                    lecturers}=req.body
                
                try{
                const records= await Courses.updateOne({title:title,description:description,startDate:startDate,endDate:endDate,coursecode:code,
                    Lecturers:lecturers})
                res.json(records)
                }catch(error){
                    console.log(error)
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
                const deleteCourse=  async (req,res)=>{
                    const title= req.body.title
            
                    try{
                    const records= await Courses.deleteOne({title:title})
                    console.log(records)
                    res.json("Courses  succesfully Deleted")
                    }catch(error){
                        res.json("An error Occured")
                    }
                
                    }
    

    export {
        getCourse,
        allCourse,
        registerCourse,
        updateCourse,
        deleteCourse,
        deleteStudentfromCourse
    }

    