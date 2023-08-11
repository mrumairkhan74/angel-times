const express = require('express');
const router = express.Router();
const userqueries = require('./userquires');
const ContactQueries = require('../contactUs/contactquires');

//api register is  http://localhost:3000/api/user/register


router.post('/register',(req,res)=>{
    userqueries.insertUser(req,res);
})
router.post('/contact',(req,res)=>{
    ContactQueries.insertContact(req,res);
})

module.exports = router;