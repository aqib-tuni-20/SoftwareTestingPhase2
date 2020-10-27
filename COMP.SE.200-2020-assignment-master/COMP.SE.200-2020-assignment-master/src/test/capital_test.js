import chai from 'chai';
const expect = chai.expect;
const assert = chai.assert;
//const {expect,assert} = require('chai');
import capitalize from '../capitalize.js';
//const fs = require("../add");
describe("Capitalize Integration Testing",()=>{
    it("Creates upper case of the initial alphabet of a  capitalized string", function(){
    const result = capitalize('LONDON');
    expect(result).to.equal('London');
    });
    it("Creates upper case of the initial alphabet of a lowercased string", function(){
        const result = capitalize('bengal');
        expect(result).to.equal('Bengal');
        });
    it(" throws error",function(){
     try {const result = capitalize(13);
    assert.fail("Error thrown!");}
    catch(e){
        expect(e).to.equal("Bad parameter");
    }



    });
});
