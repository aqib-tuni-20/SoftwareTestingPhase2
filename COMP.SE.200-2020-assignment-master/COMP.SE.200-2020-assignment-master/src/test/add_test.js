import chai from 'chai';
const expect = chai.expect;
const assert = chai.assert;
//const {expect,assert} = require('chai');
import add from '../add.js';
//const fs = require("../add");
describe("add",()=>{
    it("Add two integers", function(){
    const result = add(5,10);
    expect(result).to.equal(15);
    });
    it("Add two floats",function(){
    const result1 = add(10.0,23.5);
    expect(result1).to.equal(33.5);
    });
    it("Add two Strings and throws error",function(){
     try {const string_res = add("Niladri","Saha");
    assert.fail("Error thrown!");}
    catch(e){
        expect(e).to.equal("Bad Parameters!");
    }



    });
});
