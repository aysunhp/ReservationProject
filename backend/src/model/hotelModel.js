const mongoose=require("mongoose")

const hotelSchema= mongoose.Schema({
   name:String,
   facilities:Array,
   hotelImages:Array,
   hotelImg:String,
   locationcity:String,
   partnerName:String,
   price:String,
   rate:String,
   review: Array,
},{
    collection:"hotels", timestamps: true 
})

const Hotel=mongoose.model("hotels",hotelSchema)

module.exports=Hotel