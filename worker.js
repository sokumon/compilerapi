const { Worker } = require('bullmq');
const { buildCode } = require('./CodeBuilder/makeExecute');

const worker = new Worker('buildQueue', async job => {
  console.log(job.data)
  await buildCode(job.data.code,job.data.id);
}, {
  connection: {
    host: '127.0.0.1',
    port: 6379
  }
});

worker.on('completed', (job) => {
  console.log(`Job ${job.id} completed successfully.`);
});

worker.on('failed', (job, err) => {
  console.log(`Job ${job.id} failed with error ${err.message}.`);
});