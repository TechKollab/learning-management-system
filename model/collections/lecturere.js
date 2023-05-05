connect('mongodb://127.0.0.1:27017/lmns')
db.lecturers.insertMany([
{
 firstname:"Adamu",
 lastname:"Ciroma",
 gender:"male",
 email:'adamciroma@gmail.com',
 dateofBirth: new Date('1978-06-20')


},
{
    firstname:"Barry",
    lastname:"Black",
    gender:"male",
    email:'barryblackie@gmail.com',
    dateofBirth: new Date('1970-04-15')
   
   
   },
   {
    firstname:"Jennifer",
    lastname:"Hudson",
    gender:"femle",
    email:'hudjen@gmail.com',
    dateofBirth: new Date('1970-04-15')
   
   
   },
   {
    firstname:"Olaoluwa ",
    lastname:"Temitope",
    gender:"female",
    email:'temiola@gmail.com',
    dateofBirth: new Date('1978-7-20')
   
   
   },

]);