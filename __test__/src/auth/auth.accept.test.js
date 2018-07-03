'use strict';

import {
  Mockgoose,
} from 'mockgoose';
import mongoose from 'mongoose';
import supertest from 'supertest';
import {server} from '../../../src/app.js';
const mockRequest = supertest(server);
const mockgoose = new Mockgoose(mongoose);

afterAll( () => {
  mongoose.connection.close();
});

describe('Authentication Server', () => {

  beforeAll( (done) => {
    mockgoose.prepareStorage().then(()=>{
      mongoose.connect('mongodb://localhost:27017/lab').then(()=>{
        done();
      });
    });
  });

  afterEach((done)=>{
    mockgoose.helper.reset().then(done);
  });

  it('gets a 401 on a bad login', () => {
    return mockRequest.get('/api/signin')
      .then(response => {
      })
      .catch(response => {
        expect(response.status).toEqual(401);
      });
  });

  it('gets a 401 on a bad login', () => {
    return mockRequest.get('/api/signin')
      .auth('foo','bar')
      .then(response => {
      })
      .catch(response => {
        expect(response.status).toEqual(401);
      });
  });


  it('signin gets a 200 on a good login', () => {
    let newUser = {
      username: 'js',
      password: 'test',
    };

    return mockRequest.post('/api/signup')
      .send(newUser)
      .then(() => {
        return mockRequest.get('/api/signin')
          .auth('js', 'test')
          .then(res => {
            expect(res.statusCode).toEqual(200);
          });
      });
  });
});