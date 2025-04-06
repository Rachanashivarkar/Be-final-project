import Footer from "../../components/footer/footer";
import Navbar from "../../components/navbar/nav";
import "./about.css";
import AboutContain from "./aboutdata";
import image from './process.png';

function About() {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <div className="about-hero">
          <h1 className="about-title">Welcome to MediFind</h1>
          <p className="about-subtitle">
            Get the right medicine, right when you need it—MediFind brings fast, reliable, and hassle-free medicine delivery straight to your door.
          </p>
          <img
            src="https://img.freepik.com/free-vector/safe-food-delivery-concept_23-2148552072.jpg?t=st=1743879297~exp=1743882897~hmac=6f5dbc1554f85052111914c8ad843f55d2127170d57c279c5e1a7f3fd86faa38&w=1380"
            alt="Medical Service"
            className="hero-image"
          />
        </div>

        <div>
          <img src={image} alt="process" className="about-process-img" />
        </div>

        <div className='about-card-container'>
          <AboutContain
            title="Our Mission"
            imgurl="https://i.pinimg.com/736x/ec/c4/cd/ecc4cd70877afa99a45cc229f4821ace.jpg"
            description="At MediFind, we’re on a mission to make healthcare more accessible and hassle-free. We believe getting the right medicine at the right time shouldn’t be complicated or stressful.

We connect you with trusted nearby pharmacies, allowing you to search for the medicines you need, compare availability, and get them delivered straight to your doorstep — all within a few taps.

With a commitment to speed, safety, and transparency, MediFind is built to support your health journey. Whether it’s a daily prescription or urgent medicine, we’re here to ensure it reaches you quickly and reliably."
          />
          <AboutContain
            title="Why Choose Us"
            description="We partner only with verified pharmacies to ensure 100% genuine medicines."
          />
          <AboutContain
            title="Secure Prescriptions"
            description="Upload and verify prescriptions safely with complete privacy and accuracy."
          />
          <AboutContain
            title="Live Order Tracking"
            description="Stay informed with real-time updates on your medicine deliveries."
          />
          <AboutContain
            title="24/7 Support"
            description="Our team is here anytime to help with orders, prescriptions, and queries."
          />
          <AboutContain
            title="Store Empowerment"
            description="We help medical stores grow with tools for managing inventory and orders online."
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
