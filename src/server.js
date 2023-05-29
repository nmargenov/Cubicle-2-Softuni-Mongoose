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

app.get('/',(req,res)=>{
    res.write('Server is working properly!');
    res.end();
})

const PORT = 5000;
app.listen(PORT,()=>console.log(`Server is running on port: ${PORT}...`));