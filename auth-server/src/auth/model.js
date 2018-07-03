'use strict';

import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
});

// Before we save, hash the plain text password
userSchema.pre('save', function(next) {
  console.log('MODEL stuffsfsfsf pasword111 --->>>>', this.password);
  bcrypt.hash(this.password,10)
 
    .then(hashedPassword => {
      console.log('MODEL stuffsfsfsf hashed pass2222 --->>>>', hashedPassword);
      // Update the password for this instance to the hashed version
      this.password = hashedPassword;
      // Continue on (actually do the save)
      next();
      console.log('MODEL stuffsfsfsf 333 --->>>>');
    })
    // In the event of an error, do not save, but throw it instead
    .catch( error => {throw error;} );
});

// If we got a user/password, compare them to the hashed password
// If we got a token, validate it and then pull the user id
// In both cases, return the user instance or an error

userSchema.statics.authenticate = function(auth) {
  console.log('MODEL asdfsdaf  44? ----> ');
  let query = {username:auth.username};
  return this.findOne(query)
    .then(user => user && user.comparePassword(auth.password))
    .catch(error => error);
};

// Compare a plain text password against the hashed one we have saved
userSchema.methods.comparePassword = function(password) {
  console.log('MODEL HASHING:asdfsdaf ---->asdfasdf ');
  return bcrypt.compare(password, this.password)
    .then(valid => valid ? this : null);
};

// Generate a JWT from the user id and a secret
userSchema.methods.generateToken = function() {
  console.log('in the SAVEASVE -->');
  return jwt.sign( {id:this._id}, process.env.APP_SECRET || 'changeit');
};

export default mongoose.model('users', userSchema);