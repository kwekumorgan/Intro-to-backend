import mongoose, {schema} from 'mongoose';
import bcrypt from 'bcrypt';


const userSchema = new Schema({
  username:{
    type : String,
    required : true,
    trim : true,
    maxlength:30,
    minlength :1,
    lowercase: true,
  },


  password:{
    type :String,
    required: true,
    minlength : 8,
    maxlength : 30,

  },

  email:{
    type:String,
    unique: true,
    required: true,
    trim: true,

  }
},

{
  timestamp : true
})

export const User = mongoose.model("User", userSchema)


