import React from 'react'
import Navbar from '../../../Layout/Navbar'
import NavProducts from '../../../Layout/NavProducts'
import Product_AoThun from '../../../Components/Products/Shirts/AoThun'
import Footer from '../../../Layout/Footer'


function AoThun_Page() {
  return (
    <div>
        <Navbar/>
        <NavProducts/>
        <Product_AoThun/>
        <Footer/>
    </div>
  )
}

export default AoThun_Page