const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, required: true, unique: true, trim: true, lowercase: true},
    password: { type: String, required: true },
    username: { type: String, unique: true, trim: true}
},
{
    timestamps: true
});

const modelClass = mongoose.model('user', userSchema);

module.exports = modelClass;