import React from 'react';
import Award from '../image/award.png';
import './Bestined.css'

function Bestined() {
    return (
        <div className='award_div'>
        <div className='award1'> <img className='award_img1' src={Award}></img><h1>Best</h1></div>
        <div className='award2'> <img className='award_img2' src={Award}></img><h1>Best</h1></div> 
        <div className='award3'> <img className='award_img3' src={Award}></img><h1>Best</h1></div> 
        </div>
    )
}

export default Bestined
