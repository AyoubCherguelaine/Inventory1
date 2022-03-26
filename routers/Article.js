var express = require('express');
var router = express.Router();
var Control = require('../controllers/Article');

router.get('/',(req,res)=>{
    res.redirect('/Article/page=1');
})
router.get('/page=:page', Control.GetDashProduct);

router.get('/page=:page/Archived=:Archived', Control.GetDashProductArchived);

router.get("/NewArticle", Control.GetNewProduct);

router.post("/NewArticle", Control.PostNewProduct);

router.get('/DetailArticle/IdArticle=:idArticle',Control.GetDetailArticle);

router.get("/AddDimension/idArticle=:id",Control.GetRelateArticleDimension);


router.get('/AddDimension/idArticle=:idArticle/idDimension=:idDimension',Control.GetRelateArticleDimensionData);

router.post("/AddDimension/idArticle=:idArticle",Control.PostRelateArticleDimension);


//get 

// /Article/page=:page                                                          checked
// /Article/page=:page/search=:search
// /Article/page=:page/Archived=:archived                                       checked
// /Article/page=:page/Archived=:archived/search=:search
// /Article/NewArticle                                                          checked 
// /Article/DetailArticle/idArticle=:idArticle                                  checked
// /Article/AddDimension/idArticle=:idArticle                                   checked
//  /Article/AddDimension/idArticle=:idArticle/idDimension=:idDimension         checked


// post

// /Article/NewArticle                                                          checked
// /Article/AddDimension/idArticle=:idArticle                                   checked

module.exports = router;

