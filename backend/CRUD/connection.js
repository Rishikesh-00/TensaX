// const mongoose=require('mongoose')
// async function connectMongoDb(url) {
//     return mongoose.connect(url)
    
// }
const mongoose=require('mongoose');
const connectMongoDb=async(url)=>{
    try{
        const connect=await mongoose.connect(url);
        console.log("database is connected:",connect.connection.host, connect.connection.name)
    }catch(err){
        console.log(err);
        process.exit(1);
    }
};
module.exports={
    connectMongoDb,
}