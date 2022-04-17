let mongoose=require('mongoose')
const ObjectId=mongoose.Types.ObjectId
// =============book model===============

let newbookSchema=new mongoose.Schema({
    bookName:{type:String,required:true},
    autherName:String,
    autherDetails:{type:ObjectId,ref:"autherdetails"},
    tags:[String],
    isPublished:Boolean,
    prices:{
        IndianPrice:String,
        eropianPrice:String,
        usPrice:String,
    },
    sales:{type:Number,default:15},
    Pages:{type:Number,default:300},
    publisher:{type:ObjectId,ref:"publisher"}

},{timestamps:true})


module.exports=mongoose.model('newbook',newbookSchema)