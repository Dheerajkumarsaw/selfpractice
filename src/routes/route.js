const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('I am inside the first route handler')
    console.log('The endpoint value is', logger.endpoint)
    console.log('Calling log function')
    logger.logging()
});

router.get('/test-me2', function (req, res) {
    console.log('I am inside the second route handler')
    res.send('My second sghjdfghjdfghjdfghjfghever api!')
});


router.get('/test-me5', function (req, res) {
    res.send({msg:'My final ever json api!'})
});

router.get('/test-me3', function (req, res) {
    res.send('My first ever api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My first ever api!')
});
router.get('/missingno/:a/:b',function(req,res){
    let new1 = req.params.a;
    let new2= req.params.b;
    let ab=0;
    let sum =0
    let miss
        for (let i=new1;i=new2;i++){
            ab+=i
        let num =[5,7,8,9,10,11,12]
        for(let i=0;i<num.length;i++){
            sum =+ num[i]
            // let n;
             miss=ab-sum;
        }
    }
    res.send(miss)

    });

module.exports = router;
// adding this comment for no reason