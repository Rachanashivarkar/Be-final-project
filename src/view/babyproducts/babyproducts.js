import React from 'react'
import Babycard from '../../components/babycard/BabyCard'
import './babyproducts.css'
import Navbar from "../../components/navbar/nav";
import TopBar from '../../components/TopBar/TopBar';
import Footer from '../../components/footer/footer';

function babyproducts() {
  return (
    <>
    <Navbar/>
    <TopBar/>
    <Babycard/>
    <Footer/>
    </>

  )
}

export default babyproducts