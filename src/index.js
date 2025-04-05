import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from './view/App/App';
import Login from './view/Login/login';
import Sign from './view/Login/Signup/sign';
import About from './view/About-us/about';
import Blog from './view/Blog/Blog';
import Services from './view/services/Services';
import ReadBlogs from './view/Blog/ReadBlogs/ReadBlogs';
import Feedback from './view/feedback/feedback';
import Card from './view/SERVICEEXPAND/fruitCardExtend/Card';
import Checkout from './view/Checkout/Checkout';
import Bill from './view/Bill/Bill';
import Profile from './view/Profile/profile';
import Essentials from './view/essentials/Essentials';
import Dairy from './view/dairy/Dairy';
import Fruits from './view/fruits/Fruits';
import Exotics from './view/exotics/Exotics';
import Vegetables from './view/vegetables/Vegetables';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="412295585179-1rv8cmon29lq6mroee0q0tidg996d7mj.apps.googleusercontent.com">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:blogId" element={<ReadBlogs />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/bill" element={<Bill />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/essentials" element={<Essentials />} />
          <Route path="/dairy" element={<Dairy />} />
          <Route path="/card/:cardId" element={<Card />} />
          <Route path="/exotics" element={<Exotics />} />
          <Route path="/vegetables" element={<Vegetables />} />
          <Route path="/fruits" element={<Fruits />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
