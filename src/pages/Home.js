import React from 'react'
import TopNavbar from '../components/Nav/TopNavbar'
import Nav from '../components/Nav'
import Sidebar from '../components/Nav/Sidebar'
import Slid from '../components/Slider'
import TopProduct from '../components/TopProducts'
import PopularProduct from '../components/PopularProducts'
import Features from '../components/Features/Features'
import Footer from '../components/Footer'
function Home() {
  return (
    <>
        <TopNavbar />
        <Nav />
        <Slid />
        <TopProduct />
        <PopularProduct />
        <Features />
        <Footer />
    </>
  )
}

export default Home