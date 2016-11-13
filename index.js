const express = require('express');
const http = require('http');
const bodyParser = require('body-parser'); //use to parse req
const morgan = require('morgan'); //logging framework
const router = require('./router');

//App setup
const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*'}));
router(app);

//Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on: ', port);