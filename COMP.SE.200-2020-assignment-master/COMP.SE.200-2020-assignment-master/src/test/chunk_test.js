import chai from 'chai';
const expect = chai.expect;
const assert = chai.assert;
//const {expect,assert} = require('chai');
import chunk from '../chunk.js';
//const fs = require("../add");
describe("Chunk Integration Testing",()=>{
    it("Return a chunk with two arrays", function(){
    const result = chunk(['a', 'b', 'c', 'd'], 2);
    expect(result).to.deep.equal([['a','b'],['c','d']]);
    });
    it("Return a chunk with three arrays ",function(){
    const result = chunk(['a', 'b', 'c', 'd'], 3);
    expect(result).to.deep.equal([['a','b','c'],['d']]);
    });
    it("Return a chunk with undefined arrays ",function(){
        try{
        const result = chunk(['a', 'b', 'c', 'd'], undefined);
        assert.fail("Error thrown!");
        }catch(e){
            expect(e).to.equal("Bad Parameters!");
        }
        });
        


    });