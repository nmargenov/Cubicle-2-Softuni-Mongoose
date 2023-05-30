const Cube = require('../models/Cube');
const mongoose = require('mongoose');

function createCube(name,description,imageUrl,difficultyLevel){
    const cube = {
        name,
        description,
        imageUrl,
        difficultyLevel
    };

    const newCube = Cube.create(cube);
    return newCube;
}

function getAllCubes(){
    return Cube.find();
}

function getCubeByID(cubeID){
    if(!mongoose.Types.ObjectId.isValid(cubeID)){
        return false;
    }
    return Cube.findById(cubeID);
}

function getCubeByIDWithAccessories(cubeID){
    if(!mongoose.Types.ObjectId.isValid(cubeID)){
        return false;
    }
    return Cube.findById(cubeID).populate('accessories');
}

function addAccessoryToCube(cubeID,accessoryID){
    if(!mongoose.Types.ObjectId.isValid(cubeID)){
        return false;
    }
    return Cube.findByIdAndUpdate(cubeID,{$push:{accessories:accessoryID}});
}

module.exports = {createCube,getAllCubes,getCubeByID,addAccessoryToCube,getCubeByIDWithAccessories}