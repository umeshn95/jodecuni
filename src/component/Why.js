import React from 'react'
import Navbar from './Navbar';
import why0 from '../image/why.png';
import why1 from '../image/whycode.png';
import why2 from '../image/whycode1.png';
import Footer from './Footer';
import './Why.css'

function Why() {
    return (
        <div>
            <Navbar></Navbar>
            <div className='whyz'><img className='whya_img'src={why0}></img></div>
            <div className='whya'><img className='whya_img'src={why1}></img></div>
            <div className='whyb'><img className='whyb_img'src={why2}></img></div>


        </div>
    )
  }

export default Why
