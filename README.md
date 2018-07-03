[![Build Status](https://travis-ci.com/jozue06/16-basic-authentication.svg?branch=josh)](https://travis-ci.com/jozue06/16-basic-authentication)

Heroku: https://josh-16.herokuapp.com/
PR: https://github.com/jozue06/16-basic-authentication/pull/2

## 16-basic-authentication


To instal/download and run this app:

 1. Clone this repository


 2. In your root folder, create a `.env` file and set `PORT` , `MONGODB_URI`, and `SECRET` values.  

 3. Then start mongod and your mongo, and then in your terminal, locate where you cloned this repository, and then type the command: `npm start`. This will start the server.

 4. in your broswer go to  
`http://localhost:<YOUR ENV PORT>`  

 5. At this site you can use the input fields to test the `POST` request.

 6. To test a `GET`, use your choice of tools that makes requests to servers (httpie, postman). Without a header that has Basic Authorization, a 401 will be sent. if There is a header object with a Basic Authorizatoin Key, a status code of 200 will be returned with the jwt.


**This lab used codefellows 16-basic-authentication demo code, with help from Max, Khoa & Anna**