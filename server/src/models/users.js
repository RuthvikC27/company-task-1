const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const hashPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
})

userSchema.pre('save', async function(done){
    if(this.isModified('password')){
        const password = this.get('password');
        const hashed = hashPassword(password);
        this.set('password', hashed);
    }
    done();
})

const Users = mongoose.model('Users', userSchema);

module.exports = Users;