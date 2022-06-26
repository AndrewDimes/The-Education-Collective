const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    avatar: String,
    email: String,
    googleId: String,
    resource: {type: mongoose.Schema.Types.ObjectId, ref: 'Resource'},
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('User', userSchema);