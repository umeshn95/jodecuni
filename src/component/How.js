import React from 'react'
import Navbar from './Navbar'
import how from '../image/howitwork.jpg'
import Footer from './Footer';
import './How.css';
import howu from '../image/how_upper.png';

function How() {
    return (
        <div>
            <Navbar></Navbar>
            <div className='how1'><img className='howimage'src={how}></img></div>
            <div className='howu'><img className='howuimage'src={howu}></img></div>
            <p className='howwork'> How We Works</p>
            <p className='howtext'>Learning has no limits our kids are more Creative,<br></br>with Codermama’s teachers support,kids can build innovative projects<br></br>  that inspire imagination and develop creativity.<br></br>
            </p>
           
        </div>
    )
}

export default How
