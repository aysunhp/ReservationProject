const mongoose=require("mongoose")

const userSchema= mongoose.Schema({
name:String,
userName:String,
},{
    collection:"users", timestamps: false 
})

const User=mongoose.model("users",userSchema)

module.exports=User