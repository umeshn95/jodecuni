import React from 'react'
import dps from '../image/dps_logo.png';
import './Parentreview.css'

function Parentreview() {
    return (
        <div className='parent_review'>
            <div className='parent_1'><img className='parent_img1' src={dps}></img></div>
            <div className='parent_1t'><p>lorem ipsum</p></div>
            <div className='parent_2'><img className='parent_img2' src={dps}></img></div>
            <div className='parent_2t'><p>lorem ipsum</p></div>
            <div className='parent_3'><img className='parent_img3' src={dps}></img></div>
            <div className='parent_3t'><p>lorem ipsum</p></div>
            
        </div>
    )
}

export default Parentreview
