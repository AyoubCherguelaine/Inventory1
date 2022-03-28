
const ArticleModel = require('../models/Article');

var chemin = "./Article/";

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
        res.redirect('/Article/AddDimension/idArticle='+id+'/idDimension='+Result);
    });

};

const GetDashDimension = (req, res) => {

    if(req.params.page <=0){
        res.redirect('/Dimension/page=1');

    }else{

    ArticleModel.GetDimensions10last(req.params.page , (Result)=>{
        res.render(chemin+'DashDimension',{Result:Result,page:req.params.page});
    });
    }
}

module.exports = {
    GetNewDimension,
    PostNewDimension,
    PostNewDimensionArticle,
    GetDashDimension

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
                                    