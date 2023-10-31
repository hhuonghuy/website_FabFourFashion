import React from 'react'
import { Link } from 'react-router-dom'

function Product_AoNu() {
  return (
<div>
      <div className="container" id="sanpham" style={{marginTop: 50}}>
    <div className="row-1">
      <div className="col-md-3" style={{width: 300, textAlign: 'center', marginLeft: 35}}>
      </div>
      <div className="col-md-3" style={{width: 300, textAlign: 'center', marginLeft: 10, fontFamily: 'Play'}}>
        <Link to="/FabFourFashion_Detail">
          <img src="images/aopolo.jpg" alt style={{width: 250, height: 350, border: '1px solid rgb(255, 0, 43)'}} />
        </Link>
        <Link to="/Detail_Page" style={{textDecoration: 'none'}}>
          <h4 style={{textAlign: 'center', fontSize: '16pt', marginTop: 10}}>
            Áo thun nam
          </h4>
        </Link>
        <Link to="/Detail_Page" style={{textDecoration: 'none'}}>
          <h4 style={{textAlign: 'center', fontSize: '16pt', marginTop: 10}}>
            700.000đ
          </h4>
        </Link>
      </div>
    </div>
  </div>
</div>
  )
}

export default Product_AoNu