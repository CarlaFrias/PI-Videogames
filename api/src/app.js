//su responsab es crear el servidor y se lo paso al index.
//le defino los midddelware

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const cors = require("cors");

require('./db.js');



const server = express();

server.use(cors()); //que cualquier cte pueda conectarse con mi servidor

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());

//server.use(express.json()); es lo mismo q bodyParser. para que cuando mi body le pase la info a la bd la pase de json a objeto de js

1//LA REQ(peticion) PASA POR MORGAN (MIDELW) y luego pasa y realiza lo q tiene q hacer
server.use(morgan('dev'));  

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

2//AQUI LE INDICO A DONDE QUIERO QUE VAYA, a rutes
server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
