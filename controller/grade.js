import {Grade} from "../model/schema.js";
import{ escapeStringRegexp} from 'escape-string-regexp'

const addScores=(req,res)=>{
const scores= escapeStringRegexp(req.body.scres)
const examDate=parseInt(escapeStringRegexp(req.body.examDate))
const lectureId=escapeStringRegexp(req.body.lectureId)
const student= escapeStringRegexp(req.body.studentId)

try{
    const grade = new Grade({scores:scores,examDate:examDate,lectureId:lectureId,studentId:student})
     question.save()
    res.json("Scores Succesfully added")
}catch(error){
    res.json("An error occured")
}
}

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
 addOneQuestion,
 getQuestion,
 updateQuestion,
 deleteQuestion
}