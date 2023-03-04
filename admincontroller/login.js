import {Lecturers, Student} from "../model/schema.js"
import Validator from "../module/validator.js"; 
const validate= new Validator();
export const loginStudent=  async (req,res)=>{
    const email=req.body.email
    const pwd=req.body.password
    if(!validate.validateEmail(email))
    {
      return  res.json("Invalid Email")
    }else if(!validate.validatePwd(pwd)){
       return  res.json("Invalid Password")

    }
    else{
        Lecturers.find({email:email},function(err,lecturer){
                 if(lecturer){
                    if(lecturer.validPassword()){
                        res.json("Lecturerr Succesfully Login")
                    }
                    else{
                        res.json("Invalid Password")
                    }
                 }
                 else{
                    res.json("No Lecturer found")
                 }
        })

    }
}
