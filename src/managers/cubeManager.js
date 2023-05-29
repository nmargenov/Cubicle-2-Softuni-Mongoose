const Cube = require('../models/Cube');

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
    return Cube.findById(cubeID);
}

module.exports = {createCube,getAllCubes,getCubeByID}