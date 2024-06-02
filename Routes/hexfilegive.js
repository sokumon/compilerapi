const express = require('express');
const router = express.Router();
const {buildCode} = require("../CodeBuilder/makeExecute.js")
const process= require('process');
const fs = require('fs');
const path = require('path');
const { rebuildCode } = require('../CodeBuilder/makeExecute.js');
var root_path = require("")
router.all("/:id",function(req,res){

	console.log(process.cwd())
	let id = req.params.id;
	let dir_of_objs= "../compilerapi/CodeBuilder/pluto_project/obj/"
	console.log(id)
	let filename = `PB_${id}_PLUTOX.hex`
	if(checkFilename(filename)){
		res.sendFile(filename,{root:"/home/sokumon/compilerapi/CodeBuilder/pluto_project/obj/"});
	}else{
		rebuildCode(id).then(()=>{
			res.sendFile(filename,{root:"/home/sokumon/compilerapi/CodeBuilder/pluto_project/obj/"});
		})
	}


	});	

function checkFilename(filename_needed){
	let dir_of_objs= "../compilerapi/CodeBuilder/pluto_project/obj/"
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