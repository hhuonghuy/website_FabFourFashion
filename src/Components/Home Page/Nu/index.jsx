import React from 'react'
import { Link } from 'react-router-dom'

function ProductNu() {
  return (
    <div>
      <div>
          <div className="container">
            <div className="container" style={{marginTop: 50}}>
              <div className="row">
                <div className="col-md-12">
                  <h1 style={{textAlign: 'center'}}>
                    THỜI TRANG NỮ
                  </h1>
              </div>
            </div>
          </div>
      </div>

      <div className="container" style={{width: 135, border: '2px solid #f97e6c', marginTop: 20}}></div>

      <div className="container" id="sanpham" style={{marginTop: 50}}>
        <div className="row">
          <div className="col-md-3" style={{width: 300, textAlign: 'center', marginLeft: 35}}>
            <Link to="" style={{textDecoration: 'none'}}>
                <img src="images/ao khoac.png" alt style={{width: 250, height: 350, border: '1px solid rgb(255, 0, 43)'}} />
            </Link>

            <Link to="" style={{textDecoration: 'none'}}>
              <h4 style={{textAlign: 'center', fontSize: '16pt', marginTop: 10}}>
                Áo thun nam
              </h4>
            </Link>

            <Link to="" style={{textDecoration: 'none'}}>
              <h4 style={{textAlign: 'center', fontSize: '16pt', marginTop: 10}}>
                500.000đ
              </h4>
            </Link>
          </div>
        </div>
      </div>
</div>

    </div>
  )
}

export default ProductNu