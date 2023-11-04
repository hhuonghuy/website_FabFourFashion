import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import 'bootstrap/dist/css/bootstrap.css'
import AoPolo_Page from './Pages/Shirts/AoPolo_Page'
import AoKhoac_Page from './Pages/Shirts/AoKhoac_Page'
import AoThun_Page from './Pages/Shirts/AoThun_Page'
import AoNu_Page from './Pages/Shirts/AoNu'
import AoNam_Page from './Pages/Shirts/AoNam'
import AoSoMi_Page from './Pages/Shirts/AoSoMi_Page'
import Trouser_Page from './Pages/Pants/Trouser'
import Shorts_Page from './Pages/Pants/Shorts'
import Aceries_Page from './Pages/Accessories'
import Detail_Page from './Pages/Detail_Page'
import AllProds_Page from './Pages/All_Prods_Page'
import Login_Page from './Pages/Accounts_Page/Login_Page'
import Register_Page from './Pages/Accounts_Page/Register_Page'
import Admin_Page from './Pages/Admin_Page'
import Cart_Page from './Pages/Cart_Page'
import CartSuccess_Page from './Pages/CartSuccess_Page'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* USER */}
        <Route path='/' element={<Home />}></Route>
        <Route path='/FabFourFashion_AoPolo' element={<AoPolo_Page />}></Route>
        <Route path='/FabFourFashion_AoKhoac' element={<AoKhoac_Page />}></Route>
        <Route path='/FabFourFashion_AoThun' element={<AoThun_Page />}></Route>
        <Route path='/FabFourFashion_AoNu' element={<AoNu_Page />}></Route>
        <Route path='/FabFourFashion_AoNam' element={<AoNam_Page />}></Route>
        <Route path='/FabFourFashion_AoSomi' element={<AoSoMi_Page />}></Route>
        <Route path='/FabFourFashion_Trouser' element={<Trouser_Page />}></Route>
        <Route path='/FabFourFashion_Shorts' element={<Shorts_Page />}></Route>
        <Route path='/FabFourFashion_Accessories' element={<Aceries_Page />}></Route>
        <Route path='/FabFourFashion_Detail' element={<Detail_Page/>}></Route>
        <Route path='/FabFourFashion_AllProducts' element={<AllProds_Page/>}></Route>
        <Route path='/FabFourFashion_Login' element={<Login_Page/>}></Route>
        <Route path='/FabFourFashion_Register' element={<Register_Page/>}></Route>
        <Route path='/FabFourFashion_Cart' element={<Cart_Page/>}></Route>
        <Route path='/FabFourFashion_CartSuccess' element={<CartSuccess_Page/>}></Route>

        {/* ADMIN */}
        <Route path='/FabFourFashion_Admin' element={<Admin_Page/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
