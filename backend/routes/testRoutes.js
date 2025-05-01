import express from "express";
import db from "../config/db.js";

const router = express.Router();

router.get("/", (req, res) => res.send("Hello from Express!"));

router.get("/test-db", (req, res) => {
  db.query("SELECT 1", (err) => {
    if (err) return res.status(500).send("DB connection failed.");
    res.send("✅ DB connection working!");
  });
});

router.get("/test", (req, res) => {
  db.query("SHOW TABLES", (err, results) => {
    if (err) return res.status(500).json({ error: "DB error" });
    res.json({ tables: results });
  });
});

export default router;
