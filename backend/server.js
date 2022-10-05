const express = require("express");
const mongoose = require("mongoose");
const {Schema} = mongoose;
const app = express();
const bodyParser = require('body-parser');
const {body, validationResult} = require('express-validator');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

mongoose.connect("mongodb+srv://hajar:hecer123@cluster0.3zie6iq.mongodb.net/test", {useNewUrlParser: true});

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  birthday: Date,
  email: String,
})

const Users = mongoose.model('Users', userSchema);

app.post('/api/users',
  body('First name').notEmpty().withMessage('First name is required'),
  body('Last name').notEmpty().withMessage('Last name is required'),
  body('Birthday').notEmpty().withMessage('Birthday is required'),
  body('Email').notEmpty().withMessage('Email is required')
  , (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({errors: errors.array()});
    }

    let users = new Users({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      birthday: req.body.birthday,
      email: req.body.email
    });

    users.save();

    res.send('Success!!');
  })

app.get('/api/users', (req, res) => {
  Users.find({}, (err, docs) => {

    if (!err) {
      res.json(docs)
    } else {
      res.status(500).json(err);
    }
  })
})

app.get('/api/users/:id', (req, res) => {
  let id = req.params.id;
  Users.findById(id, (err, doc) => {
    if (!err) {
      if (doc)
        res.json(doc);
      else
        res.status(404).json({"message": "Not found!"})
    } else {
      res.status(500).json(err)
    }
  })
})

app.delete('/api/users/:id', (req, res) => {
  let id = req.params.id;
  Users.findByIdAndDelete(id, (err) => {
    if (!err)
      res.json({'messagae': 'Success!'})
    else
      res.status(500).json(err)
  })

})

app.listen(8080, () => {
  console.log('Server is running!!');
})
