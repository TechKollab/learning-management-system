import {Assessment} from "../model/schema.js";
import{ escapeStringRegexp} from 'escape-string-regexp'

const addOneQuestion=(req,res)=>{
const instruction= escapeStringRegexp(req.body.insturuction)
const questions=escapeStringRegexp(req.body.questions)
const lectureId=escapeStringRegexp(req.body.lectureId)

try{
    const question = new Assessment({Instruction:instruction,questions:questions,lectureId:lectureId})
     question.save()
    res.json("questions Succesfully added")
}catch(error){
    res.json("An error occured")
}
}

const getQuestion=(req,res)=>{
 const lectureId=escapeStringRegexp(req.params.lectureId)
 try{
    const assess= Assessment.findById({lectureId:lectureId})
    res.json(assess)
 }catch(error){
    res.json('An error occurred')
 }


}

const updateQuestion= async (req,res)=>{
    const instruction= escapeStringRegexp(req.body.insturuction)
    const questions=escapeStringRegexp(req.body.questions)
    const lectureId=escapeStringRegexp(req.body.lectureId)
    try{
        
        const updateQ= await Assessment.updateOne({lectureId:lectureId},{Instruction:instruction,question:questions})
        res.json(updateQ)


    }catch(error){
        res.json("An error occured while saving the questions")
    }


}

const deleteQuestion= async (req,res)=>{
   const delId= req.params.id
    try{
    const delq= Assessment.deleteOne({_id:delId})
    res.json("Question Succesfully Deleted")
   }catch(error){
    res.json("An error occured while trying to delete the question")
   }
}
export {
 addOneQuestion,
 getQuestion,
 updateQuestion,
 deleteQuestion
}