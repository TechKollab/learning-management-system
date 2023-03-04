import {Lectures} from "../model/schema.js"


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
            res.json(records)
            }catch(error){
                res.json("An error Occured")
            }
        
            }
        
    

    export {
    
        viewLectures,
        allLectures,
        
    }

    