//searching for data in mongodb

use rishabhkart 

//This query will return all the objects with rating equal to 3.5

db.items.find({filter})
like 
db.items.find({rating :{$gte:3.5}})
db.items.find({rating: {$gt:3.5}, price:{$gt:4000}})
db.items.find({rating: {$lt:3.5}, price:{$gt:140000}})

// here the and is given by , 
// and the greater than and less than is given by gt and lt respectively

// In order to add or query in the find we use
db.items.find({$or:[{rating:{$lt:3.5}}, {price:{$gt: 114000}}]})

//in order to look for only one parameter

.db.items.find({rating:{gt:3.5}}, {rating:1})