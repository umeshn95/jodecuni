import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import counsell from '../image/career_councel.png'
import './Counsell.css'
import { Link } from 'react-router-dom';
import Counsell1 from '../image/counsell_icon.png';
import Counsellimg from '../image/apj.png';

function Counsell() {
    return (
        <div>
            
            <div className='Counsell_component'>
            
            <div className='Counsell_div'>
            
            <p className='Counsell_text'>Counselling Program <br></br>For Every Students</p>
            <p className='Counsell_description'>Our beloved President APJ Abdul Kalam Sir said We have to direct the youth in the Right Direction to make dream of india true, The ignited minds of the youth is the most powerful resource on the Earth. I am convinced that the power of the youth, if properly directed, will bring about transformed humanity by meeting its challenges and bring peace and prosperity
            
            </p>
            <img className='Counsell_icon' src={Counsell1}></img>
            <p className='starting_from_counsell'>Career Roadmap</p>
            <p className='Counsell_course_detail'> Engineer Roadmap || Medical Roadmap || Commerce Roadmap || Sports Guidance</p>
            
            </div>
            <div className='Counsell_image'><img className='Counsell_img' src={Counsellimg}></img></div>
            
            <div className='Counsell_button'>
            <button className='Counsell_course_details'>Course Detail</button>
            <button className='Counsell_course_signup'>Sign Up</button>
            </div>
                    </div>
        </div>
    )
}

export default Counsell
