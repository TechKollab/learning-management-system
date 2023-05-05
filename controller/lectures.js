import { mongoose } from "mongoose"
import {Assessment, Lectures} from "../model/schema.js"


    const viewLectures=  async (req,res)=>{
    
        const id=req.params.id
        try{
            const records= await Lectures.findOne({_id:id },{_id:1,title:1,duration:1})
            res.render('lectures',{lectures:records})
            }catch(error){
                res.render('error',{errorCode:'404',errorMsg:"Server Error"})
            }
        }
    const allLectures=  async (req,res)=>{
        const coursetitle=req.params.title
        const id=req.params.id
        
        try{
    
            const lecture= await Lectures.find({title:coursetitle})
            
            res.render('lectures',{lectures:lecture,title:"Lectures",firstname:req.session.user.firstname,  imgurl:req.session.user.imgurl,    coursetitle})
            }catch(error){
                console.log(error)
                res.render('error',{errorCode:'404',errorMsg:"Server Error"})
            }
            }
            const task=  async (req,res)=>{
                
                
                
                try{
            
                    
                    
                    res.render('task',{title:"Task",firstname:req.session.user.firstname,  imgurl:req.session.user.imgurl   })
                    }catch(error){
                        console.log(error)
                        res.render('error',{errorCode:'404',errorMsg:"Server Error"})
                    }
                    }   
    

    export {
    
        viewLectures,
        allLectures,
        task
        
    }

    