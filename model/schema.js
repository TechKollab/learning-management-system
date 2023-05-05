import mongoose from 'mongoose';

const {Schema}=mongoose;



const studentSchema= new Schema({
    firstname:String,
    lastname:String,
    gender:{type:String,enum: ["male","female"]},
    email:{type:String,unique:true},
    password:String,
    dateofbirth:String,
    imageurl:String,
    salt:String,
    
    
    })
    
    
    const lecturerSchema= new Schema({
    firstname:String,
    lastname:String,
    gender:{type:String,enum: ["male","female"]},
    email:{type:String,unique:true},
    password:String,
    dateofbirth:Date,
    salt:String
    
    })
    
    const  courseSchema= new Schema({
    title:{type:String,unique:true},
    description:String,
    startDate:Date,
    endDate:Date,
    numLectures:String,
    imgurl:String,
    Lecturers:[{type:mongoose.Schema.Types.ObjectId, ref:"Lecturer" }]
    
    
    })
    
    const courseRegistration= new Schema({
      Student:{type:mongoose.Schema.Types.ObjectId, ref:"Student" },
      CourseTitle: String,
      description:String,
      CourseId:{type:mongoose.Schema.Types.ObjectId, ref:"Courses" }
      

    })
    
    
    const cvSchema= new Schema({
    qualification:[ ],
    workexperience:[ ],
    startwork:Date,
    endWork:Date,
    lecturerId:{type:mongoose.Schema.Types.ObjectId, ref:"Lecturer" },
    publishwork:[ ]
    })
    
    
    const lectureSchema= new Schema({
    title:{type:String,unique:true},
    duration:String,
    lecturetext:String,
    objective:String,
    resource_url:[],
    video_url:[ ],
    coursecode:Number,
    lecturer:[{type:mongoose.Schema.Types.ObjectId, ref:"Lecturer" }],
    CourseId:{type:mongoose.Schema.Types.ObjectId, ref:"Courses" }
    
    })
    
    
    const assessmentSchema= new Schema({
         questions:[ ],
         Instruction:String,
         lectureId:{type:mongoose.Schema.Types.ObjectId, ref:"lecture" },
         CourseId:{type:mongoose.Schema.Types.ObjectId, ref:"Courses" }
         
    })
    
    const gradeSchema= new Schema({
    scores: Number,
    lectureId:[{type:mongoose.Schema.Types.ObjectId, ref:"Lecture" }],
    examDate:Date,
    studentId:{type:mongoose.Schema.Types.ObjectId, ref:"Student" }
    })
    const progressSchema= new Schema({
      CourseId: {type:mongoose.Schema.Types.ObjectId, ref:"Student" },
      lectureId:[{type:mongoose.Schema.Types.ObjectId, ref:"Lecture" }],
      studentId:{type:mongoose.Schema.Types.ObjectId, ref:"Student" }, 
      LecturesCompleted:Number
      })
      
    const paymentSchema = new Schema(
    {
    amount:Number,
    transref:String,
    studentId:[{type:mongoose.Schema.Types.ObjectId, ref:"Student" }],
    coursecycleId:[{type:mongoose.Schema.Types.ObjectId, ref:"Courses" }]
    })
    
  const Student= mongoose.model("Student",studentSchema);  
  const Lecturers= mongoose.model("Lecturers",lecturerSchema);
  const Lectures= mongoose.model("Lectures",lectureSchema); 
  const Payment= mongoose.model("Payment",paymentSchema);     
  const Courses = mongoose.model("Courses",courseSchema);
  const CourseReg=mongoose.model("CourseReg",courseRegistration);
  const CV = mongoose.model("CV",cvSchema)
  const Assessment = mongoose.model("Assessment",assessmentSchema)
  const Grade = mongoose.model("Grade",gradeSchema);

  export{
        Student,
        Lecturers,
        Lectures,
        Payment,
        Courses,
        CourseReg,
        CV,
        Assessment,
        Grade,
  }