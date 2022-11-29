const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('index.html')
const about = fs.readFileSync('./about.html')
const services = fs.readFileSync('./services.html')
const contact = fs.readFileSync('./contact.html')


const server = http.createServer((req, res)=>
{
    console.log(req.url);
    url = req.url;

    res.statuscode = 200;
    res.setHeader('content-type' , 'text/html');
    if (url = '/'){
        res.end(home);
    }
    else if (url = '/ghar'){
        res.end(ghar)
    }
    else if (url = '/nashtaa'){
        res.end('nashtaa')
    }
    else if (url = '/paani'){
        res.end(paani)
    }
    else if (url = '/khana peena'){
        res.end(khana_peena)
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
});

server.listen(port , hostname, () =>{
    console.log(`Server running at http://${hostname}:${port}/`);

});