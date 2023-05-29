const mongoose = require('mongoose');

const uri = 'mongodb://127.0.0.1:27017/Cubicle-2'

async function connectToDb(){
    mongoose.connect(uri);
}

module.exports = connectToDb;