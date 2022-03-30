var DB = require('./DB');

function AddActor(Actor,LocalStock=false){

    //InsertActor(NameValue text,ReferenceValue text )
    let q="call InsertActor('"+Actor.Name+"','"+Actor.Reference+"')";

    DB.query(q,(Err,Result)=>{

        
        if (Err) throw error;
        else{
            callback(Result);
        }

    });


}


// archived

function Archived(idActor,callback){

    let q= " call ArchivedActor("+idArticle+")";

    DB.query(q,(err,result)=>{
        if(err) throw err;
        else{
            callback();
        }
    })

}

// desarchived
function Desarchived(idActor,callback){

    let q= " call DesarchivedActor("+idArticle+")";

    DB.query(q,(err,result)=>{
        if(err) throw err;
        else{
            callback();
        }
    })

}

// modify 

function ModifyActor(idActor, Actor,callback) {
    //ModifyActor(idActorValue int,NameValue text ,ReferenceValue text)

    let q = "call ModifyActor("+idActor+",'"+Actor.Name+"','"+Actor.Reference+"')";

    DB.query(q,(err,result)=>{
        if(err) throw err;
        else{
            callback();
        }
    })

}



function SelectActors(callback) {

    let q = "select *  from Actor_External";


    DB.query(q,(Err,Result)=>{

        
        if (Err) throw error;
        else{
            callback(Result);
        }

    });

}



function SelectActors_idActor(idActor,callback) {
    let q = "select *  from Actor_External where idActor = " +idActor;

    
    DB.query(q,(Err,Result)=>{

        
        if (Err) throw error;
        else{
            callback(Result);
        }

    });

}



function SelectInternalActors(callback) {

    let q = "select * from Actor_Stock ";

    DB.query(q,(Err,Result)=>{

        
        if (Err) throw error;
        else{
            callback(Result);
        }

    });
}

function SelectInternalActor_idActor(idActor, callback) {

    let q = "select * from Actor_Stock  where idActor ="+ idActor;
    
    DB.query(q,(Err,Result)=>{

        
        if (Err) throw error;
        else{
            callback(Result);
        }

    }); 
}


module.exports= {
    AddActor,
    Archived,
    Desarchived,
    ModifyActor,
    SelectActors,
    SelectActors_idActor,
    SelectInternalActors,
    SelectInternalActor_idActor
};