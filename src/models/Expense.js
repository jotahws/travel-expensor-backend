const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ExpenseSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
    },
    txid: {
        type: String,
        required: true,
    },
    isInvoice: {
        type: Boolean,
    },
    description: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    user: {
        type: String,
        required: true
    },
    convertedAmount: {
        type: Number
    }
});

ExpenseSchema.plugin(mongoosePaginate);

mongoose.model('Expense', ExpenseSchema);