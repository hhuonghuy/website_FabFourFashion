import React from 'react'
import '../Cart/style.css'

function Cart() {
  return (
    <div>
  <div className="viewcart">
    <div style={{backgroundColor: '#D9D9D9', width: 1404, height: 45, marginLeft: '3%', marginTop: 'auto'}}>
      <h1 style={{position: 'absolute', fontSize: 20, marginLeft: 25, marginTop: 11, fontFamily: 'Podkova', fontWeight: 400}}>
        <a href style={{textDecoration: 'none', color: 'black'}}>
          <svg width={20} height={20} viewBox="0 0 37 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.2857 0L0 13.7143H4.57143V32H13.7143V22.8571H22.8571V32H32V13.5771L36.5714 13.7143L18.2857 0Z" fill="black" />
          </svg>
          / Thông tin giỏ hàng của bạn
        </a>
      </h1>
    </div>
    <div className="viewdetail" style={{marginTop: 20}}>
      {/* ô trái */}
      <div style={{width: 650, height: 410, marginLeft: '3%', float: 'left'}}>
        <h1 style={{fontFamily: 'Podkova', fontSize: 30, fontWeight: 400}}>CHI TIẾT ĐƠN HÀNG</h1>
        <hr />
        <div style={{display: 'flex'}}>
          <div style={{width: 253, height: 288, border: '1px solid black'}}>
            <img src style={{width: 252, height: 286}} />
          </div>
          <div style={{marginLeft: 20}}>
            <h1 style={{fontFamily: 'Podkova', fontSize: 20, fontWeight: 400, height: 60}}>Áo sơ mi tay cụt BlackWhite Pinamalisa dáng rộng no style</h1>
            <h1 style={{fontFamily: 'Podkova', fontSize: 20, fontWeight: 400, height: 60}}>42 - Size L</h1>
            <h1 style={{fontFamily: 'Podkova', fontSize: 20, fontWeight: 400, height: 60}}>Số lượng 1 </h1>
            <h1 style={{fontFamily: 'Podkova', fontSize: 20, fontWeight: 400, height: 60, display: 'flex', gap: 5}}>Giá sản phẩm: 
              <p style={{fontFamily: 'Podkova', fontSize: 20, fontWeight: 400, color: 'red'}}>330.000đ</p>
            </h1>
            <h1 style={{fontFamily: 'Podkova', fontSize: 20, fontWeight: 400, height: 60, display: 'flex', gap: 5}}>Tổng: 
              <p style={{fontFamily: 'Podkova', fontSize: 20, fontWeight: 400, color: 'red'}}>330.000đ</p>
            </h1>
          </div>
        </div>
      </div>
      {/* ô phải */}
      <div style={{width: 699, height: 650, marginLeft: 750}}>
        <h1 style={{fontFamily: 'Podkova', fontSize: 30, fontWeight: 400, height: 60}}>NGƯỜI MUA / NHẬN HÀNG</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="text" className="form-label" style={{fontFamily: 'Podkova', fontSize: 20, fontWeight: 400}}>Họ và tên</label>
            <input type="text" className="form-control" placeholder="Tên người nhận" style={{height: 45}} />
          </div>
          <div className="mb-3">
            <label htmlFor="number" className="form-label" style={{fontFamily: 'Podkova', fontSize: 20, fontWeight: 400}}>Điện thoại liên lạc</label>
            <input type="number" className="form-control" placeholder="Số điện thoại" style={{height: 45}} />
          </div>
          <div className="mb-3">
            <label htmlFor="text" className="form-label" style={{fontFamily: 'Podkova', fontSize: 20, fontWeight: 400}}>Nhận hàng tại nhà / công ty / bưu điện</label>
            <input type="text" className="form-control" placeholder="Địa chỉ nhận hàng" style={{height: 45}} />
          </div>
          <div className="mb-3">
            <label htmlFor="text" className="form-label" style={{fontFamily: 'Podkova', fontSize: 20, fontWeight: 400}}>Ghi chú</label>
            <input type="text" className="form-control" style={{height: 100}} />
          </div>
          <button type="submit" style={{width: 699, height: 60, backgroundColor: '#23CDF2', fontFamily: 'Podkova', fontSize: 25, fontWeight: 400}}>ĐẶT HÀNG</button>
          <button type="submit" style={{width: 699, height: 60, marginTop: 25, backgroundColor: '#FCD400', fontFamily: 'Podkova', fontSize: 25, fontWeight: 400, color: 'black'}}>CHỌN THÊM SẢN PHẨM KHÁC</button>
        </form>
      </div>
    </div>
  </div>
</div>

  )
}

export default Cart