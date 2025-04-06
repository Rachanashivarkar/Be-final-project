const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const uploadMiddleware = require('../middlewares/upload');

// Models
const User = require('../models/User');
const MedicalStore = require('../models/MedicalStore');

// Google OAuth Client
const client = new OAuth2Client('YOUR_GOOGLE_CLIENT_ID');

// ========= CUSTOMER REGISTRATION =========
router.post('/register', async (req, res) => {
  const { firstName, lastName, email, phone, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ firstName, lastName, email, phone, password: hashedPassword });
    await newUser.save();

    res.json({ message: "User registered successfully" });
  } catch (err) {
    console.error("Registration Error:", err);
    res.status(500).json({ message: "Something went wrong" });
  }
});

// ========= CUSTOMER LOGIN =========
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

    res.json({ message: "Login successful", user, token });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ message: "Something went wrong" });
  }
});

// ========= GOOGLE LOGIN =========
router.post('/google-login', async (req, res) => {
  const { token } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: 'YOUR_GOOGLE_CLIENT_ID',
    });

    const payload = ticket.getPayload();
    const { email, given_name, family_name } = payload;

    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ firstName: given_name, lastName: family_name, email, phone: '', password: '' });
      await user.save();
    }

    const customToken = jwt.sign({ email: user.email, id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

    res.status(200).json({ message: 'Google login successful', token: customToken, user });
  } catch (error) {
    console.error("Google Login Error:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

// ========= MEDICAL STORE REGISTRATION =========
router.post(
  '/medical-register',
  uploadMiddleware.fields([
    { name: 'licenseImage', maxCount: 1 },
    { name: 'ownerIdImage', maxCount: 1 },
  ]),
  async (req, res) => {
    console.log("📥 Received medical register request");

    const {
      storeName,
      ownerName,
      email,
      phone,
      address,
      password,
      drugLicenseNumber,
      gstNumber
    } = req.body;

    const licenseImage = req.files?.licenseImage?.[0]?.path || null;
    const ownerIdImage = req.files?.ownerIdImage?.[0]?.path || null;

    try {
      const existing = await MedicalStore.findOne({ email });
      if (existing) return res.json({ message: "Medical store already registered" });

      const hashedPassword = await bcrypt.hash(password, 10);

      const newStore = new MedicalStore({
        storeName,
        ownerName,
        email,
        phone,
        address,
        licenseNumber: drugLicenseNumber,
        gstNumber,
        password: hashedPassword,
        licenseImage,
        ownerIdImage,
        isVerified: false,
      });

      await newStore.save();
      res.json({ message: "Medical store registered successfully, pending verification" });
    } catch (err) {
      console.error("Medical Registration Error:", err);
      res.status(500).json({ message: "Something went wrong" });
    }
  }
);

// ========= MEDICAL STORE LOGIN =========
router.post('/medical-login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const store = await MedicalStore.findOne({ email });
    if (!store) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, store.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    if (!store.isVerified) {
      return res.status(403).json({ message: "Account not verified by admin" });
    }

    const token = jwt.sign({ id: store._id, role: 'medical' }, 'your_jwt_secret', { expiresIn: '1h' });

    res.json({ message: "Medical store login successful", store, token });
  } catch (err) {
    console.error("Medical Login Error:", err);
    res.status(500).json({ message: "Something went wrong" });
  }
});

// ✅ Test route
router.get('/test', (req, res) => {
  res.send("✅ Auth route is working!");
});

module.exports = router;
