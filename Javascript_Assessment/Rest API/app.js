var express = require('express');
var app= express();

app.get('/',function(req,res){
    res.send('welcome to server')
});

app.listen('3000',function(){
    console.log("server running in 3000");
})

var UserDetails=require('./User.json');
    app.get("/showDetails",function(req,res){
           res.send(UserDetails);
           })