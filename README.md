## BookCollection



<img width="750" height="400" src= "https://user-images.githubusercontent.com/8718430/96022756-4e7da700-0e8c-11eb-95c6-52c24957c58d.png">

BookCollection is a book review site which offers insightful book reviews.<br>
*This project refers to Youtube Clone Coding on Nomad Coder*

## 1. Project URL
 
https://bookcollection1.herokuapp.com/


## 2. Requirements

You need a Chrome browser to take full advantage of it.

## 3. Installation
From your project directory, run the following:

1. $ npm install<br>
1. $ npm run dev:server<br>
1. visit http://localhost:4000<br>     


## 4. Features
* Read book reviews
* Write book reviews
* Select favorite books

## 5. Client-Side Stack 
* Using modern Javascript
* HTML, CSS
* Jquery

## 6. Server-Side Stack
* Server-side platform based on JavaScript engine (V8 engine) Node.js
* Using es5+ Javascript with Babel
* Using express, simple and flexible Node.js web application framework
* Heroku

## 7. Test
* Using Postman for testing API request and response  
* Using k6 for API load testing 


## 8. API Specification 


### 1) Membership Registration Specification


1. API Basic Information 
    
    Method | Request URL | Printed Format | Description
    ------|------|-----|----- 
    POST|https://www.bookcollection.co.kr/join|json| Membership Registration
    


2. Request Variable 

    Request Variable Name | Type | Required | Description
    ------|------|-----|-----
    Email|String|Y| Email as an ID 
    Password|String|Y| Password 
     

3. Printed Result

- When an user calls for membership registration API,   
  an id of an user object is printed out, if an user request succeeds,  
  but an error message is printed out, if an user request fails.  

4. Error Code

   HTTP Response Code | Error Message
   ------|------
   409|  A request conflict with current state of the target resource.


### 2) Log-in Specification 


1. API Basic Information 
    
    Method | Request URL | Printed Format | Description
    ------|------|-----|----- 
    POST|https://www.bookcollection.co.kr/login|json| Log-in
    


2. Request Variable 

    Request Variable Name | Type | Required | Description
    ------|------|-----|-----
    Email|String|Y| Email as an ID 
    Password|String|Y| Password 
     

3. Printed Result

- When an user calls for Log-In API,   
  a success message is printed out, if an user request succeeds,  
  but an error message is printed out, if an user request fails.  

4. Error Code

   HTTP Response Code | Error Message
   ------|------|
   409|  A request conflict with current state of the target resource.
   
   
   

### 3) Star-Rating Specification 


1. API Basic Information 
    
    Method | Request URL | Printed Format | Description
    ------|------|-----|----- 
    POST|https://www.bookcollection.co.kr/intro|json| Star-Rating 
    


2. Request Variable 

    Request Variable Name | Type | Required | Description
    ------|------|-----|-----
    bookName|String|Y| Name of the book
    author|String|Y| Author of the book 
    starPoint|Number|Y| Star point rated by an user 
     

3. Printed Result

- When an user search for a book, and make a star rate,  
  an id of a book is printed out if an user request succeeds.
  
4. Error Code
   


### 4) Book Review Creation Specification 


1. API Basic Information 
    
    Method | Request URL | Printed Format | Description
    ------|------|-----|----- 
    POST|https://www.bookcollection.co.kr/bookpage|json| Book Review Creation 
    

2. Request Variable 

    Request Variable Name | Type | Required | Description
    ------|------|-----|-----
    bookReview|String|Y| review text of the book
     

3. Printed Result

- When an user makes a new book review,  
  an id of a review is printed out if an user request succeeds.
  
4. Error Code
   




## 9. k6 API Loading Test Results

  Metric name | Definition
   ------|------
   http_req_duration	 | It's equal to http_req_sending + http_req_waiting + http_req_receiving.<br> (i.e. how long did the remote server take to process the request and respond,<br> without the initial DNS lookup/connection times). 
   http_reqs | How many HTTP requests has k6 generated, in total.
                      


### 1. GET Request to '/'

   Scenario | VUs | Duration | 
   ------|------|----- 
   1 |2000| 30s
    
   Metric name | avg| min | med | max |
   ------|------|-----|-----|-----
   http_req_duration |  5.79s | 232.13ms | 5.53s | 13.14s
     
   Metric name | TPS | 
   ------|------|
   http_reqs | 29.256048/s  
   

### 2. POST Request to '/join'

   Scenario | VUs | Duration | 
   ------|------|----- 
   1 |2000| 30s
    

   Metric name | avg| min | med | max |
   ------|------|-----|-----|-----
   http_req_duration |  38.78s | 30.21s | 40.79s | 45.04s
     
   Metric name | TPS | 
   ------|------|
   http_reqs | 9.38196/s
   
   

## 10. Data Modelling


  
  

