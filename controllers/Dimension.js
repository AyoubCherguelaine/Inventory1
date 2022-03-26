
const ArticleModel = require('../models/Article');

var Chemin = "./Article/";

const GetNewDimension = (req,res)=>{

    res.render(chemin+"AddDimension");

};

const PostNewDimension = (req,res)=>{

    let body= req.body;

    ArticleModel.CreateDimension(body.Title,body.Describe,(Result)=>{
        //DashDimension 
        res.redirect("/Dimension/page=1");
    });

};

const PostNewDimensionArticle = (req, res) => { 

    let body= req.body;
    let id = req.params.idArticle;
    ArticleModel.CreateDimension(body.Title,body.Describe,(Result)=>{
        // return in Article
        res.redirect('/Article/AddDimension/idArticle='+id+'/idDimension=Result');

    });

}



module.exports = {
    GetNewDimension,
    PostNewDimension,
    PostNewDimensionArticle

};



//get 

//  /Dimension/NewDimension                                                      checked
// /Dimension/List/idArticle=:idArticle/page=page
// /Dimension/List/idArticle=:idArticle/page=:page/search=:search
// /Dimension/page=:page
// /Dimension/page=:page/archived=:archived

// post 


// /Dimension/NewDimension                                                       checked 
// /Dimension/NewDimension/idArticle=:idArticle                                  checked
                                    