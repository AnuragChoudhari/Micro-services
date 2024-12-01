const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.get("/",(req,res)=>{
    for(let i=0;i<10000000;i++){

    }
    
    res.send("Hello world");
})

app.listen(3000,()=>{
    console.log("Listening at port 3000");
})