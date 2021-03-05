import React, { useState, useEffect } from "react";
import kid from "../video/blur videu.mp4";
import "./Home.css";
import teaching from "../image/teaching_principle.png";
import ourcourses from "../image/our_courses_app.png";
import scratch from "../image/scratch_course.png";
import ourstudent from "../image/student_work.png";
import Footer from "./Footer";
import teacher_led_ins from "../image/teacher_led_inst.png";
import project_based_learning from "../image/project_based_learning.png";
import small_group_class from "../image/small_group.png";
import emptydiv from "../image/emptydiv.png";
import increase from "../image/increase_thinking.png";
import Courseplan from "./Courseplan_basic";

import { db } from "./firebase";

import classes_1 from "../image/classes1to5.png";
import classes_6 from "../image/classes6to10.png";
import classes_11 from "../image/classes11to12.png";
import kid_learn_pic from "../image/kid_learning_pic.png";
import Testimonial from "./Testimonial";
import Schools from "./Schools";
import Parentreview from "./Parentreview";
import Bestined from "./Bestined";
import codefuture from "../image/code_future.png";
import appdev from "../image/app_dev_info.png";

import Scratch_course from "./Scratch_course";
import Appdev from "./Appdev";
import Counsell from "./Counsell";
import Courseplan_basic from "./Courseplan_basic";
import counsell_i from "../image/counsell.jpg";
import Standard from "./Standard";
import Premium from "./Premium";
import Bloom from "./Bloom";
import steve from "../image/steve.png";
import stevelogo from "../image/steve_logo.png";
import waves from "../image/waves.svg";
import rect from "../image/rectangular-block.svg";
import bloomchart1 from "../image/bloom_chart.png";
import Award from "./Award";
import Trusted from "./Trusted";
import pkid from "../image/child_parent.png";
import PhoneInput from "react-phone-number-input";
import { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import glob from "../image/globe.png";
import rock from "../image/rocket.png";
import cpink from "../image/c_pink.png";
import rivers from "../image/river.png";
import stars from "../image/star.png";
import codelogo from "../image/codejuni_logo.png";
import laptopsvg from "../image/laptop_course.svg";
import edu from "../image/edu.svg";
import globe_edu from "../image/globe_edu.svg";
import juni from "../image/juni_back.png";
import juni2 from "../image/juni_back2.png";
import codeback1 from "../image/code_back1.png";
import Counter from "./Counter";
import Ourcodeteacher from "./Ourcodeteacher";
import code_meet from '../image/meet_ourfaculty.png';
import Get_interested from "./Get_interested";


function Home() {
  const [tea, setTea] = useState(false);
  const [proj, setProj] = useState(false);
  const [smal, setSmal] = useState(false);
  const [plan1, setPlan1] = useState(0);
  const [basic, setBasic] = useState(1);
  const [value, setValue] = useState();
  var [length, setLength] = useState();

  // if (isValidPhoneNumber(value) === true) {
  //   setLength = value.length;
  // }

  const plan = [classes_1, classes_6, classes_11];
  function handleCls(index) {
    setBasic(index);
  }

  const handlePhone = (e) => {
    e.preventDefault();

    db.collection("phone")
      .add({
        phone: value,
      })
      .then(() => {
        alert("Your request has been submitted");
      })
      .catch((err) => {
        alert(err.message);
      });
    setValue("");
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 300) {
      setTea(true);
    } else {
      setTea(false);
    }

    if (window.scrollY >= 360) {
      setProj(true);
    } else {
      setProj(false);
    }

    if (window.scrollY >= 420) {
      setSmal(true);
    } else {
      setSmal(false);
    }
  });
  return (
    <div className="clr">




      {/* <button className='btm_joinb'>Join Now</button>
            <button className='btm_joins'>Join Now</button>
            <button className='btm_joinp'>Join Now</button> */}
      {/* <img className="globe" src={glob}></img>
      <img className="rocket" src={rock}></img> */}
      {/* <img className='cpink' src={cpink}></img> */}
      {/* <img className='cpink1' src={cpink}></img> */}
      {/* <img className="river" src={rivers}></img>
      <img className="stars" src={stars}></img> */}
      <img className="codelogo" src={codelogo}></img>

      <div className="">
        <div className="front_image"></div>
        {/* <div className='cfk'><span className='coding_color1'>C</span><span className='coding_color2'>O</span><span className='coding_color3'>D</span><span className='coding_color4'>I</span><span className='coding_color5'>N</span><span className='coding_color6'>G</span> <span className='coding_color7'>F</span><span className='coding_color8'>O</span><span className='coding_color9'>R</span> <span className='coding_color10'>K</span><span className='coding_color11'>I</span><span className='coding_color12'>D</span><span className='coding_color13'>S</span> </div> */}
        <div className="lci">
          Learn From #1 Coding Platform <br></br>For Kids{" "}
        </div>
        <div className="wtc">
          Let Your Child Feel the Journey of Coding With US,<br></br>We are
          Having Most Reputable Teacher across World
        </div>
        
          {/* <h1 className='free_counsell'>Book <span className='free'>Free</span> Counselling Session</h1>
<img src={counsell_i} className='counsell_image'></img>
<p className='free_counselling_para'>
    Book Any Course and get 2 free Counselling Session,from Our Mentors Having 10+ Years of Experience in Relevant Field. 
</p>
<button className='book_now_free'>Book Now</button> */}

      

        <img className="front_kid_parent" src={pkid}></img>
        {/* <img className='steve_logo' src={steve}></img> */}
        {/* <div className="inline_circle"></div> */}

        <p className="Enter_phone_number">Enter Your Phone Number</p>
        <div className="phone_region">
          <PhoneInput
            className="phone"
            international
            placeholder="Phone number"
            defaultCountry="US"
            value={value}
            onChange={setValue}
            maxLength={15}
          />
          <button className="phone_button" onClick={handlePhone}>
            Book a Free Class Now
          </button>
        </div>
      </div>

      {console.log(value)}

      {/* <div className="oval"></div>
        <div className="oval1"></div>
        <div className="moon"></div> */}

      <blockquote className="quote_div quote_div_bordered quoted">
        {/* <img src={steve}></img> */}
        <p className="quote_para">
          “I taught myself how to program computers when I was a kid, bought my
          first computer when I was 10, and sold my first commercial program
          when I was 12.”
        </p>
        <p className="quote_credit quote_para"> Elon Musk</p>
      </blockquote>
      {/* <div className='quote_div'> 
<p>"Whether you want to uncover the secrets of the universe, or you just want to pursue a career in the 21st century, basic computer programming is an essential skill to learn."</p>
 <p> - Stephen Hawking</p>
</div> */}
      <div className="our_courses_all">
        <span className="sp">O</span>
        <span className="sp">u</span>
        <span className="sp">r</span>
        &nbsp;&nbsp;
        <span className="sp">C</span>
        <span className="sp">o</span>
        <span className="sp">u</span>
        <span className="sp">r</span>
        <span className="sp">s</span>
        <span className="sp">es</span>
      </div>
      <div className="coding_champ_course">
        <Scratch_course></Scratch_course>
      </div>
      {/* <div className='juni_back'><img className='juni_bak' src={juni2}></img></div>
   <div className='juni_back2'><img className='juni_bak2' src={juni2}></img></div>
   <div className='juni_back3'><img className='juni_bak2' src={juni2}></img></div> */}
      <div className="code_back1">
        <img className="code_bak1" src={codeback1}></img>
      </div>
      <div className="code_back2">
        <img className="code_bak2" src={codeback1}></img>
      </div>
      <div className="code_back3">
        <img className="code_bak3" src={codeback1}></img>
      </div>
      <div className="code_back4">
        <img className="code_bak4" src={codeback1}></img>
      </div>

      {/* <div>

<Scratch_course></Scratch_course>
          <div className="app_dev_course">
            <Appdev></Appdev>
          </div>
          <div className="cousell_dev_course">
            <Counsell></Counsell>
          </div>
</div> */}

      <div>
        {/* 
<button onClick={()=> handleBasic(1)}>basic</button>
<button onClick={()=> handleBasic(2)}>standard</button>
<button onClick={()=> handleBasic(3)}>premium</button> */}
        <div className={basic === 1 ? "" : "handlebasic_div"}>
          <Courseplan_basic></Courseplan_basic>
        </div>
        <div className={basic === 2 ? "" : "handlebasic_div"}>
          <Standard></Standard>
        </div>
        <div className={basic === 3 ? "" : "handlebasic_div"}>
          <Premium></Premium>
        </div>
        <div className="all_plan_classes">
          <div
            className={basic === 1 ? "classes1to6w" : "classes1to6"}
            onClick={() => handleCls(1)}
          >
            Grade 1 to 6{" "}
          </div>
          <div
            className={basic === 2 ? "classes7to10w" : "classes7to10"}
            onClick={() => handleCls(2)}
          >
            {" "}
            Grade 7 to 10
          </div>
          <div
            className={basic === 3 ? "classes11to12w" : "classes11to12"}
            onClick={() => handleCls(3)}
          >
            {" "}
            Grade 11 to 12
          </div>

          <div></div>
          {/* <div className="bloom_chart1">
            <img className="tax_img" src={bloomchart1}></img>
          </div> */}

          {/* <div className='bloom_taxanomy'> <Bloom></Bloom></div> */}
        </div>

        {/* <div className='scratch_prog_kid'><img src={emptydiv}></img></div> */}
        {/* <div className='emptydiv_child'><img src={emptydiv}></img></div>
<div className='emptydiv_future'><img src={emptydiv}></img></div> */}
        {/* <div className='future_ready'>Our <span className='coding_color1'>Childs </span>Are <span className='coding_color2'>Future </span>& <span className='coding_color1'>Future</span> is <span className='coding_color2'>Coding</span></div>
<div className='job'>There are over half a million computer programming jobs in the India and the USA, <br></br>and those sectors are projected to continue to grow by 20% over the next ten years./</div> */}
        {/* <div className='increase_thinking'><img src={increase}></img></div> */}
        {/* <div className='app_dev2'><img src={appdev}></img></div> */}
        {/* <div className='our_courses'>Our <span className='coding_color1'>Courses</span> For <span className='coding_color2'>Students</span></div>
<div className='emptydiv_course'><img src={emptydiv}></img></div>
<div className='courses_basic'>
                
                
                <img className='classes1to5' src={plan[plan1]}></img></div>

<div className='emptydiv_courses'><img src={emptydiv}></img></div><div className='class_description'></div>
<button className='b_15'  onClick={handleClasses1}>CLASSES 1-5</button>
<div className='button_610'></div>
<button className='b_1112' onClick={handleClasses11}>CLASSES 11-12</button> */}

        {/* <div><img className="" src={teaching}/></div>
<div><img class="" src={ourcourses}/></div>
<div><img class="" src={scratch}/></div>
<div><img class="" src={ourstudent}/></div> */}
        {/* <div className='explore'><button className='explore_course'>Explore the course</button></div>
<div className='explore1'><button className='explore_course1'>Explore the course</button></div>
<div className={tea?'teacher_led':''}><img className='' src={teacher_led_ins}></img></div>
<div className={proj?'project_based_learn':''}><img className='' src={project_based_learning}></img></div>
<div className={smal?'small_group_class':''}><img src={small_group_class}></img></div>
<div className='Everyone'>Everyone Should Learn Coding.</div>
<iframe width="761" height="428" src="https://www.youtube.com/embed/IY7EsTnUSxY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
      </div>
{/* 
       */}
      

      
<div className='counter_home'><Counter></Counter></div>


{/* <div className="parent_reviewx">
        <h1>Parent Loves What we do</h1>

        <Schools></Schools>
        
      </div> */}

      <div className='new_trust'>
     
      
      
      <Trusted></Trusted></div>

<div className='school_review'>


<h1 className='parent_love'>Why Parent Love Us</h1>


<Schools></Schools></div>

      {/* <div>
        <Award></Award>
      </div> */}

      {/* <button className='b_610' onClick={handleClasses}>CLASSES 6-10</button> */}
      {/* <div className='e_div1'><img src={emptydiv}></img></div>
        {/* <div className='kid_learn_div'><img className='kid_learn_pic' src={kid_learn_pic}></img></div> */}
      {/* <div className='e_div2'><img src={emptydiv}></img></div>
      <div><Testimonial></Testimonial></div>
      <div><Schools></Schools></div>
      <div><Parentreview></Parentreview></div>
      <div><Bestined></Bestined></div>
      <div className='code_future'><img className='code_fu' src={codefuture}></img></div>
      <p className='codethefuture'>Ready To Code The Future <br></br> Book the future Now</p>
      <button className='btm_joinN'>Book Now</button> */}
<div className='our_teach_code1'><Ourcodeteacher></Ourcodeteacher></div>

    <div className='get_interested_div'><Get_interested></Get_interested></div>
     <div className='footer_home'><Footer></Footer></div>
    </div>
  );
}

export default Home;
