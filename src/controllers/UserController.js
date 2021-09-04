const mongoose = require("mongoose");

const User = mongoose.model("User");

module.exports = {
    async index(req, res) {
        console.log('Index user start');
        const { page = 1 } = req.query;
        try {
            const users = await User.find();
            return res.json(users)
        } catch (err) {
            return handleErrors(req, res, err)
        }
    },

    async store(req, res) {
        console.log('Store user start');
        try {
            const user = await User.create(req.body);
            return res.json(user);
        } catch (err) {
            return handleErrors(req, res, err)
        }
    },

    async update(req, res) {
        console.log('Update user start');
        try {
            const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
            return res.json(user);
        } catch (err) {
            return handleErrors(req, res, err)
        }
    },

    async destroy(req, res) {
        console.log('Destroy user start');
        try {
            await User.findByIdAndRemove(req.params.id);
            return res.send();
        } catch (err) {
            return handleErrors(req, res, err)
        }
    }
};

function handleErrors(req, res, err) {
    console.log('Error CRUD User: ' + err);
    res.status(400);
    return res.json({
        success: false,
        message: err,
        data: null
    })
}