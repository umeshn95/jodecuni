import React,{useState} from 'react';
import './Signup.css';
import {Link} from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';
import { isValidPhoneNumber } from 'react-phone-number-input';


function Signup() {
    const [value, setValue] = useState()
    return (
        <div>
            <section className='login_user'>
<div className='login_main'>
<div className='login_message'>
<Link to='/'><div className='codercubsL' ><span className='C_color'>C</span><span className='o_color'>o</span><span className='d_color'>d</span><span className='e_color'>e</span><span className='r_color'>J</span><span className='c_color'>u</span><span className='u_color'>n</span><span className='b_color'>i</span><span className='s_color'></span></div></Link> 
<div className='linux_quote'>

    <p>“Talk is cheap. Show me the code.”</p>
</div>
</div>
<div className='login_form'>
<div className='login_content'>
    <div className='signin_form'>
<h1>Sign Up your CodeJuni account</h1>
<hr></hr>
<h5>Enter Your Phone number to create CodeJuni account</h5>
<form>
<div className='form_field'>
<PhoneInput
 className='phoneS'
 international
      placeholder="Phone number"
      defaultCountry="US"
      value={value}
      onChange={setValue}
      maxLength={15}
     


      /> 
</div>
<div className='btn_group'>
<small className='forgot_text'>Forgot Your Password?</small>
<button className='primary_right'>
<div>
    <span>Log In</span>
    <div className='icon chevron right'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.59 2.67"><g id="864b3fd1-e248-493a-8000-ae86e83625bd" data-name="Layer 2"><g id="0c5420f3-65c4-44c9-8853-62ba56d8e86e" data-name="Layer 1"><polyline points="4.42 0.23 2.32 2.32 0.18 0.18" ></polyline></g></g></svg>
        
    </div>
</div>
</button>

</div>
</form>
    </div>
</div>
</div>
</div>

           </section>

        </div>
    )
}

export default Signup
