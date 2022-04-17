const bookmodel=require('../models/practicebook')
const authermodel=require('../models/autherdetails')
const publishermodel=require('../models/publisher')

let createnewBook=async function(req,res){
    let data=req.body;
    let savedData=await bookmodel.create(data);
    res.send({msg:savedData})
}
let createauther=async function(req,res){
    let data=req.body;
    let savedData=await authermodel.create(data)
    res.send({msg:savedData})
}

let createpublisher=async function(req,res){
    let data=req.body;
    let savedData=await publishermodel.create(data);
    res.send({msg:savedData})
}


let allBooks=async function(req,res){
    // let getdata=await bookmodel.find().count()
    // let getdata=await bookmodel.find({autherName:"Chetan Bhagat"}).count()
    // let getdata=await bookmodel.find({autherName:"Chetan Bhagat",isPublished:true}).count()
    // let getdata=await bookmodel.find({$or:[{autherName:"Chetan Bhagat"},{isPublished:true}]}).count()
    // let getdata=await bookmodel.find({$or:[{autherName:"Chetan Bhagat"},{isPublished:true}]}).select({bookNmae:1,tags:1,_id:0})
    // let getdata=await bookmodel.find().sort({sales:-1})
    // let getdata=await bookmodel.find().sort({Pages:-1})
    // let getdata=await bookmodel.find({sales:{$gt:50}})
    // let getdata=await bookmodel.find({sales:{$lt:50}})
    // let getdata=await bookmodel.find({sales:{$eq:80}})
    // let getdata=await bookmodel.find({sales:{$eq:80}})
    // let getdata=await bookmodel.find().limit(9).count()
    // let getdata=await bookmodel.find().skip(3).limit(3)
   let page= req.query.page
   console.log(page)
    let getdata=await bookmodel.find().skip(3*(page-1)).limit(3)
    res.send({getdata})
}

module.exports.createnewBook=createnewBook
module.exports.createauther=createauther
module.exports.createpublisher=createpublisher
module.exports.allBooks=allBooks