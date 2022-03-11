var express = require('express');
var router = express.Router();
var Control = require('../controllers/Article');

router.get('/',(req,res)=>{
    res.redirect('/Article/page=1');
})
router.get('/page=:page', Control.GetDashProduct);

router.get("/NewArticle", Control.GetNewProduct);

router.post("/NewArticle", Control.PostNewProduct);

module.exports = router;