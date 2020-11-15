var hhtp = require('http');

HTMLOutputElement.createServer(function(req,res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World JS Guillem Curcó');
}).listern(8080);