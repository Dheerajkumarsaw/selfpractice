const mongoose=require('mongoose')


let publisher=new mongoose.Schema({
    publisher:String,
    headquater:String
},{timestamps:true})

module.exports=mongoose.model('publisher',publisher)
