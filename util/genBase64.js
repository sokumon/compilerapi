const fs = require('fs')
const path = require('path')
function generate(){
    let compile_id = new Array(4);
    let final_string="";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_."
    for(let i=0;i<compile_id.length;i++){
        let random_num = Math.floor(Math.random()*characters.length)
        compile_id[i]=(characters[random_num])
        final_string=final_string + compile_id[i];
    }
    let pathofids = path.join(process.cwd(),'ids.txt')
    fs.readFile(pathofids, function (err, data) {
        if (err) throw err;
        if(data.includes(final_string)){
            generate()
        }else{
	    //Adding a line break
	    let file_content = final_string + "\n";
            fs.appendFile('ids.txt', file_content, (err) => {
                if (err) throw err;
                console.log('The "data to append" was appended to file!');
                return final_string
              });
        }
    });
    return final_string;
}
// generate()
module.exports = {generate}