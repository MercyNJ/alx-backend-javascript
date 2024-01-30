const http = require('http');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!\n');
});

const PORT = 1245;
const host = '127.0.0.1';
app.listen(PORT, host, () => {
});

module.exports = app;
