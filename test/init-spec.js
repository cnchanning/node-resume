var expect = require("chai").expect;
var fs = require("q-io/fs");
var exec = require('child_process').exec;
var path = require('path');
describe("cli init", function() {
  beforeEach(function() {
    if (fs.exists("testDir")) {
       fs.removeTree("testDir");
    }
    return fs.makeDirectory("testDir")
      .then(function() {
        return fs.makeDirectory("testDir/testDir1")
      })
      .then(function() {
        return fs.makeDirectory("testDir/testDir2")
      })
      .then(function() {
        return fs.write("testDir/testDir2/hello.txt", "hello word!\n")
      })
  });
  it("init without name", function(done) {
    exec("cd testDir", function() {
    })
  })

  afterEach(function() {
    return fs.removeTree("testDir");
  })
})
