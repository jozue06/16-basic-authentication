'use strict';

import express from 'express';
const authRouter = express.Router();

import User from './model.js';
import auth from './middleware.js';
import errorBadReq from '../middleware/errorBadReq.js';

authRouter.post('/api/signup', (req, res, next) => {
  if(!Object.keys(req.body).length) {
    errorBadReq(res);
  }
  let user = new User(req.body);
  user.save()
    .then( user => { 
      res.send(user.generateToken());
    })
    .catch(next);
});

authRouter.get('/api/signin', auth, (req, res, next) => {
  res.cookie('token!', req.token);
  res.send('Hi');
});

export default authRouter;