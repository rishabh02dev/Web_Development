// use rishabhkart 
// show dbs
// how to delete some data from the mongodb database
db.items.deleteOne({price:22000})
// it will delete the matching entry and will delete the first entry in case of multi document match

// another command

db.items.deleteMany({price:129000 })
