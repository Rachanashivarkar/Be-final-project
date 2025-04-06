// src/config/headerdata.js (or wherever this file lives)

import Login from './../view/Login/login.jsx';

const headerdata = [
  {
    to: "/",
    name: "Home",
  },
  {
    to: "/services",
    name: "Services"
  },
  {
    to: "/about",
    name: "About"
  },
  {
    to: "/login",
    name: "Login"
  },
  {
    name: "Register", // dropdown
    dropdown: [
      { name: "As Customer", to: "./sign" },
      { name: "As Medical Store", to: "/MedicalRegister" },
      { name: "As Delivery Boy", to: "/register/delivery" }
    ]
  },
  {
    to: "/track-order",
    name: "Track Order"
  }
];

export { headerdata };
