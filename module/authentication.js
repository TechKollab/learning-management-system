import crypto from 'crypto'
const validPassword=(password,storedpassword,salt)=>{
   //const salt=crypto.randomBytes(16).toString('hex')
    const pwd=crypto.pbkdf2Sync(password,salt,1000,64,`sha512`).toString('hex')
     return pwd===storedpassword
  }

  const setPassword=function(password){
    const salt=crypto.randomBytes(16).toString('hex')
    const encpassword=crypto.pbkdf2Sync(password,salt,1000,64,`sha512`).toString('hex')
    return { salt, encpassword}
  }
  export { validPassword,setPassword}