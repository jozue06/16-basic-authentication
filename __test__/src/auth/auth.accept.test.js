'use strict';
import {
  Mockgoose,
} from 'mockgoose';
import mongoose from 'mongoose';
import supertest from 'supertest';
import {server} from '../../../src/app.js';
const mockRequest = supertest(server);
// const mockRequest = require('supertest')(server);
const mockgoose = new Mockgoose(mongoose);

afterAll( () => {
  mongoose.connection.close();
});

describe('Authentication Server', () => {

  beforeAll( (done) => {
    mockgoose.prepareStorage().then(()=>{
      mongoose.connect('mongodb://localhost:27017/lab-18-test').then(()=>{
        done();
      });
    });
  });

  afterEach((done)=>{
    mockgoose.helper.reset().then(done);
  });

  // Note that these will actually be using the mocked models
  // from the mock version of require-dir.  IOW .. no need to spin up
  // a mongo server to run these tests. (we don't want to test mongo anyway!)

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