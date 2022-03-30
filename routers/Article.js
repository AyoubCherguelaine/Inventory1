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


router.get('/Archived/idArticle=:idArticle',Control.GetArchivedArticle);


router.get('/Desarchived/idArticle=:idArticle',Control.GetDesarchivedArticle);

// Search

router.get('/page=:page/idArticle=:idArticle/Name=:Name/Ref=:Reference/Price=:Price',Control.GetDashArticlesSearch);
router.get('/page=:page/idArticle=:idArticle/Name=:Name/Ref=:Reference',Control.GetDashArticlesSearch);
router.get('/page=:page/idArticle=:idArticle/Name=:Name',Control.GetDashArticlesSearch);
router.get('/page=:page/idArticle=:idArticle/Ref=:Reference',Control.GetDashArticlesSearch);
router.get('/page=:page/idArticle=:idArticle',Control.GetDashArticlesSearch);
router.get('/page=:page/Name=:Name/Ref=:Reference/Price=:Price',Control.GetDashArticlesSearch);
router.get('/page=:page/Name=:Name/Ref=:Reference',Control.GetDashArticlesSearch);
router.get('/page=:page/Name=:Name',Control.GetDashArticlesSearch);
router.get('/page=:page/Ref=:Reference/Price=:Price',Control.GetDashArticlesSearch);
router.get('/page=:page/Name=:Name/Price=:Price',Control.GetDashArticlesSearch);
router.get('/page=:page/Name=:Name',Control.GetDashArticlesSearch);
router.get('/page=:page/Ref=:Reference',Control.GetDashArticlesSearch);
router.get('/page=:page/Price=:Price',Control.GetDashArticlesSearch);

// Search Archived 

router.get('/page=:page/Archived=:Archived/idArticle=:idArticle/Name=:Name/Ref=:Reference/Price=:Price',Control.GetDashArticlesSearch);
router.get('/page=:page/Archived=:Archived/idArticle=:idArticle/Name=:Name/Ref=:Reference',Control.GetDashArticlesSearch);
router.get('/page=:page/Archived=:Archived/idArticle=:idArticle/Name=:Name',Control.GetDashArticlesSearch);
router.get('/page=:page/Archived=:Archived/idArticle=:idArticle/Ref=:Reference',Control.GetDashArticlesSearch);
router.get('/page=:page/Archived=:Archived/idArticle=:idArticle',Control.GetDashArticlesSearch);
router.get('/page=:page/Archived=:Archived/Name=:Name/Ref=:Reference/Price=:Price',Control.GetDashArticlesSearch);
router.get('/page=:page/Archived=:Archived/Name=:Name/Ref=:Reference',Control.GetDashArticlesSearch);
router.get('/page=:page/Archived=:Archived/Name=:Name',Control.GetDashArticlesSearch);
router.get('/page=:page/Archived=:Archived/Ref=:Reference/Price=:Price',Control.GetDashArticlesSearch);
router.get('/page=:page/Archived=:Archived/Name=:Name/Price=:Price',Control.GetDashArticlesSearch);
router.get('/page=:page/Archived=:Archived/Name=:Name',Control.GetDashArticlesSearch);
router.get('/page=:page/Archived=:Archived/Ref=:Reference',Control.GetDashArticlesSearch);
router.get('/page=:page/Archived=:Archived/Price=:Price',Control.GetDashArticlesSearch);


//get 

// /Article/page=:page                                                                      checked
// /Article/page=:page/search=:search
// /Article/page=:page/Archived=:archived                                                   checked
// /Article/page=:page/Archived=:archived/search=:search
// /Article/NewArticle                                                                      checked 
// /Article/DetailArticle/idArticle=:idArticle                                              checked
// /Article/AddDimension/idArticle=:idArticle                                               checked
//  /Article/AddDimension/idArticle=:idArticle/idDimension=:idDimension                     checked
// /Article/page=:page/idArticle=:idArticle/Name=:Name/Ref=:Refrence/Price=:Price
//  /Article/Archived/idArticle=:idArticle                                                  checked 
// /Article/Desarchived/idArticle=:idArticle                                                checked
// post

// /Article/NewArticle                                                                      checked
// /Article/AddDimension/idArticle=:idArticle                                               checked

module.exports = router;

