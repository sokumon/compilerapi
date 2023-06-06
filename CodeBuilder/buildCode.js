const { exec } = require("child_process").exec;
let os = require("os");
let fs = require('fs')
let currentOS = os.platform()
function buildCode(code){
    fs.writeFile('./CodeBuilder/pluto_project/src/main/PlutoPilot.cpp', code, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
        if(os.platform == "win32"){
            console.log("invalid")
        }else{
            exec('make ./CodeBuilder/pluto_project/', (error, stdout, stderr) => {
                if (error) {
                  console.error(`error: ${error.message}`);
                  return;
                }
              
                if (stderr) {
                  console.error(`stderr: ${stderr}`);
                  return;
                }
              
                console.log(`stdout:\n${stdout}`);
              });
        }
        return "Success";
    })
}
// buildCode()
module.exports = {buildCode}