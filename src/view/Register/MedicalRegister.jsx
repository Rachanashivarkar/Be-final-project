import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import './MedicalRegister.css';
import Header from '../../components/navbar/nav'; // Make sure this is correct
import TopBar from '../../components/TopBar/TopBar';
import Footer from '../../components/footer/footer';

const MedicalRegister = () => {
  const [formData, setFormData] = useState({
    storeName: '',
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    password: '',
    drugLicenseNumber: '',
    gstNumber: '',
  });

  const [licenseImage, setLicenseImage] = useState(null);
  const [ownerIdImage, setOwnerIdImage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === 'licenseImage') setLicenseImage(files[0]);
    if (name === 'ownerIdImage') setOwnerIdImage(files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        data.append(key, value);
      });
      data.append('licenseImage', licenseImage);
      if (ownerIdImage) data.append('ownerIdImage', ownerIdImage);

      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/auth/medical-register`, data, {
        
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success(res.data.message || 'Registered Successfully!');
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Registration Failed');
    }
  };

  return (
    <>
      <Header />
      <TopBar />
      <div className="medical-register-container">
        <h2>Medical Store Registration</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <input type="text" name="storeName" placeholder="Store Name" onChange={handleChange} required />
          <input type="text" name="ownerName" placeholder="Owner Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} required />
          <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
          
          <input type="text" name="drugLicenseNumber" placeholder="Drug License Number" onChange={handleChange} required />
          <label>Upload Drug License Image (jpg, png, pdf):</label>
          <input type="file" name="licenseImage" accept=".jpg,.jpeg,.png,.pdf" onChange={handleFileChange} required />

          <input type="text" name="gstNumber" placeholder="GST Number (optional)" onChange={handleChange} />
          <label>Upload Owner ID Proof (optional):</label>
          <input type="file" name="ownerIdImage" accept=".jpg,.jpeg,.png,.pdf" onChange={handleFileChange} />

          <button type="submit">Register</button>
        </form>
        <Toaster />
      </div>
      <Footer />
    </>
  );
};

export default MedicalRegister;
