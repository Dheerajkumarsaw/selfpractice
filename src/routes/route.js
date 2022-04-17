const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
const newbookcontroller=require('../controllers/newbookcontroller')

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.post("/createBook", BookController.createBook  )

router.get("/getBooksData", BookController.getBooksData)

// ======================practice==============
router.post("/createnewbook", newbookcontroller.createnewBook)
router.post("/createautherdetais", newbookcontroller.createauther)
router.post("/createpublisher", newbookcontroller.createpublisher)
router.get("/getallbooks", newbookcontroller.allBooks)


module.exports = router;