const Accessory = require("../models/Accessory");

function createAccessory(name,description,imageUrl){
    const accessory = {
        name,
        description,
        imageUrl
    };

    Accessory.create(accessory);
}

function getAllAccessories(){
    return Accessory.find();
}
module.exports = {createAccessory,getAllAccessories};