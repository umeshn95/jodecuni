import React from 'react';
import './Appdev.css';

import Appdev1 from '../image/Appdevicon.png';
import Appdevimg from '../image/Appdevimg.png';

function Appdev() {
    return (
        <div className='App_dev_course'>
                      
<div className='Appdev_div'>

<p className='Appdev_text'>App Development <br></br>For Kids</p>
<p className='Appdev_description'>App Develedopment is a great way to learn coding! In this course, students create their own Apps and Website - learning essential tools, developing their skills and building confidence.
Our Courses are well organized and developed for kids,we focus on practical learning.
</p>
<img className='Appdev_icon' src={Appdev1}></img>
<p className='starting_from_App'>Starting from App dev.</p>
<p className='Appdev_course_detail'> Coding Foundation || Code For Developement || Pro WebApp Developement</p>

</div>
<div className='Appdev_image'><img className='Appdev_img' src={Appdevimg}></img></div>

<div className='Appdev_button'>
<button className='Appdev_course_details'>Course Detail</button>
<button className='Appdev_course_signup'>Sign Up</button>
</div>
  
        </div>
    )
}

export default Appdev
