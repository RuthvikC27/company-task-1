const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
        default: "New"
    },
    date: {
        type: Date,
        required: true,
        default: Date.now()
    }
})


const Loan = mongoose.model('loans', loanSchema);

module.exports = Loan;