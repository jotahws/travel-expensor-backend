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
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    spliters: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User',
    },
    convertedAmount: {
        type: Number
    }
});

ExpenseSchema.plugin(mongoosePaginate);

mongoose.model('Expense', ExpenseSchema);