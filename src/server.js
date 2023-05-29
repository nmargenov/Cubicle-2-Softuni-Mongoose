const express = require('express');
const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');
const connectToDb = require('./config/databaseConfig');


const app = express();

expressConfig(app);
handlebarsConfig(app);

connectToDb()
    .then(console.log('Connection to DB is successful!'))
    .catch(err =>{console.log('Error connecting to the DB: ',err)});

app.get(['/','/index'],(req,res)=>{
    res.status(302);
    res.render('index');
})
app.get('/about',(req,res)=>{
    res.status(302);
    res.render('about');
})
app.get('*',(req,res)=>{
    res.status(404);
    res.render('404');
})

const PORT = 5000;
app.listen(PORT,()=>console.log(`Server is running on port: ${PORT}...`));