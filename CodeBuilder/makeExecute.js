
const fs = require('fs')
const { exec } = require('child_process');
const  process = require('process');
var ncp = require('ncp').ncp;
const path = require('path')
const CONFIG = require('../config')
ncp.limit = 16;
 

async function buildCode(code, id) {
  return new Promise(async (resolve, reject) => {
      try {
          // Write the code to a file
          console.log(code);
          code = code.replace('"PlutoPilot.h"', '"PlutoPilot.h"\n');
          // let old_state = process.cwd();
          console.log(CONFIG.ID_FILE_PATH);
          let pluto_path = path.join(CONFIG.ID_FILE_PATH,"/CodeBuilder/pluto_project");
          // process.chdir("./CodeBuilder/pluto_project");
          let src = path.join(pluto_path,"src_temp");
          let destination = path.join(pluto_path,`src_${id}`);
          ncp(src, destination, async function (err) {
              if (err) {
                  reject(err);
              }
              console.log('done!');
              let writetofile = path.join(pluto_path, `src_${id}/main/PlutoPilot.cpp`);
              await fs.promises.writeFile(writetofile, code);

              console.log('Code file written successfully.');

              let make_command  =  `make -C ${pluto_path} ID=${id}`;

              // Execute the make command
              exec(make_command, (error, stdout, stderr) => {
                  if (error) {
                      console.error(`Error executing make command: ${error}`);
                      reject(error);
                  } else {
                      console.log(`Make command executed successfully.\n${stdout}`);
                      console.log('Build process completed.');
                      resolve(); // Resolve here after make command is done
                  }
              });
          });
      } catch (err) {
          reject(err);
      }
  });
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
  
  
  
  
