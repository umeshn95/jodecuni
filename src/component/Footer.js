import React from 'react'
import './Footer.css'
import mobile from'../image/mobile-alt-solid.svg'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <div>
               <div className='footer'>
               <Link to='/'><div className='coderm'>Codermama</div></Link>
            <div className='Home_footer'>

            
            <Link to='/'>    <div className='home1'>Home</div></Link> 
<Link to='/how'><div className='how'>How It Works</div></Link>
<Link to='/whycode'><div className='why'>Why Coding </div></Link>
<Link to='/review'><div className='review'>Parent Review</div></Link>
<Link to='/review'><div className='review1'>Student Review</div></Link>
            </div>

<div className='courses_footer'>
<Link><div className='courses'>Courses</div></Link> 
<Link to='/how'><div className='dev_app'>Core App development for kids</div></Link>
<Link to='/web'><div className='web_app'>Core Web development for kids</div></Link>
<Link to='/how'><div className='Adev_app'>Advance App development for kids</div></Link>
<Link to='/web'><div className='Aweb_app'>Advance Web development for kids</div></Link>
<Link to='/whycode'><div className='prog_scratch'>Scratch programming for kids</div></Link>
<Link to='/review'><div className='counsell_career'>Career councselling for kids</div></Link>


</div>

<div className='About_footer'>


<Link to='/aboutus'><div className='about'>About</div></Link>

<Link to='/ourteachp'><div className='teac'>Our Teaching Phillosphy</div></Link>
<Link to='/mentor'><div className='team'>Our Team</div></Link>
<Link to='/Acadadvisor'><div className='Acad_advisor'>Academic Advisor</div></Link>
<Link to='/job'><div className='job1'>Job</div></Link>
<Link to='/contact'><div className='contact1'>Contact</div></Link>
</div>
<div className='support_center'>

<Link to='/'>    <div className='sc'>Support Center</div></Link> 
<Link to='/how'><div className='DI'>Download ISL</div></Link>
<Link to='/whycode'><div className='DA'>Download Anydesk </div></Link>
<Link to='/review'><div className='TV'>Download Team Viewer</div></Link>


</div>

<div className='location'>Location</div>

<div className='location1'>278,Ambikapuri Main Indore</div>
<div className='location2'><img src={mobile} width='10px'></img></div>
        <div className='mobile'>9540424976</div>  
        <div className='right'>© 2021. All Rights Reserved.</div>
          </div>
        
     
        </div>
    )
}

export default Footer
