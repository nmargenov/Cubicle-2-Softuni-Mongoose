const router = require('express').Router();

router.get('/create',(req,res)=>{
    res.status(302);
    res.render('accessory/create');
});

module.exports = router;