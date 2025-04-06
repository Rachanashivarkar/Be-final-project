const mongoose = require('mongoose');

const medicalStoreSchema = new mongoose.Schema({
  storeName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  licenseNumber: { type: String, required: true },
  gstNumber: { type: String, required: true },
  password: { type: String, required: true },
  licenseImage: { type: String },
  isVerified: { type: Boolean, default: false }
});

module.exports = mongoose.model('MedicalStore', medicalStoreSchema);
