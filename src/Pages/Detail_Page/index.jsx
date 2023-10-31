import React from 'react'
import Navbar from '../../Layout/Navbar'
import NavProducts from '../../Layout/NavProducts'
import Detail_Pro from '../../Components/Detail'
import Footer from '../../Layout/Footer'

function Detail_Page() {
  return (
    <div>
        <Navbar />
        <NavProducts />
        <Detail_Pro />
        <Footer />
    </div>
  )
}

export default Detail_Page