[![Build Status](https://travis-ci.com/)](https://travis-ci.com/)

Travis: 
Heroku: 
PR: 

## 16-basic-authentication


in order to run this app:

 1. clone this repository


 2. in your root folder, create a .env file and set PORT, MONGODB_URI, and APP_SECRET values.  example: 

 ```
 PORT = 3000
 MONGODB_URI = 'mongodb://localhost/lab_16'
 APP_SECRET = 'itsasecret'

 ``` 

 3. First start up your mongo server, and then in your terminal, locate where you cloned this repository, and then type the command: `npm start`. This will begin the server.

 4. in your broswer go to  
`http://localhost:<YOURPORTHERE>`  

 5. Here, you can input fields to test the POST request. The post request will direct you to `http://localhost:<YOURPORTHERE>/post` and show the generated JSON Web Token (jwt) from the post

 6. To test get, use your choice of tools that makes requests to servers (httpie, postman). Without a header that has Basic Authorization, a 401 will be sent. if There is a header object with a Basic Authorizatoin Key, a status code of 200 will be returned with the jwt.


**This lab was built off of codefellows 16-basic-authentication demo code**