const router = require('express').Router();
const db = require('../server').db();

router.get('/', (req,res)=>{
    console.log('entered Academy Students')
    db.collection('academy_students').find().toArray((err,data)=>{
        if(err){
            res.end('somthing went wrong')
        }else{
            res.render('students', {students:data})
            console.log(data)
        }
    })
})

module.exports = router