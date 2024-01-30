const express = require('express')

const app = express();

app.get('/',(req,res)=>{
   return res.send('HELLO WORLD')
})

app.listen(8000, ()=>{
    console.log('server is listening at port 8000');
})