const mongoose = require('mongoose');

const deckSchema = new mongoose.Schema({
    user: mongoose.ObjectId,
    title: String,
});

module.exports = mongoose.model('Decks', deckSchema);
