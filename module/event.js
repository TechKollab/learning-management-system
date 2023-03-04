import { rejects } from "assert";
import EventEmitter from "events";
import { resolve } from "path";
 
class RegisterEvent extends EventEmitter{
     
    constructor(){
        super()
    }

    async register(email){
    if(email){
        this.emit('registration',email)
        
    }
    else{
        this.emit('error',"email must be specified")
        
    }
    }
  

}
export{RegisterEvent}