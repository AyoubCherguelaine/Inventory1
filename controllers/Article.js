
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
        console.log(page);
        if(page <= 0 ){
            res.redirect('/Article/page=1');
            res.end();
        }else{
        ArticleModel.GetArticles(page,(Result)=>{
            res.render(Chemin+"DashArticles",{page:page,Result:Result,Archived:false});
        });
    }
};


const GetDashArticlesSearch = (req,res) =>{

    let page = req.params.page;
    //   /Article/page=:page/idArticle=:idArticle/Name=:Name/Ref=:Refrence/Price=:Price
    let Atributes=[] ,types=[],searchs=[];
    let i=0;
    if(!(req.params.idArticle === undefined)){
        Atributes[i] = 'idArticle';
        types[i]="double";
        searchs[i] =req.params.idArticle;
        i++;
    }

    if(!(req.params.Name === undefined)){
        Atributes[i] = 'Name';
        types[i]="text";
        searchs[i] =req.params.Name;
        i++;
    }

    if(!(req.params.Reference === undefined)){
        Atributes[i] = 'Reference';
        types[i]="text";
        searchs[i] =req.params.Reference;
        i++;
    }

    if(!(req.params.Price === undefined)){
        Atributes[i] = 'SalePrice';
        types[i]="double";
        searchs[i] =req.params.Price;
        i++;
    }

   

    ArticleModel.GetArticlesSearch(page,Atributes,searchs,types,(Result)=>{
            res.render(Chemin+"DashArticles",{page:page,Result:Result,Archived:false});
    });

};

const GetDashProductArchived = (req, res) => {

    let page = req.params.page;
   console.log(req.params.Archived)
    ArticleModel.GetArticleArchived(page,(Result)=>{
        res.render(Chemin+"DashArticles",{page:page,Result:Result,Archived:true});
    });
   
};


const GetDetailArticle = (req,res) => {


    let id = req.params.idArticle;

        ArticleModel.GetArticleDetailDimensions(id,(Dimension)=>{

            let Article = {idArticle:Dimension[0].idArticle, Name: Dimension[0].Name, Reference : Dimension[0].Reference,SalePrice: Dimension[0].SalePrice,Cost: Dimension[0].Cost};

                res.render(Chemin+"/DetailArticle",{Article: Article,Dimension: Dimension});


        })


    

};


const GetRelateArticleDimension = (req,res)=>{

    let id = req.params.id;
   
    ArticleModel.GetDimensions10last( 1,(Result)=>{


        ArticleModel.GetArticleDetailDimensions(id,(Dimension)=>{

            let Article = {idArticle:Dimension[0].idArticle, Name: Dimension[0].Name, Reference : Dimension[0].Reference,SalePrice: Dimension[0].SalePrice,Cost: Dimension[0].Cost};

                res.render(Chemin+"/RealteDimension",{Article: Article,Dimension: Dimension,AllDim:Result});


        })

    });

};


const PostRelateArticleDimension = (req,res)=>{

    let idDimension = req.body.idDimension;
    let idArticle = req.params.idArticle;

    ArticleModel.RelatedArticleDimensions(idArticle, idDimension,()=>{
        res.redirect('/Article/DetailArticle/idArticle='+idArticle);
    });


}

const GetRelateArticleDimensionData = (req,res)=>{

    let idArticle= req.params.idArticle;
    let idDimension = req.params.idDimension;
    ArticleModel.RelatedArticleDimensions(idArticle, idDimension,()=>{
        res.redirect('/Article/DetailArticle/idArticle='+idArticle);
    });
};




module.exports = {
    GetDashProduct,
    GetDashProductArchived,
    PostNewProduct,
    GetNewProduct,
    GetDetailArticle,
    GetRelateArticleDimension,
    GetRelateArticleDimensionData,
    PostRelateArticleDimension,
    GetDashArticlesSearch
};



//get 

// /Article/page=:page
// /Article/page=:page/Archived=:archived
// /Article/NewArticle
// /Article/DetailArticle/idArticle=:idArticle
// /Article/AddDimension/idArticle=:idArticle
//  /Article/AddDimension/idArticle=:idArticle/idDimension=:idDimension


// post
// /Article/NewArticle
///Article/AddDimension/idArticle=:idArticle