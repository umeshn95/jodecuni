// import React from 'react'
// import { Link } from 'react-router-dom';
// import './Login.css'

// function Login() {
//     return (
       
//             <div>
//            <section className='login_user'>
// <div className='login_main'>
// <div className='login_message'>
// <Link to='/'><div className='codercubsL' ><span className='C_color'>C</span><span className='o_color'>o</span><span className='d_color'>d</span><span className='e_color'>e</span><span className='r_color'>J</span><span className='c_color'>u</span><span className='u_color'>n</span><span className='b_color'>i</span><span className='s_color'></span></div></Link> 
// <div className='linux_quote'>

//     <p>“Talk is cheap. Show me the code.”</p>
// </div>
// </div>
// <div className='login_form'>
// <div className='login_content'>
//     <div className='signin_form'>
// <h1>Sign into your CodeJuni account</h1>
// <hr></hr>
// <form>
// <div className='form_field'>
// <div className='form_field_icon'>

//     <span className='icon_mail'></span>
    
// </div>
// <input type="text" name="email" placeholder="Enter your email" value=""></input>
// </div>


// <div className='form_field'>
// <div className='form_field_icon'>

//     <span className='icon_mail'></span>
    
// </div>
// <input type="text" name="password" placeholder="Enter your Password" value=""></input>
// </div>
// <div className='btn_group'>
// <small className='forgot_text'>Forgot Your Password?</small>
// <button className='primary_right'>
// <div>
//     <span>Log In</span>
//     <div className='icon chevron right'>
//     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.59 2.67"><g id="864b3fd1-e248-493a-8000-ae86e83625bd" data-name="Layer 2"><g id="0c5420f3-65c4-44c9-8853-62ba56d8e86e" data-name="Layer 1"><polyline points="4.42 0.23 2.32 2.32 0.18 0.18" ></polyline></g></g></svg>
        
//     </div>
// </div>
// </button>

// </div>
// </form>
//     </div>
// </div>
// </div>
// </div>

//            </section>
//         </div>
       
//     )
// }

// export default Login


   

    
import React from 'react';
import './Login.css';
import registerimg from '../image/register.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFastBackward, faLock, faUser } from '@fortawesome/free-solid-svg-icons';


function Login() {
//   const sign_in_btn = document.querySelector("#sign-in-btn");
// const sign_up_btn = document.querySelector("#sign-up-btn");
// const container = document.querySelector(".container");

// sign_up_btn.addEventListener("click", () => {
//   container.classList.add("sign-up-mode");
// });

// sign_in_btn.addEventListener("click", () => {
//   container.classList.remove("sign-up-mode");
// });
const handleSignup =()=>{
  document.querySelector(".container").classList.add("sign-up-mode")
}

const handleSignin =()=>{
  document.querySelector(".container").classList.remove("sign-up-mode")
}


  return (
    <div>
       <div class="container sign-up-mode  ">
      <div class="forms-container">
        <div class="signin-signup">
          <form action="#" class="sign-in-form">
            <h2 class="title">Sign in</h2>
            <div class="input-field">
            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
              <input type="text" placeholder="Username" />
            </div>
            <div class="input-field">
              <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" class="btn solid" />
            <p class="social-text">Or Sign in with social platforms</p>
            <div class="social-media">
              <a href="#" class="social-icon">
              <FontAwesomeIcon icon={faFastBackward}></FontAwesomeIcon>
              </a>
              <a href="#" class="social-icon">
              <FontAwesomeIcon icon={'twitter'}></FontAwesomeIcon>
              </a>
              <a href="#" class="social-icon">
              <FontAwesomeIcon icon={'google'}></FontAwesomeIcon>
              </a>
              <a href="#" class="social-icon">
              <FontAwesomeIcon icon={'linkedin-in'}></FontAwesomeIcon>
              </a>
            </div>
          </form>
          <form action="#" class="sign-up-form">
            <h2 class="title">Sign up</h2>
            <div class="input-field">
              <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
              <input type="text" placeholder="Username" />
            </div>
            <div class="input-field">
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
              <input type="email" placeholder="Email" />
            </div>
            <div class="input-field">
             <FontAwesomeIcon icon={faLock}></FontAwesomeIcon>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" class="btn" value="Sign up" />
            <p class="social-text">Or Sign up with social platforms</p>
            <div class="social-media">
              <a href="#" class="social-icon">
                
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-google"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button class="btn transparent" id="sign-up-btn" onClick={handleSignup}>
              Sign up
            </button>
          </div>
          <img src="img/log.svg" class="image" alt="" />
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button class="btn transparent" id="sign-in-btn" onClick={handleSignin}>
              Sign in
            </button>
          </div>
          <img src={registerimg} class="image" alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Login
