
  import * as dotenv from 'dotenv'
  import path from 'path'
  import express from 'express'
  import route from './route/route.js'
  import adminroute from './route/adminroute.js'
  import session from 'express-session'
  import {connectToDb} from './model/connection.js'
  import mongoStore from 'connect-mongo'

dotenv.config();
  
  const app= express()
 
  app.use(express.json())
  app.use(express.urlencoded({extended:false}))
  app.set('views', './views');
  app.set('view engine','ejs')
  app.use(session({
    secret:"lmnsnjs",
    saveUninitialized:true,
    resave:false,
    store: mongoStore.create({
      mongoUrl:process.env.URI ,
      touchAfter:3600
  })
}))
  app.use("/admin",adminroute)
  app.use("/",route)
  app.use(express.static('./public'));
  const port= process.env.PORT||3088


 
  connectToDb();
  app.use((req, res, next) => {
  
    res.render("error",{errorCode:'404',errorMsg:"Web page Not Availaible"})
  })
  app.use((err,req,res,next)=>{
if(err){
  console.log(err)
  res.render("error",{errorCode:'500',errorMsg:"Server Error"})
}

  })
  app.listen(port, () => {

    console.log(`Server is running on port: ${port}`);
  });