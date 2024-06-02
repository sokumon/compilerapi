const express = require('express');
const router = express.Router();
const {buildCode} = require("../CodeBuilder/makeExecute.js")
const process= require('process');
const fs = require('fs');
const path = require('path');
const { Queue } = require('bullmq');
router.all("/:id",async function(req,res){
	let id = req.params.id;
    try {
        const jobStatus = await getJobStatus(id);
        if (jobStatus === "completed") {
            res.send({
                status: "success",
                jobStatus: jobStatus
            });
        } else {
            res.status(404).send({
                status: "error",
                message: `No job found with id ${id}`
            });
        }
    } catch (error) {
        console.error('Error fetching job status:', error);
        res.status(500).send({
            status: "error",
            message: "An error occurred while fetching job status"
        });
    }

 

});	

async function getJobStatus(jobId) {
        const queue = new Queue('buildQueue');
        const job = await queue.getJob(jobId);
        if (job === null) {
          console.log('No job found with id ' + jobId);
          return null
        }else {
          const state = await job.getState();
          console.log('Job state is: ' + state);
          return state
        }
}
module.exports = router