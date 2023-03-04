import nodemailer from 'nodemailer'

export default class LMNSmailer{

    constructor(service,useremail,password){
     this.transporter = nodemailer.createTransport({
            service: service,
            auth: {
              user: useremail,
              pass: password
            }
          });
    }
    sendMail(mailOptions) {
       
        
            this.transporter.sendMail(mailOptions,function(error,info){
             if(error){
                return error
             }
            else{
                return info
            }
            })
         
        
    
   }

}