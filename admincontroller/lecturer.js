import {Lecturers} from "../model/schema.js"
import Validator from "../module/validator.js"; 
const validate= new Validator();
const registerLecturer=  async (req,res)=>{
    const email=req.body.email
    const pwd=req.body.password
    if(!validate.validateEmail(email))
    {
      return  res.json("Invalid Email")
    }else if(!validate.validatePwd(pwd)){
       return  res.json("Invalid Password")

    }
    else{
       const lecturer= await Lecturers.findOne({email:email})
       if(!lecturer){
    
        const student= new Student() 
        student.email=email
        student.setPassword(pwd)
      reg.save((err,Student)=>{
        if(err){
         res.json("Unable to register Lecturer")
        }
        else{
         res.json("Lecturer Succesfully Added")
        }
      });
       }
       else{
          res.json("Email has been used");
       }
    }
    

    }
    const viewLecturer=  async (req,res)=>{
        const email= req.params.email
        try{
        const record= await Lecturers.findOne({email:email})
        res.json(record)
        }catch(error){
            res.json("An error Occured")
        }
    
        }
    const allLecturer=  async (req,res)=>{
            try{
            const records= await Lecturers.find({ },{_id:1,firstname:1,lastname:1})
            res.json(records)
            }catch(error){
                res.json("An error Occured")
            }
        
            }
            const updateLecturer=  async (req,res)=>{
                
                const {firstname,lastname,gender,email,password,dateofbirth}=req.body
                
                try{
                const records= await Lecturers.updateOne({email:email},{firstname:firstname,
                    lastname:lastname,gender:gender,email:email,password:password,dateofbirth:dateofbirth})
                res.json(records)
                }catch(error){
                    console.log(error)
                    res.json("An error Occured")
                }
            
                }
                const deleteLecturer=  async (req,res)=>{
                    const id= req.params.id
                    try{
                    const records= await Lecturers.deleteOne({email:email})
                    res.json("Student record succesfully Deleted")
                    }catch(error){
                        res.json("An error Occured")
                    }
                
                    }
    

    export {
        registerLecturer,
        viewLecturer,
        allLecturer,
        updateLecturer,
        deleteLecturer
    }

    