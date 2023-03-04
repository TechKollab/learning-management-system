import assert from "assert/strict";
import { describe } from "node:test";
import  Validator from '../module/validator.js';
import { Student } from "../model/schema.js";
import { connectToDb,conClose } from "../model/connection.js";

describe('Test Validator',function(){
    it("email must return true",function(){
        const validator= new Validator()
        assert.strictEqual(validator.validateEmail("eyitayoit@gmail.com"),true)

    })
    it("password must contain alphanumeric and must be of length",function(){
        const validator= new Validator()
        assert.strictEqual(validator.validatePwd("April2nd"),true)

    })
    

})

describe('CRUD test',function(){
   
before(function(){
 connectToDb()
})
it('document should save without an error', function(done){
    const result=  new Student({email:"eyitayoitunu@yahoo.com",pwd:"Sep215"})
    result.save(done)
    
  })
it('collection should return length greater than 0',async function(){
  const result= await Student.find({})
  assert.notStrictEqual(result.length, 0)
  
})
it('document should update without an error', async function( ){
    const query= await Student.updateOne({email:"eyitayo@yahoo.com"},{firstname:'eyitayo',lastname:'itunu',gender:'male'})
    const result= await Student.findOne({email:'eyitayo@yahoo.com'})
    assert.strictEqual(result.lastname,'itunu')
  })
after(function(){
    conClose()
})
})