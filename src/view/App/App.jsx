import React, { useState } from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/nav";
import Card3 from "../../components/homepageCard3/card3";
import "./App.css";
import card3card from "./../../config/card3";
import { Link } from "react-router-dom";

import { Toaster } from "react-hot-toast";

function App() {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <>
      <Navbar />

      {/* Scooter Background */}
      <div className="App"></div>

      {/* Message after scooter disappears */}
      <div className="scooter-message">Welcome to MediFind!!! 🚀</div>

      

      <div className="why-choose-us-content">
        <img
          src="https://cdn.shopify.com/s/files/1/0646/0568/3879/files/leaf.png?v=1719552788"
          alt="Leaf Icon"
          className="leaf-icon left"
        />

        <div className="why-choose-us-text">
          <h1 className="why-choose-us-heading">Why Choose Us?</h1>
          <p>
          MediFind ! your trusted path to better health,made simple and seamless
            <Link to="/about" className="knowmore-button">Know more</Link>
          </p>

          {/* Buttons Section */}
          <div className="button-container">
            <button className="shop-now-button">
              <Link to="/services">Shop Now</Link>
            </button>

            {/* Upload Prescription Section */}
            <label htmlFor="prescription-upload" className="upload-button">
              Upload Prescription
              <input
                type="file"
                id="prescription-upload"
                accept="image/*,application/pdf"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </label>

            {/* Display selected file name */}
            {file && <p className="file-name">Selected: {file.name}</p>}
          </div>
        </div>

        <img
          src="https://cdn.shopify.com/s/files/1/0646/0568/3879/files/leaf.png?v=1719552788"
          alt="Leaf Icon"
          className="leaf-icon right"
        />
      </div>

      
      

      <Footer />
      <Toaster />
    </>
  );
}

export default App;
