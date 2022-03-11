
const ArticleModel = require('../models/Article');

var Chemin = "./Article/";

const GetNewProduct = (req,res) => {

    res.render(Chemin+'NewProduct');

}

const PostNewProduct = (req,res) => {
    let body = req.body;
    ArticleModel.NewArticle(body,(Result)=>{
        res.redirect('/Article/');
    });

};


const GetDashProduct = (req, res) => {

        let page = req.params.page;
       
        ArticleModel.GetArticles(page,(Result)=>{
            res.render(Chemin+"DashArticles",{page:page,Result:Result});
        });
       
};

const GetDetailArticle = (req,res) => {

    let id = req.params.idArticle;

        ArticleModel.GetArticleDetailDimensions(id,(Dimension)=>{

            let Article = { Name: Dimension[0].Name, Reference : Dimension[0].Reference,SalePrice: Dimension[0].SalePrice,Cost: Dimension[0].Cost};

            res.render(Chemin+"/DetailArticle",{Article: Article,Dimension: Dimension});

        })


    

};



module.exports = {
    GetDashProduct,
    PostNewProduct,
    GetNewProduct,
    GetDetailArticle
};
