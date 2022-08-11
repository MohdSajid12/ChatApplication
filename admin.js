const express = require("express")

const rounter = express.Router();


rounter.get('/add-product', (req, res, next) => {
    res.send(`<form action ="/" onsubmit ="document.getElementById('username').value = localStorage.getItem('username')" method ="POST">
    <input id ="message" name ="message" type ="text" placeholder = "message">
    <input type ="hidden" name ="username" id="username"><button type ="submit> SEND </button></form>`);
  });
  
  rounter.post('/', (req, res, next) => {
      data.push(`{${req.body.username} : ${req.body.message}}`)
      data.push(`${req.body.username} : ${req.body.message}`)
      console.log(data);
      res.redirect('/');
  });

  
  module.exports = rounter;
