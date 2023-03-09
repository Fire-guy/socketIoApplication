const express=require('express')
var app=express();
const port=process.env.PORT || 3000;

app.listen(port,()=>{
    console.log('Server '+port+' is up and running. ')
});