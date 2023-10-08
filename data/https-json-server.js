import jsonServer from 'json-server';
import https from 'https';
import path from 'path';
import fs from 'fs';

const server = jsonServer.create();

const keyFile = path.join(__dirname, 'server.key');
const certFile = path.join(__dirname, 'server.cert');

https
  .createServer(
    {
      key: fs.readFileSync(keyFile),
      cert: fs.readFileSync(certFile),
    },
    server
  )
  .listen(3000, () => {
    console.log(
      'Go to https://localhost:3000/'
    );
  });