const exec = require("child_process").exec;
let os = require("os");
let fs = require('fs')
let process = require('process')
let currentOS = os.platform()
function buildCode(code){
    fs.writeFile('./CodeBuilder/pluto_project/src/main/PlutoPilot.cpp', code, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
        if(os.platform == "win32"){
            console.log("invalid")
        }else{
        let old_state = process.cwd()
	process.chdir("./CodeBuilder/pluto_project")
	console.log(process.cwd())
	exec('make', (error, stdout, stderr) => {
                if (error) {
                  console.error(`error: ${error.message}`);
                  return;
                }
              
                if (stderr) {
                  console.error(`stderr: ${stderr}`);
                  return;
                }
              
                console.log(`stdout:\n${stdout}`);
		process.chdir(old_state)
              });
        }
	
        return "Success";
    })
}
// buildCode()
module.exports = {buildCode}
