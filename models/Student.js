const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const StudentSchema = new Schema({
  user_id: {
    type: String,
    required: true
  },
  studentId: { type: Number, required: true, trim: true },
  studentName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  studentclass: { type: String, required: true },
  enrolmentYear: { type: Number, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true }
});

module.exports = Student = mongoose.model("student", StudentSchema);
