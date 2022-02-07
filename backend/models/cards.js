const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    user: mongoose.ObjectId,
    deck: mongoose.ObjectId,
    term: String,
    definition: String,
    isLearned: {
        type: Boolean,
        default: false
    },
});

module.exports = mongoose.model('Cards', cardSchema);
