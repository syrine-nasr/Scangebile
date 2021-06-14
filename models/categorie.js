const mongoose = require('mongoose');

const categorieSchema = new mongoose.Schema({
    name : {type : String, required : true}, 
    
})

const Categorie = mongoose.model('Categorie',categorieSchema);

module.exports = Categorie;