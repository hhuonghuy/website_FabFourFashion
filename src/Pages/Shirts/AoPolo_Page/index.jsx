import React from 'react'
import Navbar from '../../../Layout/Navbar'

import Footer from '../../../Layout/Footer'
import NavProducts from '../../../Layout/NavProducts'
import Product_AoPolo from '../../../Components/Products/Shirts/AoPolo'

function AoPolo_Page() {
  return (
    <div>
      <Navbar/>
      <NavProducts/>
      <Product_AoPolo/>
      <Footer/>
    </div>
  )
}

export default AoPolo_Page