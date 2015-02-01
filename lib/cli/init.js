require('colorful').colorful();

var program = require('commander');

module.exports=function(args){

program.version(pkg.version, '-v, --version')
.parse(args);

var subcmd = program.args[0];

if(!subcmd){
  program.help();
}

function printHelp(){

}


}
