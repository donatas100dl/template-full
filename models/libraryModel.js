const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: Date,
  quantity: Number,
  name: String,
  price: Number,
  description: String,
  author: String,
});

// Export the Calandar model
module.exports = mongoose.model('Library', bookSchema);

