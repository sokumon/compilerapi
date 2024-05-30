const express = require('express');
const router = express.Router();
const {buildCode} = require("../CodeBuilder/makeExecute.js")
const {generate}  = require("../util/genBase64.js")
router.post("/",function(req,res){
    let compile_id = generate();
    console.log(req.body.code)
    buildCode(req.body.code,compile_id)
    .then(() => {
      console.log('Code build completed.');
      let obj = {status:"done",id:compile_id};
      res.send(obj);
    })
    .catch((err) => {
      console.error('Code build failed:', err);
    });
    
})

module.exports = router