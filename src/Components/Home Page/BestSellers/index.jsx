import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
function BestSellers() {
  return (
    <div className="container" style={{height: 569}}>
        <div className="container" style={{marginTop: 50}}>
          <div className="row">
            <div className="col-md-12">
              <h1 style={{textAlign: 'center'}}>
                TOP SẢN PHẨM BÁN CHẠY
              </h1>
            </div>
          </div>
        </div>

        <div className="container" style={{width: 135, border: '2px solid #f97e6c', marginTop: 20}}></div>
        
        <div className="container" style={{width: 650, marginTop: 50}}>
            <div className="row">
                <div className="col-md-4" style={{width: 178, border: '1px solid #D9D9D9', backgroundColor: '#D9D9D9'}}>
                    <Link id='decal' href style={{textDecoration: 'none'}}>
                        <h4 style={{color: 'black', textAlign: 'center', marginTop: 5}}>
                            Áo thun
                        </h4>
                    </Link>
                </div>

                <div className="col-md-4" style={{width: 178, marginLeft: '57.2px', border: '1px solid #D9D9D9', backgroundColor: '#D9D9D9'}}>
                    <Link href style={{textDecoration: 'none'}}>
                        <h4 style={{color: 'black', textAlign: 'center', marginTop: 5}}>
                            Áo Khoác
                        </h4>
                    </Link>
                </div>

                <div className="col-md-4" style={{width: 178, marginLeft: '57.2px', border: '1px solid #D9D9D9', backgroundColor: '#D9D9D9'}}>
                    <Link href style={{textDecoration: 'none'}}>
                        <h4 style={{color: 'black', textAlign: 'center', marginTop: 5}}>
                            Quần dài
                        </h4>
                    </Link>
                </div>
            </div>
        </div>

        <div className="container" id="sanpham" style={{marginTop: 50}}>
            <div className="row">
                <div className="col-md-3" style={{width: 300, textAlign: 'center', marginLeft: 35}}>
                    <Link href>
                        <img src="images/ao khoac.png" alt style={{width: 250, height: 350, border: '1px solid rgb(255, 0, 43)'}} />
                    </Link>
                    <Link href style={{textDecoration: 'none'}}>
                        <h4 style={{textAlign: 'center', fontSize: '16pt', marginTop: 10}}>
                            Áo thun nam
                        </h4>
                    </Link>
                    <Link href style={{textDecoration: 'none'}}>
                        <h4 style={{textAlign: 'center', fontSize: '16pt', marginTop: 10, color: '#E9801F;'}}>
                            500.000đ
                        </h4>
                    </Link>
                </div>
            </div>
    </div>
</div>
  )
}

export default BestSellers