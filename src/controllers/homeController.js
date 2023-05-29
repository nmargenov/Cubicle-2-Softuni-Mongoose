const { getAllCubes } = require('../managers/cubeManager');

const router = require('express').Router();


router.get(['/','/index'],async (req,res)=>{
    res.status(302);

    const cubes = await getAllCubes().lean();

    res.render('index',{cubes});
});
router.get('/about',(req,res)=>{
    res.status(302);
    res.render('about');
});

module.exports = router;