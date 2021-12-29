const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    body: String,
    rating: Number
})

mongoose.exports = mongoose.model('Review', reviewSchema);