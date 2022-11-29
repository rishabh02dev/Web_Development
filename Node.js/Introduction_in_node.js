console.log("hello world");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3800;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('content-Type' , 'text/html');
    res.end('hello world this is rohan das nice to meet  lele ram ram chorrii lele lele you');
});

server.listen(port , hostname , () => {
    console.log(`server running at http://${hostname}:${port}/`);

});  
