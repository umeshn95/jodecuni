import React, { useState } from "react";
import scratch1 from "../image/Scratch_Course_icon.png";

import "./Scratch_course.scss";
import scratchimg from "../image/scratch_image.png";

function Scratch_course() {






  
  return (
    //         <div className='Scratch_component'>

    // <div className='scratch_div'>

    // <p className='scratch_text'>Coding Champ(Grade 1 to 6)</p>
    // <p className='scratch_description'>Scratch is a kid's programming language developed at MIT. Using virtual "blocks" rather than text, kids learn the logic of coding.

    // </p>
    // <img className='scratch_icon' src={scratch1}></img>
    // <p className='starting_from_scrath'>Begining from Scratch</p>
    // <p className='scratch_course_detail'> || Fundamentals of coding ||</p>

    // </div>
    // <div className='scratch_image'><img className='scratch_img' src={scratchimg}></img></div>

    // <div className='scratch_button'>
    // <button className='scratch_course_details'>Course Detail</button>
    // <button className='scratch_course_signup'>Sign Up</button>
    // </div>
    //         </div>

    //

    // new layout
    <>
      <div className="scratch_newlayout">

      
        <div className="blog_post">
          <div className="blog_post_img">
            <img src={scratchimg}></img>
          </div>

          <div className="blog_post_info">
            <div className="blog_post_date">
              <span>Grade( 1 to 6)</span>
              <span>Scratch Programming</span>
              <h1 className="blog_post_title">Coding Champ</h1>
              <p className="blog_post_text">
                Scratch is a kid's programming language developed at MIT. Using
                virtual "blocks" rather than text, kids learn the logic of
                coding.
              </p>

              <a href="#" className="blog_post_cta">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <section>
        <div className="scratch_newlayout1">
          <div className="blog_post_reverse">
            <div className="blog_post_img1">
              <img src={scratchimg}></img>
            </div>

            <div className="blog_post_info">
              <div className="blog_post_date">
                <span>Grade( 1 to 6)</span>
                <span>Scratch Programming</span>
                <h1 className="blog_post_title">Coding Champ</h1>
                <p className="blog_post_text">
                  Scratch is a kid's programming language developed at MIT.
                  Using virtual "blocks" rather than text, kids learn the logic
                  of coding.
                </p>

                <a href="#" className="blog_post_cta">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="scratch_newlayout2">
          <div className="blog_post">
            <div className="blog_post_img">
              <img src={scratchimg}></img>
            </div>

            <div className="blog_post_info">
              <div className="blog_post_date">
                <span>Grade( 1 to 6)</span>
                <span>Scratch Programming</span>
                <h1 className="blog_post_title">Coding Champ</h1>
                <p className="blog_post_text">
                  Scratch is a kid's programming language developed at MIT.
                  Using virtual "blocks" rather than text, kids learn the logic
                  of coding.
                </p>

                <a href="#" className="blog_post_cta">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}


      

  <div className='scrollmenu'>

  <div className="course_main">
      <h1>Our Courses</h1>
        <ul className="course_course_cards">
          <li className="course_course_cards_item">
            <div className="course_card">
              <div className="course_card_image"><img src="https://picsum.photos/500/300/?image=2" /></div>
              <div className="course_card_content">
                <h2 className="course_card_title">course_card Grid Layout</h2>
                <p className="course_card_text">Demo of pixel perfect pure CSS simple responsive course_card grid layout</p>
                <button className="course_btn course_card_course_btn">Read More</button>
              </div>
            </div>
          </li>
        </ul>
        <ul className="course_course_cards">
          <li className="course_course_cards_item">
            <div className="course_card">
              <div className="course_card_image"><img src="https://picsum.photos/500/300/?image=2" /></div>
              <div className="course_card_content">
                <h2 className="course_card_title">course_card Grid Layout</h2>
                <p className="course_card_text">Demo of pixel perfect pure CSS simple responsive course_card grid layout</p>
                <button className="course_btn course_card_course_btn">Read More</button>
              </div>
            </div>
          </li>
        </ul>

        <ul className="course_course_cards">
          <li className="course_course_cards_item">
            <div className="course_card">
              <div className="course_card_image"><img src="https://picsum.photos/500/300/?image=2" /></div>
              <div className="course_card_content">
                <h2 className="course_card_title">course_card Grid Layout</h2>
                <p className="course_card_text">Demo of pixel perfect pure CSS simple responsive course_card grid layout</p>
                <button className="course_btn course_card_course_btn">Read More</button>
              </div>
            </div>
          </li>
        </ul>
      </div>

  </div>


    </>
  );
}

export default Scratch_course;
