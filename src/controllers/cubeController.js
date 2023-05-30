const { getAllAccessories, getRemainingAccessories } = require('../managers/accessoryManager');
const { createCube, getCubeByID, addAccessoryToCube, getCubeByIDWithAccessories } = require('../managers/cubeManager');

const router = require('express').Router();


router.get('/create',(req,res)=>{
    res.status(302);
    res.render('cube/create');
});

router.post('/create',async (req,res)=>{
    const name = req.body.name.trim();
    const description = req.body.description.trim();
    const imageUrl = req.body.imageUrl.trim();
    const difficultyLevel = Number(req.body.difficultyLevel.trim());

    if(name == "" || description == "" || imageUrl == "" || difficultyLevel == ""){
        res.status(400);
        res.render('cube/create',{name,description,imageUrl});
        return;
    }

    const newCube = await createCube(name,description,imageUrl,difficultyLevel);
    res.redirect(`/cubes/${newCube._id}/details`);
});

router.get('/:cubeID/details',async (req,res)=>{
    const cubeID = req.params.cubeID;
    const cube = await getCubeByIDWithAccessories(cubeID)
     ? await getCubeByIDWithAccessories(cubeID).lean() 
     : false;

    if(!cube){
        res.status(404);
        res.render('404');
        return;
    }

    const accessories = cube.accessories;
    const hasAccessories = accessories.length;
    res.status(302);
    res.render('cube/details',{cube,accessories,hasAccessories});
});

router.get('/:cubeID/accessories/attach',async(req,res)=>{
    const cubeID = req.params.cubeID;

    const cube = await getCubeByID(cubeID)
    ? await getCubeByID(cubeID).lean()
    : false;

    if(!cube){
        res.status(404);
        res.render('404');
        return;
    }
    
    const accessories = await getRemainingAccessories(cube.accessories).lean();
    const hasAccessories = accessories.length;

    res.status(302);
    res.render('cube/attach',{cube,accessories,hasAccessories});
});

router.post('/:cubeID/accessories/attach',async(req,res)=>{
    const cubeID = req.params.cubeID;
    const accessoryID = req.body.accessory;

    const cube = await addAccessoryToCube(cubeID,accessoryID); 

    res.redirect(`/cubes/${cube._id}/details`);
});

module.exports = router;