import * as dotenv from 'dotenv'
import mongoose from 'mongoose';

dotenv.config();
const MONGOOSE_URL = process.env.URI;

const connectToDb = () => {
    mongoose.connect(MONGOOSE_URL)
    mongoose.connection.on('connected', () => {
        console.log("connected to MongoDb successfully")
    })
    mongoose.connection.on('error', (error) => {
        console.log("An error occurred", error)
    })
}
const conClose=()=>{
    mongoose.disconnect()
}
export {connectToDb,conClose}