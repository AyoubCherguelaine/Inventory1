
const ArticleModel = require('../models/Article');

var Chemin = "./Article/";

const GetNewProduct = (req,res) => {

    res.render(Chemin+'NewProduct');

}

const PostNewProduct = (req,res) => {

    let body = req.body;

    ArticleModel.NewArticle(Body,(Result)=>{
        req.redirect('/DashArticle');
    });

};

const GetDashProduct = (req, res) => {

        let page = req.params.page;
        ArticleModel.GetArticles(page,(Result)=>{
            res.render(Chemin+"DashArtice",{page:page,Result:Result});
        });
       

};

const GetDetailArticle = (req,res) => {

    

};
