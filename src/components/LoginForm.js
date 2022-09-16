import React from 'react'
import './LoginForm.css'
import {Link} from 'react-router-dom'

function LoginForm() {
  return (
    <div className='login'>
      <form className="cover">
          <div className='symbol'></div>
          <h4>Dashboard Kit</h4>
          <h1>Log In to Dashboard Kit</h1>
          <h6>Enter your email and password below</h6>
         <div className='email'>
            <label className='email_lbl'>EMAIL</label><br/>
            <input className='email_txt' type="text" placeholder='Email address' size="30" maxlength="50"/> <br/><br/>
         </div>
          <div className='password'>
            <label className='pswd_lbl'>PASSWORD</label><a className='a1'>Forgot password?</a><br/>
            <input type="password" placeholder='Password' size="30" maxlength="50" className='pswd_txt'/>
          </div>
         <Link to={'/dashboard'}> <button>Log In</button><br/></Link>
          <div className='signup'><label>Don't have an account?</label><a style={{color:'blue'}}>SignUp</a></div>
      </form>
    </div>
  )
}

export default LoginForm