const express = require('express');
const router = express.Router();
const { Queue } = require('bullmq');
const {buildCode} = require("../CodeBuilder/makeExecute.js")
const {generate}  = require("../util/genBase64.js")
router.post("/",async function(req,res){
    let compile_id = generate();
    console.log(compile_id)
    const queue = new Queue('buildQueue');
    const jobs = await queue.add("build",{
      code:req.body.code,
      id:compile_id
    },{
      jobId:compile_id
    });
    console.log(jobs)
    let obj = {status:"Started Compiling",id:compile_id};
    res.send(obj);
})

module.exports = router