var DB = require('./DB');

function NewArticle(article,callback){

  
    //AddArticle(NameValue text ,SalePriceValue double ,CostValue double ,ReferenceValue text )

    let q= "select AddArticleReturnId('"+article.name+"',"+article.salePrice+","+article.cost+",'"+article.reference+") as idArticle";
   
    DB.query(q,(Error,Result)=>{
        
        if (Error) throw error;
        else{
        let id = Result[0].idArticle;
            callback(id);
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
    let q ="select * from Article where Archived =0 limit "+ Debut+" , " + Fin;


    DB.query(q,(Err,Result)=>{
        if(Err) throw error;
        else{
            callback(Result);
        }
    });

}

// ArchivedArticle
function ArchivedArticle(idArticle){

    let q= "call ArchivedArticle("+idArticle+")";

    DB.query(q,(err,Result)=>{

        if(err) throw err;
        
    })

}

// modify Function
function ModifyArticle(Article ){


    GetArticleById(Article.idArticle,(Result)=>{
        let OldArticle = Result[0];

        if(OldArticle.SalePrice != Article.SalePrice){
            ModifyArticleSalePrice(Article.idArticle,Article.SalePrice);
        }

        if(OldArticle.Cost != Article.Cost){
// update Cost 
            ModifyArticleCost(Article.idArticle,Article.Cost);
        }

        if(OldArticle.Reference != Article.Reference){
            //update Reference

            ModifyArticleReferenced(Article.idArticle,Article.Reference);

        }


    });

}

function ModifyArticleSalePrice(idArticle,NewSale){

    let q = 'call ModifyArticle('+idArticle+',"",'+NewSale+',0,"")';

    DB.query(q,(Err,Result)=>{
        if(Err) throw error;

    })

}

function ModifyArticleCost(idArticle,NewCost){

    let q = 'call ModifyArticle('+idArticle+',"",0,'+NewCost+',"")';

    DB.query(q,(Err,Result)=>{
        if(Err) throw error;

    })
}

function ModifyArticleReferenced(idArticle,Reference){
    let q = 'call ModifyArticle('+idArticle+',"",0,0,"'+Reference+'")';

    DB.query(q,(Err,Result)=>{
        if(Err) throw error;

    })
}

// close modify function 



function GetArticleDetailDimensions(idArticle, callback){

    let q = "select * from Article_Dimension_deltail where idArticle=" + idArticle;

    DB.query(q,(Err,Result)=>{

        if (Err) throw error;
        else{
            callback(Result);
        }

    });

}


//
// DimensionArticle
//


function CreateDimension(Title,Describe ,callback){
  
    let q = 'select AddDimReturnId("'+Title+'", "'+Describe+'")  as idDimension';
    
    DB.query(q,(Err,Result)=>{

        if (Err) throw error;
        else{
            let id = Result[0].idDimenssion;
            callback(id);
        }

    });

}


//modifyDimesion 

function modifyDimension(idDimension){

}

function GetDimensions(callback) {

    let q= "select idDimension,Title from Dim where Archived=0";
    DB.query(q,(Err,Result)=>{

        if (Err) throw error;
        else{
            callback(Result);
        }

    });
}

function GetDimensionsArchived(callback) {

    let q= "select idDimension,Title from Dim where Archived=1";
    DB.query(q,(Err,Result)=>{

        if (Err) throw error;
        else{
            callback(Result);
        }

    });
}


function RelatedArticleDimensions(idArticle, idDimension, callback){
    
    // RelationArticleDim(Article int ,Dimension int )
    let q = 'call RelationArticleDim('+idArticle+','+idDimension+')'; 
    DB.query(q,(Err,Result)=>{

        if (Err) throw error;
        

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





module.exports = {
    NewArticle,
    GetArticles,
   
    GetArticleById,
    ArchivedArticle,
    GetArticleDetailDimensions,
    ModifyArticle,
    CreateDimension,
    modifyDimension,
    RelatedArticleDimensions,
    GetDimensionsArchived,
    GetQuantityOfArticle_Dimension,
    GetQuantityOfArticleinStock,
    GetQuantityOfArticleWithDimension,
    GetDimensions,
    GetAllDimension_of_Article_in_Stock,
    StockArticle_dim,
    DestockArticle_dim
};