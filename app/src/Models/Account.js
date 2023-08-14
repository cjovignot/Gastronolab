const mongoose = require('mongoose');

const { Schema } = mongoose;

const AccountSchema = new Schema({
    website: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
});

const Account = mongoose.models.Account || mongoose.model('Account', AccountSchema);

module.exports = Account;
