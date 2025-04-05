import React from 'react'
import Healthcard from '../../components/Healthcard/Healthcard'
import Navbar from "../../components/navbar/nav";
import TopBar from '../../components/TopBar/TopBar';
import Footer from '../../components/footer/footer';

function Health() {
  return (
    <>
    <Navbar/>
    <TopBar/>
    <div><Healthcard/></div>
    <Footer/>
    </>
  )
}

export default Health