const { createAccessory } = require('../managers/accessoryManager');

const router = require('express').Router();

router.get('/create',(req,res)=>{
    res.status(302);
    res.render('accessory/create');
});

router.post('/create',async (req,res)=>{
    const name = req.body.name.trim();
    const description = req.body.description.trim();
    const imageUrl = req.body.imageUrl.trim();

    if(name == "" || description == "" || imageUrl == ""){
        res.status(400);
        res.render('accessory/create',{name,description,imageUrl});
        return;
    }

    await createAccessory(name,description,imageUrl);

    res.redirect('/');
});

module.exports = router;