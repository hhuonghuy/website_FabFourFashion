import React from 'react'

function AoNu_Page() {
  return (
    <div>
        <div className="container" id="sanpham" style={{marginTop: 50}}>
    <div className="row-1">
      <div className="col-md-3" style={{width: 300, textAlign: 'center', marginLeft: 35}}>
      </div>
      <div className="col-md-3" style={{width: 300, textAlign: 'center', marginLeft: 10, fontFamily: 'Play'}}>
        <a href>
          <img src="images/aopolo.jpg" alt style={{width: 250, height: 350, border: '1px solid rgb(255, 0, 43)'}} />
        </a>
        <a href style={{textDecoration: 'none'}}>
          <h4 style={{textAlign: 'center', fontSize: '16pt', marginTop: 10}}>
            Áo thun nam
          </h4>
        </a>
        <a href style={{textDecoration: 'none'}}>
          <h4 style={{textAlign: 'center', fontSize: '16pt', marginTop: 10}}>
            500.000đ
          </h4>
        </a>
      </div>
    </div>
  </div>
</div>
  )
}

export default AoNu_Page