connect('mongodb://127.0.0.1:27017/lmns')
db.lectures.insertMany([
{
    title:"Javascript Full Course For Beginer",
    duration:"3:26:43",
    CourseId:'642d7807103d1bd8fb6486c1',
    video_url:"https://www.youtube.com/watch?v=PkZNo7MFNFg "
    
   


},
{
    title:"Software Development",
    duration:"17:14",
    CourseId:'642d7807103d1bd8fb6486c2',
    video_url:"https://www.youtube.com/watch?v=J6rVaFzOEP8 "
    
   


},

{
    title:"UI/UX Course",
    duration:"17:14",
    CourseId:'64424473a5adf31c67249a9d',
    video_url:"https://www.youtube.com/watch?v=spGDKJNq-EE"
    
   


}
]);