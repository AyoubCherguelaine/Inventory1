
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

const GetArchivedDimension = (req,res)=>{
    let id = req.params.idDimension;

    ArticleModel.ArchivedDim(id,()=>{
        res.redirect('/Dimension/page=1');
    });
}

const GetModifyDimension= (req,res)=>{

    // /Dimension/Modify/idDimension=:idDimension

    let id = req.params.idDimension;

    ArticleModel.GetDimension(id,(Result)=>{

        
        res.render(chemin+"ModifyDimension",{Dim:Result[0]});

    });

};

const PostModifyDimension= (req, res) => {

    let id = req.params.idDimension;
    ArticleModel.modifyDimension(id,req.body,()=>{
        res.redirect('/Dimension/Modify/idDimension='+id);
    });

}


module.exports = {
    GetNewDimension,
    PostNewDimension,
    PostNewDimensionArticle,
    GetDashDimension,
    GetArchivedDimension,
    GetModifyDimension,
    PostModifyDimension

};



//get 

//  /Dimension/NewDimension                                                      checked
// /Dimension/List/idArticle=:idArticle/page=page
// /Dimension/List/idArticle=:idArticle/page=:page/search=:search
// /Dimension/page=:page
// /Dimension/page=:page/Title=:Title
// /Dimension/page=:page/idDimension=:idDimension
// /Dimension/page=:page/archived=:archived

// /Dimension/page=:page/Title=:Title/idDimension=:idDimension
// /Dimension/page=:page/Title=:Title/archived=:archived
// /Dimension/page=:page/Title=:Title/archived=:archived/idDimension=:idDimension

// 
// /Dimension/Archived/idDimension=:idDimension                                 checked
// /Dimension/Desarchived/idDimension=:idDimension
// /Dimension/Modify/idDimension=:idDimension                                   checked

// post 


// /Dimension/NewDimension                                                       checked 
// /Dimension/NewDimension/idArticle=:idArticle                                  checked
// /Dimension/Modify/idDimension=:idDimension                                   checked