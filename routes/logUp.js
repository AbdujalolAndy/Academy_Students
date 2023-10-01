const router = require('express').Router();
const db = require('../server').db();

router.get('/',(req,res)=>{
    res.render('logUp')
})

router.post('/academy-students', (req,res)=>{
    console.log('entered /create-user')
    const name = req.body.student;
    db.collection('academy_students').insertOne({'name':name}, (err,data)=>{
        if(err){
            res.end('Something went wrong')
        }else{
            res.end('Successfully added')
        }
    })
})

module.exports = router;