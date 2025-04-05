import React, { useState, useEffect } from "react";
import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/nav";
import { Link } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const BASE_URL = "http://localhost:5001"; // Change this to env var for production

  useEffect(() => {
    loadPrescriptions();
  }, []);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a file first");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    try {
      const res = await axios.post(`${BASE_URL}/upload`, formData);
      toast.success(res.data.message);
      setFile(null);
      await loadPrescriptions();
    } catch (err) {
      toast.error(err.response?.data?.message || "Upload failed");
    }
    setLoading(false);
  };

  const loadPrescriptions = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/prescriptions`);
      if (res.data.success) {
        setUploadedFiles(res.data.files);
      }
    } catch (err) {
      console.error("Failed to load prescriptions", err);
    }
  };

  const handleDelete = async (fileUrl) => {
    const filename = fileUrl.split("/").pop();
    try {
      await axios.delete(`${BASE_URL}/delete/${filename}`);
      toast.success("Deleted successfully");
      setUploadedFiles((prev) => prev.filter((f) => f !== fileUrl));
    } catch (err) {
      toast.error("Delete failed");
    }
  };

  return (
    <>
      <Navbar />
      <div className="App"></div>

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
            MediFind! Your trusted path to better health, made simple and seamless.
            <Link to="/about" className="knowmore-button">Know more</Link>
          </p>

          <div className="button-container">
            <button className="shop-now-button">
              <Link to="/services">Shop Now</Link>
            </button>

            <label htmlFor="prescription-upload" className="upload-button" role="button" tabIndex="0">
              Upload Prescription
              <input
                type="file"
                id="prescription-upload"
                accept="image/*,application/pdf"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </label>

            {file && <p className="file-name">Selected: {file.name}</p>}

            <button
              onClick={handleUpload}
              className="shop-now-button"
              style={{ marginTop: "10px" }}
              disabled={loading}
            >
              {loading ? "Uploading..." : "Submit"}
            </button>
          </div>
        </div>

        <img
          src="https://cdn.shopify.com/s/files/1/0646/0568/3879/files/leaf.png?v=1719552788"
          alt="Leaf Icon"
          className="leaf-icon right"
        />
      </div>

      <div className="prescription-gallery">
        <h3>📋 Uploaded Prescriptions</h3>
        {uploadedFiles.length === 0 ? (
          <p>No prescriptions uploaded yet 📭</p>
        ) : (
          <div className="gallery-grid">
            {uploadedFiles.map((file, idx) => (
              <div key={idx} className="prescription-card">
                {file.endsWith(".pdf") ? (
                  <a href={file} target="_blank" rel="noopener noreferrer">📄 View PDF</a>
                ) : (
                  <img src={file} alt={`prescription-${idx}`} className="prescription-thumb" />
                )}
                <button onClick={() => handleDelete(file)}>❌ Delete</button>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
      <Toaster />
    </>
  );
}

export default App;
