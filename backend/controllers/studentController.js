// controllers/studentController.js

import { 
  insertStudent, 
  fetchAllStudents,
  checkRollNoExists, 
  checkEmailExists, 
  checkAdmissionIdExists,
  checkDuplicate
} from "../models/studentModel.js";

// ✅ Insert New Student
export const addStudent = async (req, res, next) => {
  try {
    const { body, file } = req;

    // ✅ Required Fields Validation
    const requiredFields = [
      "firstName", "lastName", "gender", "dob", "roll",
      "bloodGroup", "religion", "email", "StudentClass",
      "section", "admissionId", "phone", "bio"
    ];

    const missingFields = requiredFields.filter(field => !body[field]);
    if (missingFields.length > 0) {
      return res.status(400).json({ error: `Missing fields: ${missingFields.join(", ")}` });
    }

    // ✅ Email Validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(body.email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    // ✅ Phone Validation
    if (!/^\d{10}$/.test(body.phone)) {
      return res.status(400).json({ error: "Phone must be 10 digits" });
    }

    // ✅ Photo Validation
    if (!file) {
      return res.status(400).json({ error: "Photo upload is required" });
    }

    // ✅ Clean up input
    const roll = body.roll.trim();
    const email = body.email.trim().toLowerCase();
    const admissionId = body.admissionId.trim();

    // ✅ Check Roll Duplication
    const rollExists = await new Promise((resolve, reject) => {
      checkRollNoExists(roll, (err, result) => {
        if (err) return reject(err);
        resolve(result.length > 0);
      });
    });

    if (rollExists) {
      return res.status(409).json({ error: "Roll Number already exists" });
    }

    // ✅ Check Email Duplication
    const emailExists = await new Promise((resolve, reject) => {
      checkEmailExists(email, (err, result) => {
        if (err) return reject(err);
        resolve(result.length > 0);
      });
    });

    if (emailExists) {
      return res.status(409).json({ error: "Email already exists" });
    }

    // ✅ Check Admission ID Duplication
    const admissionIdExists = await new Promise((resolve, reject) => {
      checkAdmissionIdExists(admissionId, (err, result) => {
        if (err) return reject(err);
        resolve(result.length > 0);
      });
    });

    if (admissionIdExists) {
      return res.status(409).json({ error: "Admission ID already exists" });
    }

    // ✅ All validations passed
    const studentData = {
      ...body,
      email,
      admissionId,
      roll,
      photo: file.filename,
    };

    insertStudent(studentData, (err, result) => {
      if (err) {
        // ✅ Handle Duplicate Entry MySQL Error
        if (err.code === "ER_DUP_ENTRY") {
          if (err.sqlMessage.includes("roll")) {
            return res.status(409).json({ error: "Roll Number already exists" });
          } else if (err.sqlMessage.includes("email")) {
            return res.status(409).json({ error: "Email already exists" });
          } else if (err.sqlMessage.includes("admissionId")) {
            return res.status(409).json({ error: "Admission ID already exists" });
          } else {
            return res.status(409).json({ error: "Duplicate entry detected" });
          }
        }
        return next(err);
      }

      res.status(201).json({ message: "Student added successfully", data: result });
    });

  } catch (error) {
    next(error);
  }
};

// ✅ Fetch All Students
export const getAllStudents = (req, res, next) => {
  fetchAllStudents((err, students) => {
    if (err) return next(err);
    res.json({ students });
  });
};

// ✅ Check Duplicate Fields (roll, email, admissionId)
export const checkDuplicates = async (req, res, next) => {
  const { roll, email, admissionId } = req.body;

  try {
    const results = await new Promise((resolve, reject) => {
      checkDuplicate(roll, email, admissionId, (err, rows) => {
        if (err) return reject(err);
        resolve(rows);
      });
    });

    const duplicateFields = {};

    results.forEach((item) => {
      if (item.roll === roll) duplicateFields.roll = true;
      if (item.email === email) duplicateFields.email = true;
      if (item.admissionId === admissionId) duplicateFields.admissionId = true;
    });

    res.json({ duplicateFields });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
