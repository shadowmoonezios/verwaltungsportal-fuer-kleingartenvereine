const mongoose = require('mongoose');

const MemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  active: { type: Boolean, default: true }
});

module.exports = mongoose.model('Member', MemberSchema);
