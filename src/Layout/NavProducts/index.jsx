import React from 'react'
import { Link } from 'react-router-dom'

function NavProducts() {
  return (
    <div>
        <header-small>
  <div className="col-md-6" style={{height: 18}}>
    <ul style={{listStyle: 'none', display: 'flex', marginTop: 47, marginBottom: 34, fontWeight: 'bold', whiteSpace: 'nowrap', fontFamily: 'Podkova'}}>
      <li>
        <Link  to="/FabFourFashion_AoPolo" style={{textDecoration: 'none', fontSize: 20, color: 'black'}}>
          Áo Polo
        </Link>
      </li>
      <li style={{marginLeft: 80}}>
        <Link  to="/FabFourFashion_AoNu" style={{textDecoration: 'none', fontSize: 20, color: 'black'}}>
          Áo Nam
        </Link>
      </li>
      <li style={{marginLeft: 80}}>
        <Link to="/FabFourFashion_AoSomi" style={{textDecoration: 'none', fontSize: 20, color: 'black'}}>
          Áo Nữ
        </Link>
      </li>
      <li style={{marginLeft: 80}}>
        <Link to="/FabFourFashion_AoThun" style={{textDecoration: 'none', fontSize: 20, color: 'black'}}>
          Áo thun
        </Link>
      </li>
      <li style={{marginLeft: 80}}>
        <Link  to="/FabFourFashion_AoSomi" style={{textDecoration: 'none', fontSize: 40, color: 'black'}}>
          ÁO SƠ MI
        </Link>
      </li>
      <li style={{marginLeft: 80}}>
        <Link to="/FabFourFashion_AoKhoac" style={{textDecoration: 'none', fontSize: 20, color: 'black'}}>
          Áo khoác
        </Link>
      </li>
      <li style={{marginLeft: 80}}>
        <Link  to="/FabFourFashion_Trouser" style={{textDecoration: 'none', fontSize: 20, color: 'black'}}>
          Quần dài
        </Link>
      </li>
      <li style={{marginLeft: 80}}>
        <Link to="/FabFourFashion_Shorts" style={{textDecoration: 'none', fontSize: 20, color: 'black'}}>
            Quần short
        </Link>
      </li>
      <li style={{marginLeft: 80}}>
        <Link to="/FabFourFashion_Accessories" style={{textDecoration: 'none', fontSize: 20, color: 'black'}}>
          Phụ kiện
        </Link>
      </li>
    </ul>
  </div>
  <div className="col-md-3">
  </div>
  </header-small>
    </div>
  )
}

export default NavProducts