import React from 'react';
import './Courseplan.css';
import scratch_plan from '../image/scratch_plan.png';
import code_org from '../image/code_org.png'
import rupee from '../image/rupee-sign-solid.svg';
import App_lab from '../image/App_lab.png';
import Game_lab from '../image/game_lab.png';
import thunkable from '../image/thunkable.png'
import js from '../image/js_img.png';
import ltmh from'../image/html_css.png';
import vscode from '../image/vs_code.png';
import rect from '../image/react_img.png';
import Node from '../image/nodejs_img.png';
import scratchicon from '../image/scratch_plan.png';
import codeorg from '../image/code_org.png';
import Applab from '../image/App_lab.png';
import gamelab from '../image/game_lab.png';
import thunkableapp from '../image/thunkable.png';
import fire from '../image/firebase.png';
import javascript from '../image/js_img.png';
import vs from '../image/vs_code.png';
import html from '../image/html_css.png';
import './Standard.css'

function Standard(props) {
    return ( 
<div className='card_plan_upper'>

<div className='class1_5_fulldiv'>
 
 <div className='basic_internal_div'>
<div className='name_plan_basic'>BASIC</div>
<div className='plan_basics_of_coding1'>Introduction of Coding</div>
<div className='basic_curriculum'>CURRICULUM GLANCE</div>
<div className='syllabus_basic'>Sequential Programming,Conditional Statement & Loops, Data Visualization</div>
<div className='tools_basic'>TOOLS</div>
<div className='tool_main_div'>
<div className='tool_grid'>
<div className='tools_scratch'><img src={scratchicon} className='scratchimg'></img>&nbsp;&nbsp;<span >Scratch</span></div>
<div className='tools_codeorg'><img src={codeorg} className='scratchimg'></img>&nbsp;&nbsp;<span >Code.org</span></div>

</div>
</div>
<div className='project_basic'></div>
<div className='project_text_basic'>
    PROJECTS
</div>
<div className='project_des_div'>
<span className='project_des_div_span'>Portfolio App & many more</span>
</div>
<div className='basic_plan_of'>
{/* 16% OFF
</div>
<div className='basic_plan_price'>

<div className='per_session_basic'>
<div>8 Classes</div>
<div className='plan_basic_dot'></div>
&nbsp;&nbsp;
<div className='off_cut'> ₹ 599</div>
&nbsp;&nbsp;
<div> ₹ 499 </div>


</div> */}
<button className='join_basic'>Join Now</button>
</div>

 </div>












 <div className='standard_internal_div'>

 <div className='name_plan_basic'>STANDARD</div>
<div className='plan_standard_of_coding1'>Develope & Innovate</div>
<div className='basic_curriculum'>CURRICULUM GLANCE</div>
<div className='syllabus_basic'>CRUD Operation in Mobile App, Game & App Development</div>
<div className='tools_basic'>TOOLS</div>
<div className='tool_main_div'>
<div className='tool_grid'>
<div className='tools_scratch'><img src={scratchicon} className='scratchimg'></img>&nbsp;&nbsp;<span >Scratch</span></div>
<div className='tools_codeorg'><img src={codeorg} className='scratchimg'></img>&nbsp;&nbsp;<span >Code.org</span></div>
<div className='tools_codeorg'><img src={fire} className='scratchimg'></img>&nbsp;&nbsp;<span >Firebase</span></div>
<div className='tools_codeorg'><img src={thunkableapp} className='scratchimg'></img>&nbsp;&nbsp;<span >Thunkable</span></div>
</div>
</div>
<div className='project_basic'></div>
<div className='project_text_basic'>
    PROJECTS
</div>
<div className='project_des_div'>
<span className='project_des_div_span'> Signup Operation App,Chat App & many more </span>
</div>
<div className='basic_plan_of'>
{/* 16% OFF 
</div>
<div className='basic_plan_price'>

<div className='per_session_basic'>
<div>8 Classes</div>
<div className='plan_basic_dot'></div>
&nbsp;&nbsp;
<div className='off_cut'> ₹ 599</div>
&nbsp;&nbsp;
<div> ₹ 499 </div>


</div> */}
<button className='join_basic'>Join Now</button>
</div>
 </div>










 <div className='premium_internal_div'>
 <div className='name_plan_basic'>PREMIUM</div>
<div className='plan_premium_of_coding1'>WebApp Development</div>
<div className='basic_curriculum'>CURRICULUM GLANCE</div>
<div className='syllabus_basic'>Responsive Website Development & Deployment</div>
<div className='tools_basic'>TOOL & LANGUAGE</div>
<div className='tool_main_div'>
<div className='tool_grid'>
<div className='tools_scratch'><img src={scratchicon} className='scratchimg'></img>&nbsp;&nbsp;<span >Scratch</span></div>
<div className='tools_codeorg'><img src={codeorg} className='scratchimg'></img>&nbsp;&nbsp;<span >Code.org</span></div>
<div className='tools_codeorg'><img src={javascript} className='scratchimg'></img>&nbsp;&nbsp;<span >javascript</span></div>
<div className='tools_codeorg'><img src={html} className='scratchimg'></img>&nbsp;&nbsp;<span >Html & Css</span></div>
<div className='tools_codeorg'><img src={vs} className='scratchimg'></img>&nbsp;&nbsp;<span >VS Code</span></div>
</div>
</div>
<div className='project_basic'></div>
<div className='project_text_basic'>
    PROJECTS
</div>
<div className='project_des_div'>
<span className='project_des_div_span_premium'>Restaurant Book Website, Event Managment Website, Photography Website & 3 more </span>
</div>
<div className='basic_plan_of'>
{/* 16% OFF 
</div>
<div className='basic_plan_price'>

<div className='per_session_basic'>
<div>8 Classes</div>
<div className='plan_basic_dot'></div>
&nbsp;&nbsp;
<div className='off_cut'> ₹ 599</div>
&nbsp;&nbsp;
<div> ₹ 499 </div>


</div> */}
<button className='join_basic'>Join Now</button>
</div>

 </div>


 </div>
</div>
    )
}

export default Standard
