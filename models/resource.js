const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
    description: String,
    link: String,
    name: String,
    avatar: String,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  }, {
    timestamps: true
  });

  module.exports = mongoose.model('Resource', resourceSchema);