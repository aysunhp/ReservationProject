const mongoose=require("mongoose")

const userSchema= mongoose.Schema({
name:String,
userName:String,
userImage: Object,
},{
    collection:"users", timestamps: false 
})

const User=mongoose.model("users",userSchema)

module.exports=User