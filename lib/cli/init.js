require('colorful').toxic()

var program = require('commander');
var fs = require('fs');
var path = require('path');

module.exports = function(args) {

  program.version(pkg.version, '-v, --version')
    .command('init [name]')
    .description('a new resume')
    .option('-f --force', 'force')
    .action(function(name, options) {
      if (!name) {
        return Q.nfcall(fs.exists, process.cwd())
          .catch(function(result) {
            if (result) {
              console.log(
                "Existing files here, please run init command in an empty folder!"
                .red);
            } else {
              //copy
            }
          })
      } else {
        return Q.nfcall(fs.exists, path.join(process.cwd(), name))
          .then(function(){
            return Q.nfcall(fs.mkdir, path.join(process.cwd(), name))
            .then(function() {
            })
          })
          .catch(function(result) {
            if (result) {
              console.log('Existing Folder!'.red);
            }
          })
      }
    })


  program.parse(args)
}

function copyFile(topath){
  return Q.nfcall(fs.readdir,__dirname)
    .then(function(paths){

    })
}
