const mongoose=require("mongoose")

const roomSchema= mongoose.Schema({
   cityName:String,
   hotelName:String,
   id:String,
   room:Array
},{
    collection:"rooms", timestamps: true 
})

const Room=mongoose.model("rooms",roomSchema)

module.exports=Room