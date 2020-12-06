const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Appointment', {useNewUrlParser: true , useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected to database");
});
 
var kittySchema = new mongoose.Schema({
  Name: String,
  Email_ID: String,
  Phone_Number: String,
  Doctor: String,
  Date_Fixed: Date,
  Time_Set: String

});

var Kitten = mongoose.model('datalist', kittySchema)

app.post('/appointment', (req, res) => {
    
   
    
    
    var appoint = new Kitten({ Name: `${req.body.myName}` ,
                              Email_ID:`${req.body.myEmail}` , 
                              Phone_Number:`${req.body.myNumber}` , 
                              Doctor:`${req.body.myDoctor}` , 
                              Date_Fixed : `${req.body.Mydate}` , 
                              Time_Set: `${req.body.myTime}`});

    appoint.save((err, appoint) => {
            if (err)
                return console.error(err);
            //appoint.speak();
            
        });
    
        //res.redirect("http://127.0.0.1:5500/frontone.html");
        
        res.sendFile(__dirname+"/frontone.html");
});
  


const port = 8080;

app.listen(port, () => {
  console.log("THE APPOINTMENT IS READY TO BE FIXED.");
});


/*
var express=require("express"); 
var bodyParser=require("body-parser"); 
  
const mongoose = require('mongoose'); 
mongoose.connect('mongodb://localhost:27017/appointment', {useNewUrlParser: true , useUnifiedTopology: true}); 
var db=mongoose.connection; 
db.on('error', console.log.bind(console, "connection error")); 
db.once('open', function(callback){ 
    console.log("connection succeeded"); 
}) 
  
var app=express() 
  
  
app.use(bodyParser.json()); 
app.use(express.static('public')); 
app.use(bodyParser.urlencoded({ 
    extended: true

})); 
  
app.post('/', function(req,res){ 
    var Name = req.body.myName; 
    var Email_ID = req.body.myEmail; 
    var Number = req.body.myNumber; 
    var Doctor = req.body.myDoctor;
    var Date_Fixed = req.body.myDate;
    var Time_Set = req.body.myTime; 
  
    var data = { 
        "Name": Name, 
        "Email_ID":Email_ID, 
        "Number":Number, 
        "Doctor":Doctor,
        "Date_Fixed":Date_Fixed,
        "Time_Set":Time_Set,
    } 
    db.collection('details').insertOne(data,function(err, data){ 
      if (err) throw err; 
      console.log("Record inserted Successfully"); 
            
  }); 
})
  
  
app.get('/',function(req,res){ 
res.set({ 
    'Access-control-Allow-Origin': '*'
    }); 
return res.redirect(__dirname+'/frontone.html'); 
}).listen(3000) 
  
  
console.log("server listening at port 3000"); 



*/
