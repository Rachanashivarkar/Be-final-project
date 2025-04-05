const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "registercust"
});

// Registration Route
app.post('/register', (req, res) => {
  const { firstName, lastName, email, phone, password } = req.body;

  // Combine firstName and lastName into single name
  const fullName = `${firstName} ${lastName}`;

  const sql = "INSERT INTO registercust (name, email, phone, password) VALUES (?, ?, ?, ?)";
  const values = [fullName, email, phone, password];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting into DB:", err);
      return res.status(500).json({ message: "Database error" });
    }
    return res.json({ message: "User registered successfully" });
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

app.listen(8081, () => {
  console.log("Server running on http://localhost:8081");
});
