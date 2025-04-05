const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ MySQL DB Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port:3307,
  database: "registercust"
});


app.post('/register', (req, res) => {
  const { firstName, lastName, email, phone, password } = req.body;
  const fullName = `${firstName} ${lastName}`;

  const checkQuery = "SELECT * FROM registercust WHERE email = ?";
  db.query(checkQuery, [email], (err, results) => {
    if (err) {
      console.error("Error checking user:", err);
      return res.status(500).json({ message: "Database error during check" });
    }

    if (results.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    const insertQuery = "INSERT INTO registercust (name, email, phone, password) VALUES (?, ?, ?, ?)";
    const values = [fullName, email, phone, password];

    db.query(insertQuery, values, (err, result) => {
      if (err) {
        console.error("Error inserting into DB:", err);
        return res.status(500).json({ message: "Database error during insert" });
      }
      return res.json({ message: "User registered successfully" });
    });
  });
});

// ✅ Login Route
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM registercust WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.error("Login error:", err);
      return res.status(500).json({ message: "Database error" });
    }

    if (result.length > 0) {
      return res.json({ message: "Login successful", user: result[0] });
    } else {
      return res.status(401).json({ message: "Invalid email or password" });
    }
  });
});

// ✅ Google Authentication Route
app.post('/google-auth', (req, res) => {
  const { email, name } = req.body;

  const checkUserSql = "SELECT * FROM registercust WHERE email = ?";
  db.query(checkUserSql, [email], (err, result) => {
    if (err) {
      console.error("Google Auth Check Error:", err);
      return res.status(500).json({ message: "Database error during Google auth check" });
    }

    if (result.length > 0) {
      return res.json({ message: "Login successful via Google", user: result[0] });
    } else {
      const insertSql = "INSERT INTO registercust (name, email) VALUES (?, ?)";
      db.query(insertSql, [name, email], (err, result) => {
        if (err) {
          console.error("Google Auth Insert Error:", err);
          return res.status(500).json({ message: "Database error during Google user insert" });
        }
        return res.json({ message: "User registered via Google", user: { name, email } });
      });
    }
  });
});

// ✅ Start Server
app.listen(8081, () => {
  console.log("Server running on http://localhost:8081");
});
