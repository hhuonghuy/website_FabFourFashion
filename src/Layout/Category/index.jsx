import React from 'react'
import { Link } from 'react-router-dom';

function Category() {
  return (
    <div>
      <div className="container" style={{height: 1024}}>
  <div className="container" style={{marginTop: 30}}>
    <div className="row">
      <div className="col-md-12">
        <h1 style={{textAlign: 'center'}}>
          DANH MỤC SẢN PHẨM
        </h1>
      </div>
    </div>
  </div>
  <div className="container" style={{width: 135, border: '2px solid #f97e6c', marginTop: 20}} />
  <div className="container" style={{marginTop: 20}}>
    <div className="row">
      <div className="col-md-6" id="category" style={{width: 600, height: 341, marginTop: 15, marginLeft: 35, border: '1px solid black'}}>
        <Link>
            ÁO
        </Link>
      </div>
      <div className="col-md-6" id="category" style={{width: 600, height: 508, marginTop: 15, marginLeft: 30, border: '1px solid black'}}>
        <Link>
           Quần
        </Link>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6" id="category" style={{width: 600, height: 511, marginLeft: 35, marginTop: '-150px', border: '1px solid black'}}>
        <Link>
            ÁO KHOÁC
        </Link>
      </div>
      <div className="col-md-6" id="category" style={{width: 600, height: 344, marginLeft: 30, marginTop: 17, border: '1px solid black'}}>
      <Link>
            PHỤ KIỆN
        </Link>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Category;