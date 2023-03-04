

class Validator{
    
      
    constructor(){

    }
    validateEmail(email){
        const regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        const validity=regEmail.test(email)
        if(validity){return true}
        return false

    }
    validatePwd(pwd){
       const repwd= /[A-Z0-9]/
       if(repwd.test(pwd)){return true}
       return false
    }
}
export default Validator