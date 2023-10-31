import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'

function Navbar() {
  return (
    <div>
        <header>
  <div className="container-fluid" style={{height: 95, backgroundColor: 'black'}}>
    <div className="row">
      <div className="col-md-3">
        <img src alt />
      </div>
      <div className="col-md-6" style={{height: 95}}>
        <ul style={{listStyle: 'none', display: 'flex', marginTop: "34px", marginBottom: "34px", fontWeight: 'bold'}}>
          <li>
            <Link to="/" style={{textDecoration: 'none', fontSize: "14pt", fontFamily: "Play", color: "#905824"}}>
              Trang chủ
            </Link>
          </li>
          <li style={{marginLeft: 80}}>
            <Link to="/FabFourFashion_GioiThieu" style={{textDecoration: 'none', fontSize: "14pt", fontFamily: "Play"}}>
              Giới thiệu
            </Link>
          </li>
          <li style={{marginLeft: 80}}>
            <Link to="/FabFourFashion_AllProducts" style={{textDecoration: 'none', fontSize: "14pt", fontFamily: "Play"}}>
              Sản phẩm
            </Link>
          </li>
          <li style={{marginLeft: 80}}>
            <Link to="/FabFourFashion_TinTuc" style={{textDecoration: 'none', fontSize: "14pt", fontFamily: "Play"}}>
              Tin tức
            </Link>
          </li>
          <li style={{marginLeft: 80}}>
            <Link to="/FabFourFashion_LienHe" style={{textDecoration: 'none', fontSize: "14pt", fontFamily: "Play"}}>
              Liên hệ
            </Link>
          </li>
        </ul>
      </div>
      <div className="col-md-3">
        <Link to="" style={{textDecoration: 'none'}}>
          <img src="http://www.w3.org/2000/svg" alt style={{marginTop: "34px", marginLeft: "100px"}} />
        </Link>
        <Link to="" style={{textDecoration: 'none'}}>
          <img src="images/heart.png" alt style={{marginTop: "34px", marginLeft: "30px"}} />
        </Link>
        <Link to="" style={{textDecoration: 'none'}}>
          <img src="images/shopping-cart.png" alt style={{marginTop: "34px", marginLeft: "30px"}} />
        </Link>
      </div>
    </div>
  </div>
</header>

    </div>
  )
}

export default Navbar;