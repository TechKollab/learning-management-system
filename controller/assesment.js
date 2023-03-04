import {Assessment} from "../model/schema.js";
import{ escapeStringRegexp} from 'escape-string-regexp'



const getQuestion=(req,res)=>{
 const lectureId=escapeStringRegexp(req.params.lectureId)
 try{
    const assess= Assessment.findById({lectureId:lectureId})
    res.json(assess)
 }catch(error){
    res.json('An error occurred')
 }


}


export {
 
 getQuestion,
 
}