import React,{useState} from 'react';
import './Navbar.css'
// import logo from '../image/logoloop.PNG';
import { Link } from 'react-router-dom';
import courses from '../image/courses_popup.png';
import na from '../image/notch.png';
import ind from '../image/icons8-india-100.png'

import ReactFlagsSelect from 'react-flags-select';
import { Us } from 'react-flags-select';
import codej from '../image/codejuni_logo.png';
import $ from 'jquery';


function Navbar() {
    const [nav,setNav]=useState(false);
    const [bar,setBar]=useState(false);
    const [cou,setCou]=useState(false);
  

    // jquery
   



/* Please ❤ this if you like it! */

document.body.addEventListener("scroll", () => {
  
    if (document.body.scrollTop >= 150) {
      setBar(true);
    } else {
      setBar(false);
    }})



    
  

    return (
  <div className='view'>

{/* <div className='mobnav'>






       
<div className={bar?'newnavbar':'navbar'}>
           
           <div className=''>
   
           <div className={nav?'newnavbar':'navbar'}></div>
   <Link to='/'><div className='codercubs' >Code juni</div> 
   
   </Link>               
      
   <div className='navitem'><Link to='/home'><div className='hometooltip'>Home</div></Link>
   <Link to='/aboutus'><div className='abouttooltip1'>About   </div></Link>
   <Link to='/mentor'><div className='mentortooltip1'>Our Mentors</div></Link>
   <Link to='/courses'><div className={cou?'tooltip1':'tooltip'}>Courses<Link to='/champ'> <span class="tooltiptext">Coding Champ(Grade 1-6) <hr></hr><p className='scratch_color'>Coding Master(Grade 7-10)</p><hr></hr><p className='career_color'>Coding Pro(Grade 11-12)</p> </span></Link></div></Link>
   <Link to='/contact'><div className='contacttooltip1'>Contact</div></Link></div>
   <Link to='/login'><div className='contacttooltip1_login'>Login</div></Link>
   <Link to='/signup'><div className='contacttooltip1_signup'>Signup</div></Link>
   <Link to='/contact'><div ><button className='btn_joinNow'>Join Now</button></div></Link>




   
   
           </div>
   
           
   
       
           </div>
   
    

      </div>



      <div className='mobile_view'>



      </div> */}






      {/* responsive navbar */}

      <nav>
        <div id="logo">codejuni
          
           
          </div>

       <label for="drop" class="toggle tright">Menu</label>
        <input type="checkbox" id="drop" />
            <ul class="menu">
                <li><Link to="/home">Home</Link></li>
                <li>
                  
                    {/* <!-- First Tier Drop Down --> */}
                    <label for="drop-1" class="toggle coleft" style={{paddingLeft:'150px'}}>Courses</label>
                    <a href="#">Courses</a>
                    <input type="checkbox" id="drop-1"/>
                    <ul>
                        <li><a href="#">Coding Champ(Grade 1 to 6)</a></li>
                        <li><a href="#">Coding Master(Grade 7 to 10)</a></li>
                        <li><a href="#">Coding Pro(Grade 11 to 12)</a></li>
                    </ul> 

                </li>
                <li>

                {/* <!-- First Tier Drop Down --> */}
              
               
                <ul>
                   
                    <li>
                       
                    {/* <!-- Second Tier Drop Down -->         */}


                   
                    </li>
                </ul>
                </li>
               
                <li><a href="#">Academic Advisor</a></li>
                <li><Link to="/aboutus">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              <li class='log'><Link to="/login">Login</Link></li>
              <li class='sign'><Link to="/signup">SignUp</Link>
                
                
              </li>
            </ul>
        </nav>


     

  </div>



    )
}

export default Navbar
// {<span className='tooltiptext2'>Our Phillosophy<hr></hr><p className='scratch_color'>Our Team</p></span>}

{/* <span className='tooltiptext1'>About Us <hr></hr><Link to='/ourstory'><p className='scratch_color'>Our Story</p></Link> 
<hr></hr><p className='career_color'>Contact US</p> </span> */}