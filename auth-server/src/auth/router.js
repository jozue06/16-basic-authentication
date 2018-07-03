'use strict';

import express from 'express';
const authRouter = express.Router();

import User from './model.js';
import auth from './middleware.js';
import errorBadReq from '../middleware/errorBadReq.js';

// Generally, these will send a Token Cookie and do a redirect.
// For now, just spew out the token to prove we're ok.

authRouter.post('/api/signup', (req, res, next) => {
  if(!Object.keys(req.body).length) {
    errorBadReq(res);
  }

  let user = new User(req.body);
  console.log('USER after HASHING:1 ', user);
  user.save()
    .then( user => { 
      console.log('USER after HASHING:2 ----> ', user);
      res.send(user.generateToken());
      console.log('USER after token:3 ----> ', user);
    })
    .catch(next);
});




authRouter.get('/api/signin', auth, (req, res, next) => {
  console.log('wassauupppp');
  res.cookie('Token', req.token);
  res.send('Hi');
});

export default authRouter;