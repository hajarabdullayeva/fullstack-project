const express = require("express");
const mongoose = require("mongoose");
const {Schema} = mongoose;
const app = express();
const bodyParser = require('body-parser');
const {body, validationResult} = require('express-validator');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// mongoose.connect("mongodb+srv://user_cagatay:qqugZTCLorQGEavT@cluster0.chvjkzt.mongodb.net/codeacademydb", { useNewUrlParser: true });

app.listen(8080, () => {
  console.log('Server is running!!');
})
