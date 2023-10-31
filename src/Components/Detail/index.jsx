import React from 'react'

function Detail_Pro() {
  return (
    <div>
  <div className="container-fluid" style={{width: '100%', height: 402, border: '1px solid black', marginTop: '70px'}}>
    <div className="row">
      <div className="col-md-12">
        <img src="images/" className="w-100" alt="Responsive image" style={{height: 402}} />
      </div>
    </div>
  </div>
  
  <div className="container-fluid" style={{height: 732, marginTop: 50, marginBottom: 600}}>
    <div className="row">
      <div className="col-md-4" style={{width: 546, marginLeft: 70}}>
        <img src="/images/ao khoac.png" alt style={{width: 496, height: 712, border: '2px solid gainsboro'}} />
      </div>
      <div className="col-md-8" style={{width: 800, marginLeft: 55}}>
        <h4 style={{fontSize: '25pt', marginTop: 150}}>Áo polo MAX POWER tone đỏ đô sang - xịn - mịn</h4>
        <h4 style={{fontSize: '25pt', marginTop: 30}}>390.000đ</h4>
        <h4 style={{fontSize: '25pt', marginTop: 30}}>Size:</h4>
        <input type="checkbox" className="btn-check" id="btn-check-2-outlined" />
        <label className="btn btn-outline-secondary" htmlFor="btn-check-2-outlined" style={{width: 84, height: 79, fontSize: '30pt', marginTop: 15}}>
          M
        </label>
        <input type="checkbox" className="btn-check" id="btn-check-3-outlined" />
        <label className="btn btn-outline-secondary" htmlFor="btn-check-3-outlined" style={{width: 84, height: 79, fontSize: '30pt', marginLeft: 50, marginTop: 15}}>
          L
        </label>
        <input type="checkbox" className="btn-check" id="btn-check-4-outlined" />
        <label className="btn btn-outline-secondary" htmlFor="btn-check-4-outlined" style={{width: 84, height: 79, fontSize: '30pt', marginLeft: 50, marginTop: 15}}>
          XL
        </label>
        <br />
        <button className="butt" type="button" style={{width: 262, height: 73, marginTop: 70, fontSize: '17pt', backgroundColor: '#000000CF', color: 'white'}}>
          Thêm vào giỏ hàng
        </button>
        <button className="butt" type="button" style={{width: 262, height: 73, marginLeft: 50, fontSize: '17pt', backgroundColor: '#000000CF', color: 'white'}}>Mua ngay</button>
        <hr style={{marginTop: 50, border: '2px solid #0000005E'}} />
        <h4 style={{fontSize: '25pt', marginTop: 55}}>Chi tiết sản phẩm:</h4>
      </div>
      <div className="container-fluid" style={{marginTop: 30}}>
        <div className="row">
          <div className="col-md-4" style={{width: 546, marginLeft: 70}}>
            <img src="/images/ao khoac.png" alt style={{width: 220, height: '315.2px', border: '1px solid black', marginLeft: 15}} />
            <img src="/images/ao khoac.png" alt style={{width: 220, height: '315.2px', border: '1px solid black', marginLeft: 40}} />
            <img src="/images/ao khoac.png" alt style={{width: 247, height: 169, border: '1px solid black', marginTop: 10}} />
            <img src="/images/ao khoac.png" alt style={{width: 247, height: 169, border: '1px solid black', marginTop: 10, marginLeft: '1cqw'}} />
          </div>
          <div className="col-md-8" style={{width: 800, marginLeft: 55}}>
            <h4 style={{fontSize: '20pt'}}>
              Form áo OVERSIZE ÂU MỸ.
              <br />
              Nỉ bông Định lượng 380gsm Tag logo được gắn ở tay áo.
              <br />
              Tem chống hàng giả của SWE được may trong sườn áo.
              <br />
              Các bạn vui lòng tham khảo bảng size chart trước khi đặt hàng.
              <br />
              <br />
              * LƯU Ý: Hạn chế sử dụng máy sấy nhiệt cao để giữ form áo.
              <br />
              - Hướng dẫn bảo quản:
              <br />
              Không nên sử dụng chất tẩy mạnh, khuyến khích sử dụng nước xả quần áo.
              <br />
              Không phơi trực tiếp dưới ánh nắng mặt trời.
              <br />
              Khuyến khích giặt tay để đảm bảo chất lượng tốt nhất của sản phẩm.
              <br />
              Hạn chế treo sản phẩm bằng móc áo.
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Detail_Pro