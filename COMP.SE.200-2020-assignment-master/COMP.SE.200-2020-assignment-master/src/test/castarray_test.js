import chai from 'chai';
const expect = chai.expect;
const assert = chai.assert;
//const {expect,assert} = require('chai');
import castArray from '../castArray.js';
//const fs = require("../add");
describe("Cast Array",()=>{
    it("casting a value to array", function(){
    const result = castArray(5);
    expect(result).to.deep.equal([5]);
    });
    it("casting a string to array",function(){
    const result1 = castArray({'Name':'Maddy'})
    expect(result1).to.deep.equal([{'Name':'Maddy'}]);
    });
    it("casting a null to array",function(){
        const result2 = castArray(null)
        expect(result2).to.deep.equal([null]);
        });
    it("casting an undefined to array",function(){
        const result2 = castArray(undefined)
        expect(result2).to.deep.equal([undefined]);
            });


    });

