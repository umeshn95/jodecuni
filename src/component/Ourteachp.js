import React from 'react'
import ourteach from '../image/our_teach.png';
import Footer from './Footer';
import Navbar from './Navbar';
import './Ourteach.css';


function Ourteachp() {
    return (
        <div>
            <Navbar></Navbar>
            <div className='ourteach1'><img src={ourteach}></img></div>
            <h1 className='our_teachphil'>OUR TEACHING
PHILOSOPHY</h1>
            <Footer></Footer>
        </div>
    )
}

export default Ourteachp
