const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));


const user = require('./user/userroutes');

app.use('/api/user',user);
app.use('/api/contact',user);
app.listen(3000, ()=>{
    console.log('connected node js')
})


