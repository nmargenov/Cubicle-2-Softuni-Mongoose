const { createCube, getCubeByID } = require('../managers/cubeManager');

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
    const cube = await getCubeByID(cubeID).lean();
    console.log(cube);
    res.status(302);
    res.render('cube/details',{cube});
});


module.exports = router;