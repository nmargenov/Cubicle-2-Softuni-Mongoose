const router = require('express').Router();

router.get('/create',(req,res)=>{
    res.status(302);
    res.render('cube/create');
});

router.post('/create',(req,res)=>{
    console.log(req.body);
    res.end();
}); 


module.exports = router;