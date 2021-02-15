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
import thunkableapp from '../image/thunkable.png'

function Courseplan_basic(props) {
    return ( 
<div className='card_plan_upper'>
<h1 className='Course_quote'>Our Kids are Future & Future is Coding</h1>
<div className='class1_5_fulldiv'>
 
 <div className='basic_internal_div'>
<div className='name_plan_basic'>BASIC</div>
<div className='plan_basics_of_coding'>Basics of Coding</div>
<div className='basic_curriculum'>CURRICULUM GLANCE</div>
<div className='syllabus_basic'>Sequential Programming,Conditional Statement & Loops,Variable,Geometry,Algebra</div>
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
<span className='project_des_div_span'>Snake Game & Shark Game</span>
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
<div className='plan_standard_of_coding'>Development & Design</div>
<div className='basic_curriculum'>CURRICULUM GLANCE</div>
<div className='syllabus_basic'>Data Visualization,Parameter,Return,Library,Design Process,Physical Computing</div>
<div className='tools_basic'>TOOLS</div>
<div className='tool_main_div'>
<div className='tool_grid'>
<div className='tools_scratch'><img src={scratchicon} className='scratchimg'></img>&nbsp;&nbsp;<span >Scratch</span></div>
<div className='tools_codeorg'><img src={codeorg} className='scratchimg'></img>&nbsp;&nbsp;<span >Code.org</span></div>
<div className='tools_codeorg'><img src={Applab} className='scratchimg'></img>&nbsp;&nbsp;<span >App Lab</span></div>
</div>
</div>
<div className='project_basic'></div>
<div className='project_text_basic'>
    PROJECTS
</div>
<div className='project_des_div'>
<span className='project_des_div_span'>Messenger App & Interactive Quiz App and many more </span>
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
<div className='plan_premium_of_coding'>App Development</div>
<div className='basic_curriculum'>CURRICULUM GLANCE</div>
<div className='syllabus_basic'>Functional Mobile Apps, Animation & Game Development & much more</div>
<div className='tools_basic'>TOOLS</div>
<div className='tool_main_div'>
<div className='tool_grid'>
<div className='tools_scratch'><img src={scratchicon} className='scratchimg'></img>&nbsp;&nbsp;<span >Scratch</span></div>
<div className='tools_codeorg'><img src={codeorg} className='scratchimg'></img>&nbsp;&nbsp;<span >Code.org</span></div>
<div className='tools_codeorg'><img src={Applab} className='scratchimg'></img>&nbsp;&nbsp;<span >App Lab</span></div>
<div className='tools_codeorg'><img src={gamelab} className='scratchimg'></img>&nbsp;&nbsp;<span >Game Lab</span></div>
<div className='tools_codeorg'><img src={thunkableapp} className='scratchimg'></img>&nbsp;&nbsp;<span >Thunkable</span></div>
</div>
</div>
<div className='project_basic'></div>
<div className='project_text_basic'>
    PROJECTS
</div>
<div className='project_des_div'>
<span className='project_des_div_span_premium'>Pacman Game, Space Game, Curriculum App, Messenger App, Translater App & 5 more Game & App. </span>
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

export default Courseplan_basic
