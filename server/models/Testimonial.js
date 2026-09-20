const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  company: { type: String },
  avatar: { type: String },
  rating: { type: Number, default: 5 },
  text: { type: String, required: true },
  courseCompleted: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Testimonial', testimonialSchema);
