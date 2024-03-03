import React from 'react'
import logo from '../assets/images/logo.png'
import image1 from '../assets/images/image1.png'
import password from '../assets/images/password.png'
import eye from '../assets/images/eye.png'
import email from '../assets/images/email.png'
import './Login.css'
import { Group } from '../assets'
const Login = () => {
  return (
    <>
      <div className='login-page  d-md-flex '>
        <div className='login-page-left'>
          <div className='logo'>
            <a href='#'>
              <img src={logo} alt='logo'></img>
            </a>
          </div>
          <h1 className='pt-4'>Log into your account.</h1>
          <p className='pb-3'>Enter your Email ID and Password to Login</p>
          <form>
            <div className='email'>
              <img src={email} className='email-image' />
              <input type="email" className="form-control form-control-lg my-3 pe-5" id="exampleFormControlInput1" placeholder="Email Address" />
            </div>
            <div className='password'>
              <img src={password} className='password-image' />
              <input type="password" id="inputPassword5" className="form-control form-control-lg my-3 pe-5" aria-describedby="passwordHelpBlock" placeholder='Password' />
              <img src={eye} className='eye-image' /></div>
            <div id="passwordHelpBlock" className="form-text text-end mb-3 ">
              <a href='#' className='text-decoration-none forget-password'>Forgot Password?</a>
            </div>
            <div className='login text-center py-1 my-3 '>
              <a href='#' className='text-decoration-none '>LOG IN</a>
            </div>
            <div className="form-text text-center ">Don’t have your account ? <a href='#' className='text-decoration-none form-text sign-up '>Sign UP</a></div>
          </form>
        </div>
        {/* <div>
          <img src={Group}></img>
        </div> */}
        <div className='login-page-right d-flex flex-column justify-content-center align items-center'>
        <div className='image1'>
        <img src={image1} alt='image1'></img>
        </div>
        <div className='heading-health'><span>H</span>ealth <span>A</span>ccessible in <span>N</span>eed and <span>U</span>tility for <span>MAN</span>kind</div>
      </div>
      </div>
    </>
  )
}

export default Login
