console.log('May Node be with you')
const express = require('express');
const app = express();
app.listen(3000,  function(){
    console.log('listneing on 3000')
})
app.get('/', (req, res) => {
    res.sendFile('/Users/jaggt/Desktop/repositories/short-projects/index.html')
  })