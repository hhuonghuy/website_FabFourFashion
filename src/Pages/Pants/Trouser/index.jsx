import React from 'react'
import Navbar from '../../../Layout/Navbar'
import NavProducts from '../../../Layout/NavProducts'
import Product_Trouser from '../../../Components/Products/Pants/Trouser'
import Footer from '../../../Layout/Footer'

function Trouser_Page() {
  return (
    <div>
        <Navbar/>
        <NavProducts/>
        <Product_Trouser/>
        <Footer/>
    </div>
  )
}

export default Trouser_Page