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

module.exports = {createCube,getAllCubes}