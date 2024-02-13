const mongoose=require("mongoose")

const reviewSchema= mongoose.Schema({
   id:String,
   submitterName:String,
   submitrerEmail:String,
   review:Array
},{
    collection:"reviews", timestamps: true 
})

const Review=mongoose.model("reviews",reviewSchema)

module.exports=Review