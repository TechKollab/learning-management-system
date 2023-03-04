const crypto = require('crypto');
 
const algorithm = 'aes-256-cbc';
 
const key = crypto.randomBytes(32);
 
const iv = crypto.randomBytes(16);
 class Hasher{
    constructor(){
   
    }
    encrypt(text){
      
            let cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
            let encrypted = cipher.update(text);
            encrypted = Buffer.concat([encrypted, cipher.final()]);
            return { iv: iv.toString('hex'),
            encryptedData: encrypted.toString('hex') };
        
    }
    decrypt(encryptedData,iv){
        let iv = Buffer.from(iv, 'hex');
        let encryptedText = Buffer.from(encryptedData, 'hex');
     
        let decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
     
        let decrypted = decipher.update(encryptedText);
        decrypted = Buffer.concat([decrypted, decipher.final()]);
     
        return decrypted.toString();
    }
 }