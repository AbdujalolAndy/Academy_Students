const mongodb = require('mongodb');
const http = require('http');

const databaseAdr = 'mongodb+srv://andy:bav52w6vfTXIq5Cy@cluster0.4ahexgk.mongodb.net/Academy_Students'
mongodb.connect(databaseAdr, {useUrlParser:true,useUnifiedTopology:true}, (err,client)=>{
    if(err){
        console.log('Something went wrong with connection to MongoDB server')
    }else{
        console.log('Successfully Connected to MongoDB Server')
        module.exports = client;
        const app = require('./app');
        const server = http.createServer(app);
        const port = process.env.PORT ?? 3000;
        server.listen(port, console.info(`${port} is listening in http://localhost:${port}`))

    }
})