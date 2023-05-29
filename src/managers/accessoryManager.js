const Accessory = require("../models/Accessory");

function createAccessory(name,description,imageUrl){
    const accessory = {
        name,
        description,
        imageUrl
    };

    Accessory.create(accessory);
}

module.exports = {createAccessory};