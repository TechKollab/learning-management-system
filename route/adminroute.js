import express from 'express'
const adminroute=express.Router();
import {registerLecturer,viewLecturer,allLecturer,updateLecturer,deleteLecturer} from '../admincontroller/lecturer.js';

adminroute.get("/",(req,res)=>{
    res.json("Welcome to LMNS")
});
adminroute.post("/register",registerLecturer)
adminroute.get("/lecturer/:email",viewLecturer)
adminroute.get("/alllecturer",allLecturer)
adminroute.post("/updatelecturer",updateLecturer)
adminroute.delete("/removelecturer",deleteLecturer)




export default adminroute;