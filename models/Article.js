var DB = require('./DB');

function AddArticle(article,callback){

    let q = "insert into Article(Name,SalePrice,Cost,Reference,BarCode) values  ('"+article.name+"',"+article.salePrice+","+article.cost+",'"+article.reference+"','"+article.barCode+"')";
    DB.query(q,(Error,Result)=>{
        if(Error){
            callback(Error);
            console.log(Error);
        }else{
            callback(Result);
        }
    });

}

function GetArticleById(idArticle, callback){
    let q ="select * from Article where idArticle = "+idArticle;

    DB.query(q,(Err,Result)=>{

        if(Err) callback(Err,Result);
        else{
            callback(Result);
        }

    });

}

function GetArticleDetailDimensions(idArticle, callback){

    let q = "select * from Article_Dimension_deltail where idArticle=" + idArticle;

    DB.query(q,(Err,Result)=>{

        if(Err) callback(Err,Result);
        else{
            callback(Result);
        }

    });

}

function CreateDimension(Title, callback){
    let q= "insert into Dim(title) values('"+title+"')";

    
    DB.query(q,(Err,Result)=>{

        if(Err) callback(Err,Result);
        else{
            callback(Result);
        }

    });

}

function RelatedArticleDimensions(idArticle, idDimension, callback){
    let q = " insert into DimensionArticle(idArticle,idDimension) values ("+idArticle+","+idDimension+")";

    DB.query(q,(Err,Result)=>{

        if(Err) callback(Err,Result);
        else{
            callback(Result);
        }

    });
}

function GetQuantityOfArticleinStock(idArticle,callback){
    let q= "select * from Quantity_Article_in_Stock where idArticle=" + idArticle;

    
    DB.query(q,(Err,Result)=>{

        if(Err) callback(Err,Result);
        else{
            callback(Result);
        }

    });
}

function getQuantityOfArticleWithDimension(idArticle,callback){

    let q= "select * from Article_in_stock_With_Dimesion where idArticle = " + idArticle  ;
    
    DB.query(q,(Err,Result)=>{

        if(Err) callback(Err,Result);
        else{
            callback(Result);
        }

    });
}


function getQuantityOfArticle_Dimension(idArticle, idDimension,callback){

    let q= "select sum(Quantity),idArticle,idDimension,Title,Article,ArticleReference from Article_in_stock_With_Dimesion where idArticle="+idArticle+" and idDimension= "+idDimension  ;
    
    DB.query(q,(Err,Result)=>{

        if(Err) callback(Err,Result);
        else{
            callback(Result);
        }

    });
}



module.exports = {AddArticle,GetArticleById,GetArticleDetailDimensions};