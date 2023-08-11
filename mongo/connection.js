const { response } = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/transacton', {useNewUrlParser:true, useUnifiedTopology:true})


.then(response=>{
    console.log('succcefully connected!');
})
.catch(err=>{
    console.log('mongodb not connected!');
})