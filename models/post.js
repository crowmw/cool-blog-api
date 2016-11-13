const mongoose = require('mongoose');
const Schema = mongoose.Schema

const postSchema = new Schema({
    title: { type: String, unique:true },
    text: { type: String},
    tags: { type: Object}
},
{
    timestamps: true
});

const modelClass = mongoose.model('post', postSchema);

module.exports = modelClass;