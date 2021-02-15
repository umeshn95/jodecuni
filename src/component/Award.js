import React from 'react'
import './Award.css';
import awards from '../image/award.svg'

function Award() {
    return (
        <div className='Awards'>
            <div className='Award1'>
            <div className='desc_award'>
            <img src={awards}></img>
            
            <span className='ed_des'>Best Education Platform</span>
<p>National Education 2020</p>

            </div>
            </div>
            <div className='Award2'>
            
            <div className='desc_award'>
            <img src={awards}></img>
            
            <span className='ed_des'>Best Tech in Education</span>
<p>National Education 2020</p>

            </div>
            </div>
            <div className='Award3'>
            <div className='desc_award'>
            <img src={awards}></img>
            
            <span className='ed_des'>Best Curriculum Award</span>
<p>National Education 2020</p>

            </div>
            </div>
        </div>
    )
}

export default Award
