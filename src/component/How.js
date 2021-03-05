import React from "react";
import Navbar from "./Navbar";
import how from "../image/howitwork.jpg";
import Footer from "./Footer";
import "./How.css";
import howu from "../image/how_upper.png";
import good from "../image/good_screen.png";

function How() {
  return (
    
      <>
      <div className="how1">
        <img className="howimage" src={how}></img>
      </div>
      <div className="howu">
        <img className="howuimage" src={howu}></img>
      </div>
      <p className="howwork"> How We Works</p>
      <p className="howtext">
        Learning has no limits our kids are more Creative,<br></br>with
        Codermama’s teachers support,kids can build innovative projects<br></br>{" "}
        that inspire imagination and develop creativity.<br></br>
      </p>

      <div className="good_screen">
        <div className="good_screen_image">
          <img className="good_screen_img" src={good}></img>
        </div>
        <div className="good_screen_content">
          <div className="good_screen_content_title">
            <h2>The Good Kind Of Screen Time</h2>
          </div>
          <div className='good_screen_para_div'>

          <p className="good_screen_content_para">
            Kids participate in live online lessons, interacting in real-time
            with an experienced teacher and a small group of students. They can
            ask questions and get immediate answers within the framework of the
            course. Together we create cool apps, code virtual 3-D robots and
            edit videos while mastering coding and digital art.
          </p>
          </div>
          <div className="good_screen_content_detail">
            <ul>
              <li>1 hour</li>
              <li>Weekly classes</li>
              <li>5 Student</li>
            </ul>
          </div>
        </div>






      </div>

      <h2>yug ghcvvv hgvuygvu jvbugbu hb kvuybvgh h vgub  jbvkyvbug  gvubhj h ukvg b guvbu jb hgvbu jb bvuyb bblbj  ghkbiu;nhjgcgfch  hgvg b vyu jb hgvug</h2>


      </>
  );
}

export default How;
