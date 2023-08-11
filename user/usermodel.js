const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  fullname: {
    type: String
  },
  email: {
    type: String
  },
  address: {
    type: String,
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  zip: {
    type: Number
  },
  cardname: {
    type: String
  },
  cardnumber: {
    type: Number
  },
  expmonth: {
    type: String
  },
  expyear: {
    type: Number
  },
  cvv: {
    type: Number
  },
  amount: {
    type: Number
  },
});

const Payment = mongoose.model('register', paymentSchema);
module.exports = Payment;  