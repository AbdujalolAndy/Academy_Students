const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const app = express();
const logup = require('./routes/logUp')
const students = require('./routes/students')
// const expressLayout = require('express-ejs-layouts')

//use Midllewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(morgan('tiny'));
app.use(helmet());
app.use(express.static('public'));
app.use('/', logup)
app.use('/students', students)
//Mongodb


//views

app.set('views', 'views');
app.set('view engine', 'ejs');


module.exports = app;

