//Inserting data in mongodb

use rishabhkart 
db.items.insertOne({name:"Samsung 30-s", price:22000 , rating : 4.5, quantity:223 , sold : 12 })
db.items.insertMany([{name:"Samsung 30-s", price:22000 , rating : 4.5, quantity:223 , sold : 12 }, {name:"iphone13" , price:120000 , rating:4.2 , quantity:133 , sold:1200}, {name:"Samsung 30-s", price:22000 , rating : 4.5, quantity:223 , sold : 12 } ] )