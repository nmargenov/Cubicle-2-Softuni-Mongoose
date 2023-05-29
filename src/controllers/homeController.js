const router = require('express').Router();

router.get(['/','/index'],(req,res)=>{
    res.status(302);
    res.render('index');
});
router.get('/about',(req,res)=>{
    res.status(302);
    res.render('about');
});

module.exports = router;