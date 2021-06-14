const db = require('./db');
const express = require('express');
const recette_router=require('./routers/recettes');
const user_router=require('./routers/users');
const categorie_router=require('./routers/categories');
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use('/api/recettes',recette_router);
app.use('/api/users',user_router);
app.use('/api/categories',categorie_router);



app.listen(port,()=> console.log('Server on..',port)); 


