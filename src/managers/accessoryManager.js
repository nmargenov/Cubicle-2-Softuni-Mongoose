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

function getRemainingAccessories(accessories){
    return Accessory.find({ _id: {$nin: accessories }});
}

module.exports = {createAccessory,getAllAccessories,getRemainingAccessories};