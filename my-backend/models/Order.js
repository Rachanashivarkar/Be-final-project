// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  formData: {
    country: String,
    firstName: String,
    lastName: String,
    address: String,
    apartment: String,
    city: String,
    state: String,
    zipCode: String,
    phoneNumber: String,
    email: String
  },
  cartItems: Array,
  totalPrice: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
