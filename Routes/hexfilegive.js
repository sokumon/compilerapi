const express = require('express');
const router = express.Router();
const {buildCode} = require("../CodeBuilder/makeExecute.js")
const process= require('process');
const fs = require('fs');
const path = require('path');
const { rebuildCode } = require('../CodeBuilder/makeExecute.js');
var root_path = require("../config.js")

let dir_of_objs= path.join(root_path.ID_FILE_PATH,"CodeBuilder/pluto_project/obj/")
router.all("/:id",function(req,res){

	console.log(process.cwd())
	let id = req.params.id;
	
	console.log(id)
	let filename = `PB_${id}_PLUTOX.hex`
	console.log(dir_of_objs)
	let file_path = path.join(dir_of_objs,filename)
	res.download(file_path)


	});	

function checkFilename(filename_needed){
	fs.readdir(dir_of_objs, (err, files) => {
		for (const file of files) {
			console.log(file,file.includes(filename_needed))
			if(file.includes(filename_needed)){
				return true;
			}else{
				return false;
			}
		}
	})

}
module.exports = router