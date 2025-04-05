const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 5001;

// Enable CORS
app.use(cors());

// Serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Make sure uploads folder exists
const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads"),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
const upload = multer({ storage });

// POST /upload
app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) return res.status(400).json({ message: "No file uploaded" });

  const fileUrl = `http://localhost:${PORT}/uploads/${req.file.filename}`;
  res.json({ success: true, message: "Upload successful", url: fileUrl });
});

// GET /prescriptions
app.get("/prescriptions", (req, res) => {
  fs.readdir(uploadDir, (err, files) => {
    if (err) return res.status(500).json({ success: false });

    const fileUrls = files.map(f => `http://localhost:${PORT}/uploads/${f}`);
    res.json({ success: true, files: fileUrls });
  });
});

// DELETE /delete/:filename
app.delete("/delete/:filename", (req, res) => {
  const filePath = path.join(uploadDir, req.params.filename);
  fs.unlink(filePath, err => {
    if (err) return res.status(500).json({ success: false, message: "Delete failed" });
    res.json({ success: true, message: "File deleted" });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
