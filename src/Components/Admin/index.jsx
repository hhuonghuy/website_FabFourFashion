import React from 'react'
import '../Admin/style.css'

function Admin() {
  return (
    <div>
        <nav-cart className="nav-filter">
  {/* ô trái */}
  <ul className="nav flex-column" style={{display: 'flex', width: 365, height: 603, backgroundColor: '#0D0441', float: 'left'}}>
    <li className="nav-item">
      <a className="nav-link" href="#" style={{color: 'white', fontSize: 30, fontWeight: 400, fontFamily: 'Podkova', marginTop: 15}}>
        <svg width={80} height={80} viewBox="0 0 156 156" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx={78} cy={65} r="19.5" stroke="white" strokeOpacity="0.8" strokeLinecap="round" />
          <circle cx={78} cy={78} r="58.5" stroke="white" strokeOpacity="0.8" />
          <path d="M117 121.588C114.7 114.678 109.631 108.571 102.579 104.216C95.5278 99.8607 86.8881 97.5 78 97.5C69.1119 97.5 60.4722 99.8607 53.4208 104.216C46.3694 108.571 41.3004 114.678 39 121.588" stroke="white" strokeOpacity="0.8" strokeLinecap="round" />
        </svg>
        Tên Nhân Viên</a>
    </li>
    <hr style={{color: 'white', height: 20}} />
    <li className="nav-item">
      <a className="nav-link" href="#" style={{color: 'white', fontSize: 30, fontWeight: 400, fontFamily: 'Podkova', height: 110}}>
        <svg width={85} height={85} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M129.167 41.6666C140.87 41.6666 146.722 41.6666 150.926 44.4755C152.746 45.6914 154.308 47.254 155.524 49.0738C158.333 53.2775 158.333 59.1294 158.333 70.8333V150C158.333 165.713 158.333 173.57 153.452 178.452C148.57 183.333 140.713 183.333 125 183.333H74.9998C59.2864 183.333 51.4296 183.333 46.5481 178.452C41.6665 173.57 41.6665 165.713 41.6665 150V70.8333C41.6665 59.1294 41.6665 53.2775 44.4753 49.0738C45.6913 47.254 47.2538 45.6914 49.0737 44.4755C53.2774 41.6666 59.1293 41.6666 70.8332 41.6666" stroke="white" strokeWidth={2} />
          <path d="M75 41.6667C75 32.4619 82.4619 25 91.6667 25H108.333C117.538 25 125 32.4619 125 41.6667C125 50.8714 117.538 58.3333 108.333 58.3333H91.6667C82.4619 58.3333 75 50.8714 75 41.6667Z" stroke="white" strokeWidth={2} />
          <path d="M75 100L125 100" stroke="white" strokeWidth={2} strokeLinecap="round" />
          <path d="M75 133.333L108.333 133.333" stroke="white" strokeWidth={2} strokeLinecap="round" />
        </svg>
        Danh mục</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#" style={{color: 'white', fontSize: 30, fontWeight: 400, fontFamily: 'Podkova', height: 110}}>
        <svg width={85} height={85} viewBox="0 0 200 222" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 76C25 75.0572 25 74.5858 25.2929 74.2929C25.5858 74 26.0572 74 27 74H173C173.943 74 174.414 74 174.707 74.2929C175 74.5858 175 75.0572 175 76V118.25C175 119.193 175 119.664 174.707 119.957C174.414 120.25 173.943 120.25 173 120.25H152C151.057 120.25 150.586 120.25 150.293 120.543C150 120.836 150 121.307 150 122.25V183C150 183.943 150 184.414 149.707 184.707C149.414 185 148.943 185 148 185H52C51.0572 185 50.5858 185 50.2929 184.707C50 184.414 50 183.943 50 183V122.25C50 121.307 50 120.836 49.7071 120.543C49.4142 120.25 48.9428 120.25 48 120.25H27C26.0572 120.25 25.5858 120.25 25.2929 119.957C25 119.664 25 119.193 25 118.25V76Z" stroke="white" />
          <path d="M41.6665 120.25H158.333" stroke="white" strokeLinecap="round" />
          <path d="M100 64.75L100 185" stroke="white" strokeLinecap="round" />
          <path d="M99.9998 64.75L80.9804 43.6384C79.7889 42.3159 78.2943 41.3023 76.6249 40.6846L44.3605 28.7468C43.0544 28.2635 41.6665 29.2298 41.6665 30.6225V63.3575C41.6665 64.1944 42.1876 64.9428 42.9725 65.2332L66.6665 74" stroke="white" strokeLinecap="round" />
          <path d="M100 64.75L119.02 43.6384C120.211 42.3159 121.706 41.3023 123.375 40.6846L155.639 28.7468C156.946 28.2635 158.333 29.2298 158.333 30.6225V63.3575C158.333 64.1944 157.812 64.9428 157.028 65.2332L133.333 74" stroke="white" strokeLinecap="round" />
        </svg>
        Sản phẩm</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#" style={{color: 'white', fontSize: 30, fontWeight: 400, fontFamily: 'Podkova', height: 110}}>
        <svg width={85} height={85} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M83.3335 125L83.3335 100" stroke="white" strokeWidth={2} strokeLinecap="round" />
          <path d="M66.6667 41.6667L50 75M133.333 41.6667L150 75" stroke="white" strokeWidth={2} strokeLinecap="round" />
          <path d="M116.667 125L116.667 100" stroke="white" strokeWidth={2} strokeLinecap="round" />
          <path d="M25 75H38.6905C40.1242 75 40.841 75 41.3725 75.3954C41.9039 75.7908 42.1099 76.4774 42.5218 77.8506L65.8115 155.483C66.2234 156.856 66.4294 157.543 66.9609 157.938C67.4923 158.333 68.2091 158.333 69.6428 158.333H130.357C131.791 158.333 132.508 158.333 133.039 157.938C133.571 157.543 133.777 156.856 134.189 155.483L157.478 77.8506C157.89 76.4774 158.096 75.7908 158.628 75.3954C159.159 75 159.876 75 161.309 75H175" stroke="white" strokeWidth={2} strokeLinecap="round" />
          <path d="M25 75L175 75" stroke="white" strokeWidth={2} strokeLinecap="round" />
        </svg>
        Đơn hàng</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#" style={{color: 'white', fontSize: 30, fontWeight: 400, fontFamily: 'Podkova', height: 110}}>
        <svg width={85} height={85} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="99.9998" cy="66.6666" r="32.8333" stroke="white" strokeLinecap="round" />
          <path d="M51.9476 115.623C53.2897 113.597 55.5814 112.5 58.0117 112.5H141.988C144.419 112.5 146.71 113.597 148.052 115.623C152.521 122.369 162.205 139.486 162.493 161.494C162.501 162.047 162.052 162.5 161.5 162.5H38.5C37.9477 162.5 37.4994 162.047 37.5066 161.494C37.7952 139.486 47.4791 122.369 51.9476 115.623Z" stroke="white" strokeLinecap="round" />
        </svg>
        Khách hàng</a>
    </li>
  </ul>
  {/* ô phải */}
  <div className="information" style={{border: '1px solid white', height: 560}}>
    <h1 style={{fontFamily: 'Podkova', fontSize: 35, fontWeight: 400, textAlign: 'center', marginTop: 105}}>Thông tin chi tiết đơn hàng</h1>
    <ul className="list-groups" style={{textAlign: 'center'}}>
      <li style={{justifyContent: 'center', display: 'flex', fontFamily: 'Podkova', gap: 200, fontWeight: 400, height: 35, marginTop: 30}}>
        <h2 style={{fontSize: 22}}>Tên sản phẩm</h2>
        <h2 style={{fontSize: 22}}>Số lượng</h2>
        <h2 style={{fontSize: 22}}>Đơn giá</h2>
        <h2 style={{fontSize: 22}}>Thành tiền</h2>
      </li>
      <hr style={{width: 1080, marginLeft: 350}} />
      <li style={{justifyContent: 'center', display: 'flex', fontFamily: 'Podkova', gap: 200, fontWeight: 400, height: 35, marginTop: 30}}>
        <h2 style={{fontSize: 22}}>Tên sản phẩm</h2>
        <h2 style={{fontSize: 22}}>Số lượng</h2>
        <h2 style={{fontSize: 22}}>Đơn giá</h2>
        <h2 style={{fontSize: 22}}>Thành tiền</h2>
      </li>
      <hr style={{width: 1080, marginLeft: 350}} />
      <li style={{justifyContent: 'center', display: 'flex', fontFamily: 'Podkova', gap: 200, fontWeight: 400, height: 35, marginTop: 30}}>
        <h2 style={{fontSize: 22}}>Tên sản phẩm</h2>
        <h2 style={{fontSize: 22}}>Số lượng</h2>
        <h2 style={{fontSize: 22}}>Đơn giá</h2>
        <h2 style={{fontSize: 22}}>Thành tiền</h2>
      </li>
      <hr style={{width: 1080, marginLeft: 350}} />
      <li style={{justifyContent: 'center', display: 'flex', fontFamily: 'Podkova', gap: 200, fontWeight: 400, height: 35, marginTop: 30}}>
        <h2 style={{fontSize: 22}}>Tên sản phẩm</h2>
        <h2 style={{fontSize: 22}}>Số lượng</h2>
        <h2 style={{fontSize: 22}}>Đơn giá</h2>
        <h2 style={{fontSize: 22}}>Thành tiền</h2>
      </li>
      <hr style={{width: 1080, marginLeft: 350}} />
      <li style={{justifyContent: 'center', display: 'flex', fontFamily: 'Podkova', gap: 590, fontWeight: 400, height: 35, marginTop: 30}}>
        <h2 style={{fontSize: 22}}>Trạng thái: chờ xác nhận</h2>
        <h2 style={{fontSize: 22}}>Tổng: 0đ</h2>
      </li>
    </ul>
  </div>
</nav-cart>
    </div>
  )
}

export default Admin