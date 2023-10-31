import React from 'react'
import Navbar from '../../Layout/Navbar'
import NavProducts from '../../Layout/NavProducts'
import All_Prods from '../../Components/All_Products'
import Footer from '../../Layout/Footer'

function AllProds_Page() {
  return (
    <div>
        <Navbar />
        <NavProducts />
        <All_Prods />
        <Footer />
    </div>
  )
}

export default AllProds_Page