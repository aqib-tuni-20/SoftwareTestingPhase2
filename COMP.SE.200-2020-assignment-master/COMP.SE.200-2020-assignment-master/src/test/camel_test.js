import chai from 'chai';
const expect = chai.expect;
const assert = chai.assert;
//const {expect,assert} = require('chai');
import camelCase from '../camelCase.js';
//const fs = require("../add");
describe("CamelCase Integration Testing",()=>{
    it("Creates a camelcase of a string", function(){
    const result = camelCase("NiladriSaha");
    console.log(result);
    expect(result).to.equal(" niladriSaha");
    });
    it(" throws error",function(){
     try {const result = camelCase(13);
    assert.fail("Error thrown!");}
    catch(e){
        expect(e).to.equal("Bad parameter");
    }



    });
});
