
const fs = require('fs')
const { exec } = require('child_process');
const  process = require('process');
var ncp = require('ncp').ncp;
const path = require('path')
ncp.limit = 16;
 

async function buildCode(code,id) {
    try {
      // Write the code to a file
      console.log(code)
      code = code.replace('"PlutoPilot.h"','"PlutoPilot.h"\n')
      let old_state = process.cwd()
      process.chdir("./CodeBuilder/pluto_project")
      let src = "src_temp"
      let destination = `src_${id}`;
      ncp(src, destination, async function (err) {
      if (err) {
        return console.error(err);
      }
      console.log('done!');
      let writetofile = path.join(process.cwd(),`src_${id}/main/PlutoPilot.cpp`);
      await fs.promises.writeFile(writetofile, code);
      
      console.log('Code file written successfully.');
      
      // Execute the make command
      await new Promise((resolve, reject) => {
        exec('make ID='+id, (error, stdout, stderr) => {
          if (error) {
            console.error(`Error executing make command: ${error}`);
            reject(error);
          } else {
            console.log(`Make command executed successfully.\n${stdout}`);
	          process.chdir(old_state);
            resolve();
          }
        });
      });
      });
      
  
      console.log('Build process completed.');
    } catch (err) {
      console.error('An error occurred:', err);
    }
}
// used to rebuild code
async function rebuildCode(id) {
  try {
    // Write the code to a file
    let old_state = process.cwd()
    process.chdir("./CodeBuilder/pluto_project")

    
    // Execute the make command
    await new Promise((resolve, reject) => {
      exec('make ID='+id, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error executing make command: ${error}`);
          reject(error);
        } else {
          console.log(`Make command executed successfully.\n${stdout}`);
          process.chdir(old_state);
          resolve();
        }
      });
    });
    

    console.log('Build process completed.');
  } catch (err) {
    console.error('An error occurred:', err);
  }
}
module.exports = {buildCode,rebuildCode}
//   Make sure to install the required packages by running npm install fs child_process before running the code. Adjust the file name and path according to your requirements.
  
  
  
  
