const http = require("http");
const pid = process.pid;
require('pm2');
const puppeteer = require("puppeteer");
const randomUseragent = require("random-useragent");
const { Worker } = require('worker_threads');

const server = http.createServer((req, res) => {
    res.end(`Hello from Node.js Pid: ${pid}`);
    for (let i = 0; i < 32; i++) {
        const worker = new Worker('./worker.js')
    }
}).listen(8080, () => {
    console.log(`Server started. Pid: ${pid}`);
});

