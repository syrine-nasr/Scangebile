const router = require('express').Router();
const _=require('lodash');
const Categorie = require('../models/categorie');

router.get('', async (req,res)=>{
    res.send(await Categorie.find());
})

router.get('/:id', async (req,res)=>{
    let categorie = await Categorie.findById(req.params.id);
    if(!categorie)
        return res.status(404).send('Id not found');
    
    
    res.send(categorie);
})

router.post('', async (req,res)=>{
    let categorie = new Categorie({
        name: req.body.name
    })

    try{
        categorie = await categorie.save();
        res.send(categorie);
        } catch (error){
        res.status(400).send(error.message);
    
}})

router.put('/:id', async (req,res)=>{

    let categorie = await Categorie.findById(req.params.id);
    if(!categorie)
        return res.status(404).send('Id not found');
    categorie.name = req.body.name })



router.delete('/:id',async (req,res)=>{
   
    let categorie = await Categorie.findByIdAndDelete(req.params.id); 
    if(!categorie)
        return res.status(404).send('Id not found');
    
  
    res.send(categorie);
})


module.exports = router;