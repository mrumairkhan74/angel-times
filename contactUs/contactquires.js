const mongodb  = require('../mongo/connection');
const contactmodel = require('./contactmodel');

const ContactQueries = {
    insertContact:(req,res)=>{
        let contactObj={
            fistname: req.body.fistname,
            email: req.body.email,
            message: req.body.message
        }
        contactmodel.create(contactObj)
        return res.json({
            data:[],
            success:true,
            message: 'user successfully done!'
        })
    }
}

module.exports = ContactQueries;