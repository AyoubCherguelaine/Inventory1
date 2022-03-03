var DB = require('./DB');

function NewArticle(article,callback){

    let q = "insert into Article(Name,SalePrice,Cost,Reference,BarCode) values  ('"+article.name+"',"+article.salePrice+","+article.cost+",'"+article.reference+"','"+article.barCode+"')";
    DB.query(q,(Error,Result)=>{
        
        if (Error) throw error;
        else{
            callback(Result);
        }
    });

}

function GetArticleById(idArticle, callback){
    let q ="select * from Article where idArticle = "+idArticle;

    DB.query(q,(Err,Result)=>{
        if (Err) throw error;
        else{
            callback(Result);
        }

    });

}

function GetArticles(page,callback) {
    let Debut= 20 *(page-1),Fin= 20 * (page);
    let q ="select * from Article limit "+ Debut+" , " + Fin;


    DB.query(q,(Err,Result)=>{
        if(Err) throw error;
        else{
            callback(Result);
        }
    });

}

function GetArticleDetailDimensions(idArticle, callback){

    let q = "select * from Article_Dimension_deltail where idArticle=" + idArticle;

    DB.query(q,(Err,Result)=>{

        if (Err) throw error;
        else{
            callback(Result);
        }

    });

}

function CreateDimension(Title, callback){
    let q= "insert into Dim(title) values('"+title+"')";

    
    DB.query(q,(Err,Result)=>{

        if (Err) throw error;
        else{
            callback(Result);
        }

    });

}

function GetDimensions(callback) {

    let q= "select * from Dim";
    DB.query(q,(Err,Result)=>{

        if (Err) throw error;
        else{
            callback(Result);
        }

    });
}

function RelatedArticleDimensions(idArticle, idDimension, callback){
    let q = " insert into DimensionArticle(idArticle,idDimension) values ("+idArticle+","+idDimension+")";

    DB.query(q,(Err,Result)=>{

        if (Err) throw error;
        else{
            callback(Result);
        }

    });
}

function GetQuantityOfArticleinStock(idArticle,callback){
    let q= "select * from Quantity_Article_in_Stock where idArticle=" + idArticle;

    
    DB.query(q,(Err,Result)=>{

        if (Err) throw error;
        else{
            callback(Result);
        }

    });
}

function GetQuantityOfArticleWithDimension(idArticle,callback){

    let q= "select * from Article_in_stock_With_Dimesion where idArticle = " + idArticle  ;
    
    DB.query(q,(Err,Result)=>{

        if (Err) throw error;
        else{
            callback(Result);
        }

    });
}


function GetQuantityOfArticle_Dimension(idArticle, idDimension,callback){

    let q= "select sum(Quantity),idArticle,idDimension,Title,Article,ArticleReference from Article_in_stock_With_Dimesion where idArticle="+idArticle+" and idDimension= "+idDimension  ;
    
    DB.query(q,(Err,Result)=>{

        if (Err) throw error;
        else{
            callback(Result);
        }

    });
}

function GetAllDimension_of_Article_in_Stock(idArticle,idDimension,idStock,callback){

    let q = "select * from Article_in_stock_With_Dimesion where idDimension = "+idDimension+" and idArticle ="+idArticle+" and idStock="+idStock;
   
    DB.query(q,(Err,Result)=>{

        if (Err) throw error;
        else{
            callback(Result);
        }

    });
}

function StockArticle_dim(idStock,idArticle, idDimension ,Quantity,Lot, callback){

    let q = "insert into Article_in_Stock(idStock,idArticle,idDimension,Quantity,Lot) values ("+idStock+","+idArticle+","+idDimension+","+Quantity+",'"+Lot+"')";

    DB.query(q,(Err,Result)=>{

        if (Err) throw error;
        else{
            callback(Result);
        }

    });
}


function DestockArticle_dim(idStock,idArticle, idDimension ,QuantityDestock,Lot,callback){

    let q= "update Article_in_Stock set Quantity= Quantity - "+QuantityDestock+" where idStock="+idStock+" and idArticle="+idArticle+" and idDimension=" + idDimension +" and Lot = '"+Lot+"'";

    DB.query(q,(Err,Result)=>{

        if (Err) throw error;
        else{
            callback(Result);
        }

    });
}



module.exports = {NewArticle,
    GetArticles,
    GetArticleById,
    GetArticleDetailDimensions,
    CreateDimension,
    RelatedArticleDimensions,
    GetQuantityOfArticle_Dimension,
    GetQuantityOfArticleinStock,
    GetQuantityOfArticleWithDimension,
    GetDimensions,
    GetAllDimension_of_Article_in_Stock,
    StockArticle_dim,
    DestockArticle_dim
};