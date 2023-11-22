const express = require("express");
const userSchema = require("../models/user"); //Importo el modelo de datos para users

const router = express.Router();

//Create user
router.post('/users',(req, res) => {
    const user = userSchema(req.body); //Con esto, la función recibirá un objeto mediante el Body del request
    user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

//get all users
router.get('/users',(req, res) => {
    userSchema //Con esto, la función recibirá un objeto mediante el Body del request    
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

// get a user
router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema //Con esto, la función recibirá un objeto mediante el Body del request    
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

// update a user
router.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const {name, age, email } = req.body;
    userSchema //Con esto, la función recibirá un objeto mediante el Body del request    
    .updateOne({_id: id},{ $set: { name, age, email} })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

// delete a user
router.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    userSchema //Con esto, la función recibirá un objeto mediante el Body del request    
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});

module.exports = router;