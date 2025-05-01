import express from "express";
import { addStudent, getAllStudents, checkDuplicates } from "../controllers/studentController.js"; // 👈 import checkDuplicates
import upload from "../middleware/upload.js";

const router = express.Router();

// Add student
router.post("/add", upload.single("photo"), addStudent);

// Get all students
router.get("/", getAllStudents);

// ✅ Check duplicate field (new route)
router.post("/check-duplicates", checkDuplicates);

export default router;
