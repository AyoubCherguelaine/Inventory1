var express = require('express');
var router = express.Router();
const Control = require('../controllers/Dimension');

router.get('/',(req,res)=>{
    res.redirect('/Dimension/page=1');
})
router.get('/NewDimension',Control.GetNewDimension);



router.post('/NewDimension',Control.PostNewDimension);

router.post('/NewDimension/idArticle=:idArticle',Control.PostNewDimensionArticle);

router.get('/page=:page',Control.GetDashDimension);

router.get('/Archived/idDimension=:idDimension',Control.GetArchivedDimension);

router.get('/Modify/idDimension=:idDimension',Control.GetModifyDimension);
router.post('/Modify/idDimension=:idDimension',Control.PostModifyDimension);

//get 

//  /Dimension/NewDimension                                             checked
// /Dimension/List/idArticle=:idArticle/page=page
// /Dimension/List/idArticle=:idArticle/page=:page/search=:search
// /Dimension/page=:page                                               checked
// /Dimension/page=:page/archived=:archived                             checked

// post 

// /Dimension/NewDimension                                          checked
// /Dimension/NewDimension/idArticle=:idArticle                     checked
//  /Dimension/Relate/idArticle=:idArticle


module.exports = router;