const mongoose = require('mongoose');
const Schema = mongoose.Shema

const postSchema = new Schema({
    title: { type: String, unique:true, required: true},
    text: { type: String, required: true },
    tags: { type: Object, required: true }
},
{
    timestamps: true
});

const modelClass = mongoose.model('post', postSchema);

module.exports = modelClass;