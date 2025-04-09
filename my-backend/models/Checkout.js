const mongoose = require('mongoose');

const checkoutSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  firstName: String,
  lastName: String,
  country: String,
  address: String,
  apartment: String,
  city: String,
  state: String,
  zipCode: String,
  phoneNumber: String,
  email: String,
  cartItems: Array,
  totalPrice: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Checkout', checkoutSchema);
