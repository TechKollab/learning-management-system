connect('mongodb://127.0.0.1:27017/lmns')
db.courses.insertMany([
{
 title:"Javascript for Senior Devs",
 description:"This a course for developers in learning advance concept javascript",
 couesecode:500,
 Lecturers:[ObjectId('642d6fab103d1bd8fb6486be')]


},
{
    title:"Software Development",
    description:"Student will learn advance concept in software develop",
    couesecode:500,
    Lecturers:[ObjectId('642d6fab103d1bd8fb6486be')]
   
   
   },
   {
    title:"Web Development",
    description:"Student will be introduced to key concept in web development such as HTML,CSS",
    couesecode:200,
    Lecturers:[ObjectId('642d6fab103d1bd8fb6486bd')]
   
   
   },
   {
    title:"Mobile Development",
    description:"Student will learn advance concept in mobile development",
    couesecode:305,
    Lecturers:[ObjectId('642d6fab103d1bd8fb6486be')]
   
   
   },
]);