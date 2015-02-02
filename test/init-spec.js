var expect =require("chai").expect;
var fs = require("q-io/fs");
describe("cli init",function(){
    beforeEach(function(){
      return fs.removeTree("testDir")
      .then(function(){
        return fs.makeDirectory("testDir")
      })
      .then(function(){
        return fs.makeDirectory("testDir/testDir1")
      })
      .then(function(){
        return fs.makeDirectory("testDir/testDir2")
      })
      .then(function(){
        return fs.write("testDir/testDir2/hello.txt","hello word!\n")
      })
    });
    it("init ",function(){
      expect(1).to.equal(1);
    })

    afterEach(function(){
      return fs.removeTree("testDir");
    })
})
