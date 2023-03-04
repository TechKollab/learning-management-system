import {Student} from "../model/schema.js"
import Validator from "../module/validator.js"; 
import { setPassword,validPassword } from "../module/authentication.js";
const validate= new Validator();
const register=  async (req,res)=>{
    const email=req.body.email
    const firstname=req.body.firstname
    const lastname=req.body.lastname
    const pwd=req.body.password
    if(!validate.validateEmail(email))
    {
      return  res.json("Invalid Email")
    }else if(!validate.validatePwd(pwd)){
       return  res.json("Invalid Password")

    }
    else{
       const student= await Student.findOne({email:email})
       if(!student){
            
               const student= new Student() 
               student.email=email
               student.firstname=firstname
               student.lastname=lastname
               const setParams=setPassword(pwd)
               student.password=setParams.encpassword
               student.salt=setParams.salt
             student.save((err,Student)=>{
               if(err){
                res.json("Unable to register Student")
                console.log(err)
               }
               else{
                res.json("Student Succesfully Added")
               }
             });
            
             

        
       }
       else{
          res.json("Email has been used");
       }
    }
    

    }
    const viewStudent=  async (req,res)=>{
        const email= req.params.email
        try{
        const record= await Student.findOne({email:email})
        res.json(record)
        }catch(error){
            res.json("An error Occured")
        }
    
        }
    const allStudent=  async (req,res)=>{
            try{
            const records= await Student.find({ },{_id:1,firstname:1,lastname:1})
            res.json(records)
            }catch(error){
                res.json("An error Occured")
            }
        
            }
            const updateStudent=  async (req,res)=>{
                const id= req.body.id
                const {firstname,lastname,gender,email,password,dateofbirth}=req.body
                
                try{
                const records= await Student.updateOne({email:"eyitayoit@gmail.com"},{firstname:firstname,
                    lastname:lastname,gender:gender,email:email,password:password,dateofbirth:dateofbirth})
                res.json(records)
                }catch(error){
                    console.log(error)
                    res.json("An error Occured")
                }
            
                }
                const deleteStudent=  async (req,res)=>{
                    const email= req.body.email
            
                    try{
                    const records= await Student.deleteOne({email:email})
                    console.log(records)
                    res.json("Student record succesfully Deleted")
                    }catch(error){
                        res.json("An error Occured")
                    }
                
                    }
                const loginStudent=  async (req,res)=>{
                        const email=req.body.email
                        const pwd=req.body.password
                        if(!validate.validateEmail(email))
                        {
                          return  res.json("Invalid Email")
                        }else if(!validate.validatePwd(pwd)){
                           return  res.json("Invalid Password")
                    
                        }
                        else{
                           const student= await Student.find({email:email})
                          
                                       if(!student){
                                            
                                            res.render('login',{
                                                title:'login',message:"Student does not exist"
                                            })
                                        }
                                        else{
                                            const [result]= student
                                            if(validPassword(pwd,result.password,result.salt)){
                                               req.session.user=result.firstname
                                               req.session.role="Student"
                                               res.redirect('/dashboard')
                                            }
                                            else{
                                                res.render('login',{title:'login',message:'Password does not match'})
                                            }
                                        }
                                     }
                                     
                            }
                    
                        
                    

    export {
        register,
        viewStudent,
        allStudent,
        updateStudent,
        deleteStudent,
        loginStudent,
    }

    