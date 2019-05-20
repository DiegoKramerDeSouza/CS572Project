const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({
    email: String,
    token:String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Subscription ', SubscriptionSchema);
