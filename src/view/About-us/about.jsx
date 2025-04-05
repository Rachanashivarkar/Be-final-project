import Footer from "../../components/footer/footer"
import Navbar from "../../components/navbar/nav"
import "./about.css"
import AboutContain from "./aboutdata"

function About() {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <div className="about-hero">
          <h1 className="about-title">Welcome to MediFind</h1>
          <p className="about-subtitle">Fast, Reliable Medicine Delivery at Your Fingertips</p>
          <img
            src="https://img.freepik.com/free-vector/safe-food-delivery-concept_23-2148552072.jpg?t=st=1743879297~exp=1743882897~hmac=6f5dbc1554f85052111914c8ad843f55d2127170d57c279c5e1a7f3fd86faa38&w=1380"
            alt="Medical Service"
            className="hero-image"
          />
        </div>

        <div className='about-card-container'>
          <AboutContain
            title="Our Mission"
            description="Connecting people to trusted medical stores for fast and reliable medicine delivery."
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
  )
}

export default About
