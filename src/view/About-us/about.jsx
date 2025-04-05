import Footer from "../../components/footer/footer"
import Navbar from "../../components/navbar/nav"
import "./about.css"
import AboutContain from "./aboutdata"
import image from './process.png'

function About() {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <div className="about-hero">
          <h1 className="about-title">Welcome to MediFind</h1>
          <p className="about-subtitle">Get the right medicine, right when you need it—MediFind brings fast, reliable, and hassle-free medicine delivery straight to your door.</p>
          <img src="https://sdmntprpolandcentral.oaiusercontent.com/files/00000000-6014-520a-8559-bc1a001fcb59/raw?se=2025-04-05T20%3A05%3A21Z&sp=r&sv=2024-08-04&sr=b&scid=1e434d62-65ad-5a99-bd9d-463cc4f45a8d&skoid=d958ec58-d47c-4d2f-a9f2-7f3e03fdcf72&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-04T21%3A08%3A15Z&ske=2025-04-05T21%3A08%3A15Z&sks=b&skv=2024-08-04&sig=hm3J6UlOXwfOBtGaYmAEEf5N9hls1JtGWnF/AdW9nto%3D" alt="heroimg" className="hero-image" />
        </div>
        
        <div>
          <img src={image} alt="process" className="about-process-img" />
        </div>

        <div className='about-card-container'>
        <AboutContain
          title="Our Mission"
          imgurl="https://i.pinimg.com/736x/ec/c4/cd/ecc4cd70877afa99a45cc229f4821ace.jpg"
          description="  At MediFind, we’re on a mission to make healthcare more accessible and hassle-free. We believe getting the right medicine at the right time shouldn’t be complicated or stressful.

We connect you with trusted nearby pharmacies, allowing you to search for the medicines you need, compare availability, and get them delivered straight to your doorstep — all within a few taps.

With a commitment to speed, safety, and transparency, MediFind is built to support your health journey. Whether it’s a daily prescription or urgent medicine, we’re here to ensure it reaches you quickly and reliably."
        />
       
       
        
        </div>
        </div>
      <Footer />
    </>
  )
}

export default About