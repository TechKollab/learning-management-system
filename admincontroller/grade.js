import {Grade} from "../model/schema.js";
import{ escapeStringRegexp} from 'escape-string-regexp'





const getStudentGrade=(req,res)=>{
 const id=req.body.id
 try{
    const allgrade= Grade.findById({studentId:id})
    res.json(allgrade)
 }catch(error){
    res.json('An error occurred')
 }


}
const getGradeByLecture=(req,res)=>{
    const id=req.body.lectureId
    try{
       const allgrade= Grade.findById({lectureId:id})
       res.json(allgrade)
    }catch(error){
       res.json('An error occurred')
    }
   
   
   }

export {
 getStudentGrade,
 getGradeByLecture
 
}