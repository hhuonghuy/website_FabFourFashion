import React from 'react'

function BannerNav() {
  return (
    <div>
        <div className="container-fluid" style={{width: '100%', height: '402px', border: '1px solid black'}}>
          <div className="row">
            <div className="col-md-12" style={{height: "402px"}}>
              <img src="images/" className="w-100" alt="Responsive image" style={{height: "402px"}} />
            </div>
          </div>
        </div>

        {/* CHÍNH SÁCH */}
        <div className="container-fluid" style={{backgroundColor: '#f5f5f5'}}>
  <div className="container">
    <div className="row">
      <div className="col-md-3" style={{height: "239px", marginTop: "15px"}}>
        <div className="img-policy">
          <img src="https://bizweb.dktcdn.net/100/438/171/themes/894887/assets/icon_service_1.svg?1676278465911" alt style={{width: '100%', height: 80}} />
        </div>
        <div className="text-policy" style={{marginTop: "30px"}}>
          <h3 style={{fontSize: '17pt', textAlign: 'center'}}>
            VẬN CHUYỂN TOÀN CẦU
          </h3>
          <h4 style={{fontSize: '12pt', textAlign: 'center', marginTop: "30px"}}>
            Chúng tôi miễn phí vận chuyển với tất cả các đơn hàng giá trị đến 2.000.000Đ
          </h4>
        </div>
      </div>
      <div className="col-md-3" style={{height: "239px", marginTop: "15px"}}>
        <div className="img-policy">
          <img src="https://bizweb.dktcdn.net/100/438/171/themes/894887/assets/icon_service_2.svg?1676278465911" alt style={{width: '100%', height: 80}} />
        </div>
        <div className="text-policy" style={{marginTop: "30px"}}>
          <h3 style={{fontSize: '17pt', textAlign: 'center'}}>
            HỖ TRỢ ONLINE 24/24
          </h3>
          <h4 style={{fontSize: '12pt', textAlign: 'center', marginTop: "30px"}}>
            Chúng tôi hỗ trợ khách hàng 24/24 tất cả các ngày trong tuần
          </h4>
        </div>
      </div>
      <div className="col-md-3" style={{height: "239px", marginTop: "15px"}}>
        <div className="img-policy">
          <img src="https://bizweb.dktcdn.net/100/438/171/themes/894887/assets/icon_service_3.svg?1676278465911" alt style={{width: '100%', height: 80}} />
        </div>
        <div className="text-policy" style={{marginTop: "30px"}}>
          <h3 style={{fontSize: '17pt', textAlign: 'center'}}>
            MIỄN PHÍ ĐỔI TRẢ
          </h3>
          <h4 style={{fontSize: '12pt', textAlign: 'center', marginTop: "30px"}}>
            Miễn phí đổi trả trong vòng 15 ngày đầu tiên áp dụng cho tất cả các mặt hàng
          </h4>
        </div>
      </div>
      <div className="col-md-3" style={{height: "239px", marginTop: "15px"}}>
        <div className="img-policy">
          <img src="https://bizweb.dktcdn.net/100/438/171/themes/894887/assets/icon_service_4.svg?1676278465911" className="img-fluid" style={{width: '100%', height: 80}} />
        </div>
        <div className="text-policy" style={{marginTop: "30px"}}>
          <h3 style={{fontSize: '17pt', textAlign: 'center'}}>
            QUÀ TẶNG HẤP DẪN
          </h3>
          <h4 style={{fontSize: '12pt', textAlign: 'center', marginTop: "30px"}}>
            Chương trình khuyến mãi cực lớn và hấp dẫn vào mỗi chủ nhật hàng tuần
          </h4>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default BannerNav;