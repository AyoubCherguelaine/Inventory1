const Model = require('../models/Actor');

var Chemin = "./Actor/";


const GetCreateActor= (req,res)=>{

    res.render(chemin+"CreateActor");

}


const GetModifyActor= (req,res)=>{


    Model.SelectActors_idActor(req.params.idActor,(Actor)=>{
        res.render(chemin+"ModifyActor",{Actor:Actor[0]});
    })



}

const GetDetailActor= (req,res)=>{

    res.render(chemin+"CreateActor");

}




module.exports = {





};