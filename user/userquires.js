const mongodb  = require('../mongo/connection');
const usermodel = require('./usermodel');

const UserQueries = {
    insertUser:(req,res)=>{
        let userObj={
            fistname: req.body.fistname,
            email: req.body.email,
            address: req.body.address,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            cardname: req.body.cardname,
            cardnumber: req.body.cardnumber,
            cvv: req.body.cvv,
        }
        usermodel.create(userObj)
        return res.json({
            data:[],
            success:true,
            message: 'user successfully done!'
        })
    }
}

module.exports = UserQueries;