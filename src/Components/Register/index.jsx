import React from 'react'

function Register() {
  return (
    <div className="container" style={{height: 700, border: '1px solid black', marginTop: 30, marginBottom: 30}}>
  <div className="row">
    <div className="col-6">
      <img src alt style={{width: 599, height: 691, border: '1px solid black'}} />
    </div>
    <div className="col-6">
      <h4 style={{fontSize: '30pt', textAlign: 'center', marginTop: 200}}>
        Đăng nhập
      </h4>
      <div className="form-floating mb-3" style={{marginTop: 30}}>
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
        <label htmlFor="floatingInput">Họ và tên:</label>
      </div>
      <div className="form-floating mb-3" style={{marginTop: 30}}>
        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
        <label htmlFor="floatingInput">Email:</label>
      </div>
      <div className="form-floating" style={{marginTop: 30}}>
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
        <label htmlFor="floatingPassword">Mật khẩu:</label>
      </div>
      <button type="button" style={{width: 130, height: 40, fontSize: '15pt', marginTop: 30, backgroundColor: 'black', color: 'white', textAlign: 'center'}}>
        Đăng ký
      </button>
    </div>
  </div>
</div>

  )
}

export default Register