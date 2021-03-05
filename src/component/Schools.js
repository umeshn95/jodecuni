import React from "react";

import rock from "../image/rocket.png";
import cpink from "../image/c_pink.png";
import rivers from "../image/river.png";
import stars from "../image/star.png";
import codelogo from "../image/codejuni_logo.png";
import "./School.scss";
import parentpic1 from "../image/parentpic1.png";
import $ from 'jquery'




const Parentlove = ({ src,classaboutname,name,classqualification,qualification,classaboutpara,para }) => {
  return (
    <div className='inner_about'>
    <div className= 'inner_about_image'>
      <img className="inner_about_img" src={src}></img>
    </div>
    <div className='inner_about_name'>{name}</div>

    <div className='about_quallification'>{qualification}</div>

    <div className='inner_about_para'>
     {para}
    </div>
    <div className="inner_about_design">"</div>
  </div>
  );
};










function Schools() {
  $("#slideshow > div:gt(0)").hide();

  setInterval(function() { 
    $('#slideshow > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(6000)
      .end()
      .appendTo('#slideshow');
  },  3000);

  return (
 

        <div className='margin_school'>
        <div id='slider'>
       <figure>

       <div className="outer_about">
    
{/* 2 */}



<div id="slideshow">
   <div>
   <div className="outer_about">
 <Parentlove

src= {parentpic1}
name='Dr Joseph Sharma'

qualification='Ph.D.,2007,MIT'

para=' I could not believe that programming can be learn in such a
          fun,enjoyable way,thals to codejuni for teaching wonderfully'




></Parentlove>

<Parentlove

src= {parentpic1}
name='Dr Joseph Sharma'

qualification='Ph.D.,2007,MIT'

para=' I could not believe that programming can be learn in such a
          fun,enjoyable way,thals to codejuni for teaching wonderfully'




></Parentlove>

<Parentlove

src= {parentpic1}
name='Dr Joseph Sharma'

qualification='Ph.D.,2007,MIT'

para=' I could not believe that programming can be learn in such a
          fun,enjoyable way,thals to codejuni for teaching wonderfully'




></Parentlove>
 </div>

   </div>
   <div>
 
   </div>
   <div>
  
   </div>
</div>






    </div>
       </figure>
            </div>




{/* responsive */}



<main>
        <div id="test-list">
          <section>
            <div className="top-box" />
            <img src="https://images.pexels.com/photos/1056475/pexels-photo-1056475.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Picture of Vivian Williams" />
            <div className="bottom-box">
              <blockquote>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
              </blockquote>
              <div className="test-details">
                <p><span>Vivian Williams</span><br />Los Angeles, CA</p>
              </div>
            </div>
          </section>
          <section>
            <div className="top-box" />
            <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Picture of Josie Anderson" />
            <div className="bottom-box">
              <blockquote>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
              </blockquote>
              <div className="test-details">
                <p><span>Josie Anderson</span><br />Raleigh, NC</p>
              </div>
            </div>
          </section>
          <section>
            <div className="top-box" />
            <img src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Picture of Jenny Smith" />
            <div className="bottom-box">
              <blockquote>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
              </blockquote>
              <div className="test-details">
                <p><span>Jenny Smith</span><br />Boise, ID</p>
              </div>
            </div>
          </section>
        </div>
      </main>




















        </div>
  );
}

export default Schools;
