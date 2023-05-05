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
        Lecturers.findOne({email:email},function(err,lecturer){
            if(!lecturer.email){
                                            
                res.render('login',{
                    title:'login',message:"Student does not exist"
                })
            }
            else{
                
                if(validPassword(pwd,lecturer.password,lecturer.salt)){
                   req.session.user=lecturer.firstname
                   req.session.role="lecturer"
                   res.redirect('/admindashboard')
                }
                else{
                    res.render('adminlogin',{title:'login',message:'Password does not match'})
                }
            }
        })

    }
}
