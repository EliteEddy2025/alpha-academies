const mongoose = require('mongoose');

const ProgressSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  subjects: [{ name: String, value: Number }],
  achievements: [String]
});

module.exports = mongoose.model('Progress', ProgressSchema);