import React from 'react';
import scratch1 from '../image/Scratch_Course_icon.png';
import scratchimg from '../image/scratch_image.png';
import './Scratch_course.css'

function Scratch_course() {
    return (
        <div className='Scratch_component'>
            
<div className='scratch_div'>

<p className='scratch_text'>Scratch Programming <br></br>For Kids</p>
<p className='scratch_description'>Scratch is a kid's programming language developed at MIT. Using virtual "blocks" rather than text, kids learn the logic of coding, 
complete fun projects and build a strong basis for future learning.

</p>
<img className='scratch_icon' src={scratch1}></img>
<p className='starting_from_scrath'>Begining from Scratch</p>
<p className='scratch_course_detail'> Fundamentals of coding || Design & Developement || App & Game Development</p>

</div>
<div className='scratch_image'><img className='scratch_img' src={scratchimg}></img></div>

<div className='scratch_button'>
<button className='scratch_course_details'>Course Detail</button>
<button className='scratch_course_signup'>Sign Up</button>
</div>
        </div>
    )
}

export default Scratch_course
