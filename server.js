// Import the 'http' module to create a server const http = require('http'); // Create a server that responds with 'Hello, World!' const server = http.createServer((req, res) => { res.writeHead(200, { 'Content-Type': 'text/plain' }); res.end('Hello, World!\n'); }); // Make the server listen on port 3000 server.listen(3000, () => { console.log('Server running at http://localhost:3000/'); });
