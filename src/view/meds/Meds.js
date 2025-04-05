import React from 'react'
import './Meds.css'
import Dairycard from '../../components/Medscard/Medscard'
import TopBar from '../../components/TopBar/TopBar'
import Navbar from "../../components/navbar/nav";
import Footer from '../../components/footer/footer';


function Meds() {
  return (
   <>
   <Navbar/>
   <TopBar/>
   <Dairycard/>
   <Footer/>
   </>
  )
  
}

export default Meds