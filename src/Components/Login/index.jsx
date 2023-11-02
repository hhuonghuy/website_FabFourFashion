import React from 'react'

function Login() {
  return (
    <div>
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
        <label htmlFor="floatingInput">Email:</label>
      </div>
      <div className="form-floating" style={{marginTop: 30}}>
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
        <label htmlFor="floatingPassword">Mật khẩu:</label>
      </div>
      <button type="button" style={{width: 130, height: 40, fontSize: '15pt', marginTop: 30, backgroundColor: 'black', color: 'white', textAlign: 'center'}}>
        Đăng nhập
      </button>
      <button type="button" style={{width: 170, height: 40, marginTop: 30, marginLeft: 330, backgroundColor: 'black', color: 'white', fontSize: '15pt', textAlign: 'center'}}>
        Quên mật khẩu?
      </button>
      <h4 style={{fontSize: '20pt', textAlign: 'center', marginTop: 50}}>
        Or login with
      </h4>
      <a href style={{textDecoration: 'none'}}>
        <img src="/images/facebook.png" alt style={{width: 55, height: 55, marginLeft: 230, marginTop: 20}} />
      </a>
      <a href style={{textDecoration: 'none'}}>
        <img src="/images/google.png" alt style={{width: 55, height: 55, marginLeft: 50, marginTop: 20}} />
      </a>
    </div>
  </div>
</div>
    </div>
  )
}

export default Login