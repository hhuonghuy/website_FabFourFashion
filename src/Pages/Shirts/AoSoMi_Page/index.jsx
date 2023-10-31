import React from 'react'
import Navbar from '../../../Layout/Navbar'
import NavProducts from '../../../Layout/NavProducts'
import Product_AoSoMi from '../../../Components/Products/Shirts/AoSoMi'
import Footer from '../../../Layout/Footer'

function AoSoMi_Page() {
  return (
    <div>
        <Navbar/>
        <NavProducts/>
        <Product_AoSoMi/>
        <Footer/>
    </div>
  )
}

export default AoSoMi_Page