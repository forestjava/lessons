// server.mjs
import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';

const server = createServer((req, res) => {
  const catalog = readFileSync('catalog.json');

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(catalog);
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`