const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactus = new Schema({
  fullname:{
    type:String
  },
  email:{
    type:String
  },
  subject:{
    type:String
  },
  message:{
    type:String
  }
});

 const Contact = mongoose.model('contact', contactus);
 module.exports = Contact;  