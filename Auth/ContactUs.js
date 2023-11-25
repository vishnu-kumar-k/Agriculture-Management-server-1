const { SendAdminMail, ReplyClientMail } = require("./SendEmailVerification");

require("dotenv").config();


const ContactUs=(req,res)=>{
    const formData=req.body;
    SendAdminMail(formData)
    ReplyClientMail(formData);
    console.log(formData);
    res.json({status:true});

}
module.exports={ContactUs}