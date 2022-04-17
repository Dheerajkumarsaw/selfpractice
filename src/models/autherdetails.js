const mongoose=require('mongoose')


let autherDetails=new mongoose.Schema({
    age:Number,
    address:String,
    mobile:{type:String,required:true}
},{timestamps:true})
                              
module.exports=mongoose.model('autherdetails',autherDetails)
