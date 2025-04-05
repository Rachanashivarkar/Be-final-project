import React from 'react'
import './PersonalCare.css'
import FruitCard from '../../components/Persnolcare/persnolcare'
import Navbar from "../../components/navbar/nav";
import TopBar from '../../components/TopBar/TopBar';
import Footer from '../../components/footer/footer';



function PersonalCare() {
  return (
    <>
    <Navbar/>
    <TopBar/>
 
<FruitCard/>
<Footer/>
</>

  )
}

export default PersonalCare