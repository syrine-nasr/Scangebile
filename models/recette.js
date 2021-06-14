const mongoose = require('mongoose');

const recetteSchema = new mongoose.Schema({
    title : {type : String, required : true}, 
    author : String, 
    ingredients : [String],
    description : String,
    categorie : String,
    date : {type : Date, default : Date.now()},
   
})

const Recette = mongoose.model('Recette',recetteSchema);

module.exports = Recette;