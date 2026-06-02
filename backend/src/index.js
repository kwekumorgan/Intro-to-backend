import dotenv from "dotenv";
import app from "./app.js"
import connectDB from "./config/database.js";

// load environment variable 
dotenv.config({
  path : "./.env"
})

const PORT = process.env.PORT || 8000;

// listen for global application errosrs 
app.on("error", (error)=>{
  console.log("CRITICAL APPLICATION ERROR", error);
  process.exit(1) //shut down the node process on system failure 
})

const startServer = async()=>{
  try{ 
    console.log ("MONGODB_URI:",process.env.MONGODB_URI)

    // wait for db connection 
    await connectDB()

    // turn server on 
    app.listen (PORT, ()=>{
      console.log(`connection running on :${PORT}`)
    });

  }catch (err){
    console.log("db connection failed:", err)

    process. exit(1) // exit i db connection fails 

  }
}


startServer();