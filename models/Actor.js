var DB = require('./DB');

function AddActor(Actor,LocalStock=false){

    let q="insert into Actor(Name,Reference,LocalStock) values ('"+Actor.Name+"','"+Actor.Reference+"',"+LocalStock+")";

    DB.query(q,(Err,Result)=>{

        
        if (Err) throw error;
        else{
            callback(Result);
        }

    });


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
    SelectActors,
    SelectActors_idActor,
    SelectInternalActors,
    SelectInternalActor_idActor
};