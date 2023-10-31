import React from 'react'
import Navbar from '../../Layout/Navbar';
import BannerNav from '../../Layout/Banner/BannerNav';
import Category from '../../Layout/Category';
import BestSellers from '../../Components/Home Page/BestSellers';
import BannerNam from '../../Layout/Banner/BannerNam';
import ProductNam from '../../Components/Home Page/Nam';
import BannerNu from '../../Layout/Banner/BannerNu';
import ProductNu from '../../Components/Home Page/Nu';
import BannerAceries from '../../Layout/Banner/BannerAceries';
import Aceries from '../../Components/Home Page/Accessories';
import Footer from '../../Layout/Footer';


function Home() {
  return (
    <div>
      <Navbar/>
      <BannerNav/>
      <Category/>
      <BestSellers/>
      <BannerNam/>
      <ProductNam/>
      <BannerNu/>
      <ProductNu/>
      <BannerAceries/>
      <Aceries/>
      <Footer/>
    </div>
  )
}

export default Home;

