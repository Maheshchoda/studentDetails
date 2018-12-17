const express = require("express");
const router = express.Router();

// Student Model
const Student = require("../../models/Student");

// @route GET api/students
// @description Get All students
// @access Public
router.get("/", (req, res) => {
  Student.find({ user_id: req.query.user_id })
    .sort({ date: -1 })
    .then(students => res.json(students));
});

// @route POST api/students
// @description Create An Student
// @access Public
router.post("/", (req, res) => {
  const {
    studentId,
    studentName,
    email,
    enrolmentYear,
    studentclass,
    city,
    country,
    user_id
  } = req.body;

  const newStudent = new Student({
    studentId: studentId,
    studentName: studentName,
    email: email,
    enrolmentYear: enrolmentYear,
    studentclass: studentclass,
    city: city,
    country: country,
    user_id: user_id
  });

  newStudent.save().then(student => res.json(student));
});

// @route DELETE api/students
// @description Delete A Student
// @access Public
router.delete("/:id", (req, res) => {
  Student.findById(req.params.id)
    .then(student => student.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

// @route UPDATE api/students
// @description Edit a Student
// @access Public
router.put("/:id", (req, res) => {
  Student.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, student) => {
      if (err) return res.status(500).send(err);
      return res.send(student);
    }
  );
});

module.exports = router;
