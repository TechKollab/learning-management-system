import {Student} from "../model/schema.js"
import Validator from "../module/validator.js"; 
import { setPassword,validPassword } from "../module/authentication.js";
import * as fs from "node:fs"
import {open} from "node:fs/promises"
import { Buffer } from "buffer";
import path from 'path'
const validate= new Validator();
const register=  async (req,res)=>{
    const email=req.body.email
    const firstname=req.body.firstname
    const lastname=req.body.lastname
    const pwd=req.body.password
    if(!validate.validateEmail(email))
    {
      return  res.render('register',{title:'Login',message:"Invalid Email"})
    }else if(!validate.validatePwd(pwd)){
       return   res.render('register',{title:'Login',message:"Invalid Password"})

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
                res.render('register',{title:'Login',message:"Unable to register Student"})
              
               }
               else{
                
                res.render('register',{title:'Login',message:"Student Succesfully Added"})
               }
             });
            
             

        
       }
       else{
        res.render('register',{title:'Login',message:"Email in use"})
          
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

                const id= req.session.user.studentId
                const firstname=req.body.firstname
                const lastname=req.body.lastname
                const gender=req.body.gender
                const dateofbirth=req.body.dateofbirth  
                const imgurl=req.body.imgurl
                const file=req.body.userpic
               
                
                
              
                   
             
               
               
            
                try{
                const records= await Student.updateOne({_id:id},{firstname:firstname,
                    lastname:lastname,gender:gender,dateofbirth:dateofbirth,imageurl:imgurl})
                if(records){
                    res.redirect("/studentaccount")
                       
                     }
                    
                
                   
                }catch(error){
                
                    res.render('error',{errorMsg:"An error Occured",errorCode:error.STATUS})
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
                            res.render('login',{
                            title:'login',message:"Invalid email"
                        })
                        }else if(!validate.validatePwd(pwd)){
                        res.render('login',{
                            title:'login',message:"Invalid Password"
                        })
                    
                        }
                        else{
                           const student= await Student.findOne({email:email}).exec()
                          
                                       if(!student){
                                            
                                            res.render('login',{
                                                title:'login',message:"Incorrect Email"
                                            })
                                        }
                                        else{
                        
                                            if(validPassword(pwd,student.password,student.salt)){

                                               req.session.user={firstname:student.firstname,studentId:student._id,imgurl:student.imageurl}
                                              
                                               req.session.role="Student"
                                               res.redirect('/dashboard')
                                            }
                                            else{
                                                res.render('login',{title:'login',message:'Incorrect Password '})
                                            }
                                        }
                                     }
                                     
                            }
                    
        const getAccount= async(req,res)=>{
            try{
            const id=req.session.user.studentId
            const imgurl=req.session.user.imgurl
           const studentaccount= await Student.findOne({_id:id})
           
                res.render('account',{title:'Account',firstname:req.session.user.firstname,studentInfo:studentaccount,imgurl})
            
           }
    
            catch(error){
                console.log(error)
                res.render('error',{errorCode:'404',errorMsg:"Server Error"})
            }
        }   
                    
    
    export {
        register,
        viewStudent,
        allStudent,
        updateStudent,
        deleteStudent,
        loginStudent,
        getAccount
    }

