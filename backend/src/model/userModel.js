const mongoose=require("mongoose")

const userSchema= mongoose.Schema({
    email: String,
fullName:String,
isPartner:Boolean,
location:Object,
password:String,
paypayEmail:String,
phone:String,
userInfo:String,
userName:String,
userImage:String,
wishlist:Array,
},{
    collection:"users", timestamps: true 
})

const User=mongoose.model("users",userSchema)

module.exports=User