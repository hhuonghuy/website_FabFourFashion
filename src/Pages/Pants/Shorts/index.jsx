import React from 'react'
import Navbar from '../../../Layout/Navbar'
import NavProducts from '../../../Layout/NavProducts'
import Product_Short from '../../../Components/Products/Pants/Shorts'
import Footer from '../../../Layout/Footer'

function Shorts_Page() {
  return (
    <div>
        <Navbar/>
        <NavProducts/>
        <Product_Short/>
        <Footer/>
    </div>
  )
}

export default Shorts_Page