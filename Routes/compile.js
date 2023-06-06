const express = require('express');
const router = express.Router();
const {buildCode} = require("../CodeBuilder/buildCode.js")

router.post("/",function(req,res){
    console.log(req.body.code)
    if(buildCode('code') == "success"){
        res.sendFile("Experience_PLUTOX.hex",{root:"../CompilerAPi/CodeBuilder/pluto_project/obj/"})
    }
    
})

module.exports = router