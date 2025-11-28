import mongoose from "mongoose"



export function dbConnection(){
    mongoose.connect(`mongodb://localhost:27017/dbName`).then(()=>{
        console.log('Connected to db!');
    }).catch((err)=>{
        console.log('Error connecting to db',err);
    })
}