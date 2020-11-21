const fs = require('fs');
const http = require('http');

const requestListener = function (req, res) {
  if (req.url === '/.well-known/did.json'){
    res.writeHead(200);
    return res.end(JSON.stringify(require('./.well-known/did.json'), null, 2));
  }
  if (req.url === '/'){
    res.writeHead(200);
    return res.end(fs.readFileSync('index.html'));
  }
  res.writeHead(400);
  res.end('400 Bad Request');
}

const server = http.createServer(requestListener);
server.listen(80);