
// import fs from 'fs';
import exp from 'express'
import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

 dotenv.config()
 
 var app = exp()

app.use(exp.json())


//mongodb+srv://santhosh:santhosh1234@cluster0.rsesp.mongodb.net
//const mongoUrl ="mongodb://localhost";
const mongoUrl ="mongodb+srv://santhosh:santhosh1234@cluster0.rsesp.mongodb.net";
// const mongoUrl = process.env.mongoUrl;


 async function connection(){
    var client = new MongoClient(mongoUrl)
   await client.connect()
   console.log("connection is ready")
   return client
} 
   var client = await connection()
   app.get('/',async function(req,res) {
        let result = await client.db("movie")
        .collection("mov")
        .find({})
        .toArray()
        res.send(result)
     
})
app.get('/movie/:id',async function(req,res) {
   var {id}=req.params
   let result = await client.db("movie")
   .collection("mov")
   .findOne({id:id})
    res.send(result)

})
app.delete('/movie/:id',async function(req,res) {
   var {id}=req.params
   let result = await client.db("movie")
   .collection("mov")
   .deleteOne({id:id})
    result.deletedCount > 0 ? res.send(result): res.status(404).send("movie not found")

})
app.put('/movie/:id',async function(req,res) {
   let data =req.body
   var {id} = req.params 
   let result = await client.db("movie")
   .collection("mov")
   .updateOne({id:id} ,{$set:data})
    res.send(result)

})

app.post('/mo',async function (req,res){
   var data = req.body;
   console.log(data);
   let result= await client.db("movie").collection("mov").insertMany(data);
   res.send(result)
   console.log(result)

})

app.listen(4000)
