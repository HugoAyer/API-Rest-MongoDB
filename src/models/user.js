const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const usersCompanies = mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        required: true
    },
    type: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true
    }
});

//module.exports = mongoose.model('users', userSchema);
module.exports = mongoose.model('users', usersCompanies);
//Esto se hace para crear el modelo de datos y exportarlo