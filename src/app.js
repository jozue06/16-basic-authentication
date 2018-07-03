'use strict';

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import authRouter from './auth/router.js';
import publicRoute from './api/publicApi.js';

import errorHandler from './middleware/error.js';
import notFound from './middleware/404.js';
import badReq from './middleware/errorBadReq.js';

let app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json()); 
app.use(express.urlencoded({extended:true})); 

app.use(authRouter);
app.use(publicRoute);

app.use(notFound);
app.use(errorHandler);
app.use(badReq);

let server = false;


module.exports = {
  start: (port) => {
    if(!server) {
      app.listen(port, (err) => {
        if(err) {throw err;}
        console.log('LISTENING ON PORT: ', port);
      });
    } else {
      console.log('Server is already running');
    }
  },
  stop: () => {
    app.close( () => {
      console.log('Server has stopped');
    });
  },
  server: app,
};