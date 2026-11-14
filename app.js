const http = require('http');
http.createServer((req, res) => {
  if (req.url === '/health') { res.end('ok'); return; }
  res.end('Hello from container\n');
}).listen(3000, '0.0.0.0');
console.log('Server started on port 3000');