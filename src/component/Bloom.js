import React from 'react';
// import bloom from '../image/bloom_taxanomy.png';
import bloom2 from '../image/bloom_taxanomy2.png';
import './Bloom.css'


function Bloom() {
    return (
        <div>
            <div>

                {/* <img className='bloom' src={bloom}></img> */}
                <div className='bloom_taxanomy_text'>Our Curriculum is based on Bloom Taxanomy model which gradually enhance the Cognitive and Logical ability of Our child</div>
                <img className='bloom2' src={bloom2}></img>
            </div>
        </div>
    )
}

export default Bloom
