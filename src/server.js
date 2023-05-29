const express = require('express');
const expressConfig = require('./config/expressConfig');
const handlebarsConfig = require('./config/handlebarsConfig');


const app = express();

expressConfig(app);
handlebarsConfig(app);

app.get('/',(req,res)=>{
    res.write('Server is working properly!');
    res.end();
})

const PORT = 5000;
app.listen(PORT,()=>console.log(`Server is running on port: ${PORT}...`));