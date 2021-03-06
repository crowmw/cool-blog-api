const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
    email: { type: String, unique: true, trim: true, lowercase: true},
    password: { type: String },
},
{
    timestamps: true
});

userSchema.pre('save', function(next) {
    const user = this;
    bcrypt.genSalt(10, function(err, salt) {
        if(err) {return next(err); }

        bcrypt.hash(user.password, salt, null, function(err, hash){
            if(err) {return next(err);}

            user.password = hash;
            next();
        })
    })
})

const modelClass = mongoose.model('user', userSchema);

module.exports = modelClass;