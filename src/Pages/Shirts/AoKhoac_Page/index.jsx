import React from 'react'
import Navbar from '../../../Layout/Navbar'
import NavProducts from '../../../Layout/NavProducts'
import Product_AoKhoac from '../../../Components/Products/Shirts/AoKhoac'
import Footer from '../../../Layout/Footer'


function AoKhoac_Page() {
  return (
    <div>
        <Navbar/>
        <NavProducts/>
        <Product_AoKhoac/>
        <Footer/>
    </div>
  )
}

export default AoKhoac_Page