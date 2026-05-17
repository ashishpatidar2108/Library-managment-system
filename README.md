# Library-managment-system
 
 This is a library managment API backend for the managment of user and the books 

 #Roots and the endpoints
  
##/user
  GET: Get all thhe list of users in the system 
  POST: create/ragister a new user


  ## /USER (ID)

  GET: get user by their ID
  PUT : updating a user by their ID
  DELETE : deleting a user by their ID (check if user still has an issued book)&& (is their any fine/penalty to be colected)


  ##/users/subscription-details/{id}
 GET: get a user subscription details by their ID
  >> date of subscription 
  >> valid till ?
  >> fine if any ?

## /Books 
GET : get all the books in system 
POST: add a new book to the system 

## /boos(id)
 GET : get a book by its ID
 PUT : Update a book by its ID
 DELETE :Delete a books by its ID 

## /BOOKS/ISSUED
GET: get all the issuee books 

##/book/issued/withFine
GET:  get all the issued books with their fine ammount


## Setup MongoDB Atlas
1) Create a file named `.env` in this folder.
2) Add your connection string as `DB_URL`.
3) Example is available in `.env.example`.

## subscription types

   >>BASIC (3 MONTHS)

   >>STANDARD (6 MONTHS)
   >>PRIMIUM (12 MONTHS)

>> if user missed the renewal date , then user should be collected with $100
>> if user missed subscription , then user is expected to pay $100
>> if user missed both ,then the collected amount should be $200

## commands
 npm init
 npm i exspress
 npm i nodemon --save-dev

 npm run dev

 TO restore node modules and pakage-lock.json file --> npm i

 npm install mongoose

 mongodb+srv://ashishpatidar2108:<db_password>@cluster0.bqmet08.mongodb.net/?appName=Cluster0

 OjwQWAKt5Qbeyyrf
 
 mongodb+srv://ashishpatidar2108:<db_password--> OjwQWAKt5Qbeyyrf >@cluster0.bqmet08.mongodb.net/?appName=Cluster0
