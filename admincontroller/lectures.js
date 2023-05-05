import {Lectures} from "../model/schema.js"

const addlectures=  async (req,res)=>{
    const title=req.body.title
    const videourl=req.body.videourl
    const resource_url=req.body.resource_url
    const objective= req.body.objective
    const lecture_text=req.body.lecture_text
    const duration= req.body.duration
    const lecturerid= req.body.lecturerid
 try{
  const lectures= new Lectures({title:title,video_url:videourl,resource_url:resource_url,objective:objective
 ,lecturetext:lecture_text,duration:duration,lecturer:lecturerid})
 }catch(error){

 }

    }
    const viewLectures=  async (req,res)=>{
        const title= req.params.title
        try{
        const record= await Lectures.findOne({title:title})
        res.json(record)
        }catch(error){
            res.json("An error Occured")
        }
    
        }
    const allLectures=  async (req,res)=>{
            try{
            const records= await Lectures.find({ },{_id:0,title:1,duration:1})
            res.render('lectures',{data:records})
            }catch(error){
                res.render('error',{errorCode:'404',errorMsg:"Server Error"})
            }
        
            }
            const updateLectures=  async (req,res)=>{
                const id= req.body.id
                const data=req.body
                try{
                const records= await Lectures.updateOne({_id:id},{$set:{data}})
                res.json("Lectures Succesfully Updated")
                }catch(error){
                    res.json("An error Occured")
                }
            
                }
                const deleteLectures=  async (req,res)=>{
                    const title= req.params.title
                    try{
                    const records= await Lectures.deleteOne({title:title})
                    res.json("Lecture  succesfully Deleted")
                    }catch(error){
                        res.json("An error Occured")
                    }
                
                    }
    

    export {
        addlectures,
        viewLectures,
        allLectures,
        updateLectures,
        deleteLectures
    }

    