const router = require('express').Router();
const _=require('lodash');
const User = require('../models/user');


router.get('', async (req,res)=>{
    res.send(await User.find());
})

router.get('/:id', async (req,res)=>{
    let user = await User.findById(req.params.id);
    if(!user)
        return res.status(404).send('User Id not found');
    
    
    res.send(user);
})

router.post('', async (req,res)=>{

    let user = new User(_.pick(req.body,['userName','email']));
    try{
    user = await user.save();
    } catch (error){
    res.status(400).send(error.message);
}})

router.put('/:id', async (req,res)=>{
    let user = await User.findById(req.params.id);
    if(!user)
        return res.status(404).send('Id not found');
    user = _.merge(user,req.body);
    user = await user.save();
    res.send(user);
})

router.delete('/:id',async (req,res)=>{
   
    let user = await User.findByIdAndDelete(req.params.id); 
    if(!user)
        return res.status(404).send('Id not found');
    
  
    res.send(user);
})


module.exports = router;