const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://syrine:tmira9mar@clusterscangebile.6eqwg.mongodb.net/ScangebileDB?retryWrites=true&w=majority',
{ useNewUrlParser : true, useUnifiedTopology : true})
            .then(()=> console.log('Mongo is up'))
            .catch(err => console.log('Mongo is Down.raison :', err));

