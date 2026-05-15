import mongoose from 'mongoose';

// connection function 
const connectDB = async()=>{
    try{ const conn= await mongoose.connect(process.env.MONGODB_URI);
        console.log("connected successfully");

    }catch(error){
        console.log("failed to connect:", error.message);
          process.exit(1)
    }

  
}


export default connectDB