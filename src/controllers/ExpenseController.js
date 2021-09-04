const mongoose = require("mongoose");

const Expense = mongoose.model("Expense");

module.exports = {
    async index(req, res) {
        console.log('index start');
        const { page = 1 } = req.query;
        try {
            const expenses = await Expense.paginate({}, { page, limit: 5 });
            return res.json(expenses)
        } catch (err) {
            return handleErrors(req, res, err)
        }
    },

    async show(req, res) {
        console.log('show start');
        try {
            const expense = await Expense.findById(req.params.id);
            return res.json(expense);
        } catch (err) {
            return handleErrors(req, res, err)
        }
    },

    async store(req, res) {
        console.log('store start');
        try {
            const expense = await Expense.create(req.body);
            return res.json(expense);
        } catch (err) {
            return handleErrors(req, res, err)
        }
    },

    async update(req, res) {
        console.log('update start');
        try {
            const expense = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true })
            return res.json(expense);
        } catch (err) {
            return handleErrors(req, res, err)
        }
    },

    async destroy(req, res) {
        console.log('destroy start');
        try {
            await Expense.findByIdAndRemove(req.params.id);
            return res.send();
        } catch (err) {
            return handleErrors(req, res, err)
        }
    }
};

function handleErrors(req, res, err) {
    return res.json({
        success: false,
        message: err,
        data: null
    })
}