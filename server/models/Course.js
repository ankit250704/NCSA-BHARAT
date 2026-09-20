const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: String, required: true },
  level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced', 'Beginner to Pro'], required: true },
  skills: [{ type: String }],
  image: { type: String },
  popular: { type: Boolean, default: false },
  rating: { type: Number, default: 4.9 },
  studentsEnrolled: { type: Number, default: 0 },
  category: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', courseSchema);
