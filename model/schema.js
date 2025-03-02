const mongoose = require('mongoose');
const { type } = require('os');
mongoose.pluralize(null);


const userModel = new mongoose.Schema({
    name: {
        type: String,

    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    designation: {
        type: String,

    },
    department: {
        type: String,

    },
    salary: {
        type: Number,
        require: [true, 'salary is required']
    }

}, { timestamps: true }
);
module.exports = mongoose.model('employee', userModel, "employee");
