const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    },
    profilepic: {
        type: String,
        required: true
    },
    color: {
        type: String,
    },
    colorContrast: {
        type: String,
    }
});

UserSchema.plugin(mongoosePaginate);

mongoose.model('User', UserSchema);