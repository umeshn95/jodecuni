import React, { useState } from "react";
import "./Contactus.css";
import { db } from "./firebase";
import Footer from "./Footer";
import Navbar from "./Navbar";
import contact from "../image/contact.png";

function Contactus() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("contacts")
      .add({
        name: name,
        age: age,
        email: email,
        mobile: mobile,
        message: message,
      })
      .then(() => {
        alert("Your request has been submitted");
      })
      .catch((err) => {
        alert(err.message);
      });
    setName("");
    setAge("");
    setEmail("");
    setMobile("");
    setMessage("");
  };

  // google map

  return (
    //       <div className='main_contactus'>

    //           <div className="conta">
    // <div className="text">
    //   Responsive Contact us Form</div>
    // <form action="#">
    //   <div className="form-row">
    //     <div className="input-data">
    //       <input type="text" required />
    //       <div className="underline">
    //       </div>
    //       <label htmlFor>First Name</label>
    //     </div>
    //     <div className="input-data">
    //       <input type="text" required />
    //       <div className="underline">
    //       </div>
    //       <label htmlFor>Last Name</label>
    //     </div>
    //   </div>
    //   <div className="form-row">
    //     <div className="input-data">
    //       <input type="text" required />
    //       <div className="underline">
    //       </div>
    //       <label htmlFor>Email Address</label>
    //     </div>
    //     <div className="input-data">
    //       <input type="text" required />
    //       <div className="underline">
    //       </div>
    //       <label htmlFor>Website Name</label>
    //     </div>
    //   </div>
    //   <div className="form-row">
    //     <div className="input-data textarea">
    //       {/* Due to more textarea tag I got an error.. SO I changed the name of texarea tag into changeit. Replace the changeit text/tag to textarea*/}
    //       <textarea rows={8} cols={80} required />
    //       <br />
    //       <div className="underline">
    //       </div>
    //       <label htmlFor>Write your message</label>
    //       <br />
    //       <div className="form-row submit-btn">
    //         <div className="input-data">
    //           <div className="inner" />
    //           <input type="submit" defaultValue="submit" />
    //         </div>
    //       </div>
    //     </div>
    //   </div></form></div>

    /* <form className='form' onSubmit={handleSubmit}>
                <h1>Contact Us </h1>
<label>Parent Name</label>
<input placeholder='parent_name' value={name} onChange={(e)=> setName(e.target.value)}></input>

<label>Child Age</label>
<input placeholder='Child Age' value={age} onChange={(e)=> setAge(e.target.value)}></input>

<label >Parent Email</label>
<input placeholder='Parent Email' value={email} onChange={(e)=> setEmail(e.target.value)}></input>

<label>Parent Mobile</label>
<input placeholder='Parent Mobile' value={mobile} onChange={(e)=> setMobile(e.target.value)}></input>

<label className='mess1' >Message</label>
<input placeholder='Enter Your Interest' className='mess' value={message} onChange={(e)=> setMessage(e.target.value)}></input>

   <button type='submit' className='btn'>Submit</button>
   
            </form> */

    // </div>

    // responsive

    // new and latest contactg us form
    // <div className="main_contact_us_page_div">
    //   {/* responsive */}
    //   <div className="conta">
    //     <div className="content">
    //       <div className="image-box">
    //         <img src={contact} alt="" />
    //       </div>
    //       <form action="#">
    //         <div className="topic">Send us a message</div>
    //         <div className="input-box">
    //           <input type="text" placeholder="Enter Your Name" required />
    //         </div>
    //         <div className="input-box">
    //           <input type="text" required placeholder="Enter Your Email" />
    //         </div>
    //         <div className="input-box">
    //           <input type="text" placeholder="Enter Your Message" />
    //         </div>
    //         <div className="input-box">
    //           <input type="submit" defaultValue="Send Message" />
    //         </div>
    //       </form>
    //     </div>
    <div class="patra">
    <span class="big-circle"></span>
    <img src="img/shape.png" class="square" alt="" />
    <div class="form1">
      <div class="contact-info">
        <h3 class="title1">Let's get in touch</h3>
        <p class="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
          dolorum adipisci recusandae praesentium dicta!
        </p>

        <div class="info">
          <div class="information">
            <img src="img/location.png" class="icon" alt="" />
            <p>92 Cherry Drive Uniondale, NY 11553</p>
          </div>
          <div class="information">
            <img src="img/email.png" class="icon" alt="" />
            <p>lorem@ipsum.com</p>
          </div>
          <div class="information">
            <img src="img/phone.png" class="icon" alt="" />
            <p>123-456-789</p>
          </div>
        </div>

        <div class="social-media">
          <p>Connect with us :</p>
          <div class="social-icons">
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="contact-form1">
        <span class="circle one"></span>
        <span class="circle two"></span>

        <form action="index.html" autocomplete="off">
          <h3 class="title1">Contact us</h3>
          <div class="input-patra">
            <input type="text" name="name" class="input1" />
            <label for="">Username</label>
            <span>Username</span>
          </div>
          <div class="input-patra">
            <input type="email" name="email" class="input1" />
            <label for="">Email</label>
            <span>Email</span>
          </div>
          <div class="input-patra">
            <input type="tel" name="phone" class="input1" />
            <label for="">Phone</label>
            <span>Phone</span>
          </div>
          <div class="input-patra textarea">
            <textarea name="message" class="input1"></textarea>
            <label for="">Message</label>
            <span>Message</span>
          </div>
          <input type="submit" value="Send" class="btn" />
        </form>
      </div>
    </div>
  </div>

    /* 
<div id="contact_us_pageDIV_1">
	<div id="contact_us_pageDIV_2">
		<h1 id="contact_us_pageH1_3">
			Contact
		</h1>
		<p id="contact_us_pageP_4">
			We're happy to answer any questions you may have!
		</p>
		<div id="contact_us_pageDIV_5">
			<div id="contact_us_pageDIV_6">
				<h3 id="contact_us_pageH3_7">
					(650) 263-4306
				</h3>
				<div id="contact_us_pageDIV_8">
					<svg id="contact_us_pagesvg_9">
						<rect id="contact_us_pagerect_10">
						</rect>
						<path id="contact_us_pagepath_11">
						</path>
					</svg>
				</div>
			</div><a href="mailto:support@codejuni.com" id="contact_us_pageA_12"></a>
			<h3 id="contact_us_pageH3_13">
				support@lCodejuni.com
			</h3>
			<div id="contact_us_pageDIV_14">
				<svg id="contact_us_pagesvg_15">
					<rect id="contact_us_pagerect_16">
					</rect>
					<path id="contact_us_pagepath_17">
					</path>
				</svg>
			</div>
		</div><hr id="contact_us_pageHR_18" />
	</div>
	<form action="https://formspree.io/xeqekqzk" method="POST" id="contact_us_pageFORM_19">
		<h3 id="contact_us_pageH3_20">
			Send us a Message
		</h3>
		<div id="contact_us_pageDIV_21">
			<div id="contact_us_pageDIV_22">
				<label for="name" id="contact_us_pageLABEL_23">
					Your Name
				</label>
				<input type="text" name="name" placeholder="Your Name" id="contact_us_pageINPUT_24" />
			</div>
			<div id="contact_us_pageDIV_25">
				<label for="name" id="contact_us_pageLABEL_26">
					Your Email
				</label>
				<input type="email" name="email" placeholder="Your Email" id="contact_us_pageINPUT_27" />
			</div>
		</div>
		<div id="contact_us_pageDIV_28">
			<div id="contact_us_pageDIV_29">
				<label for="name" id="contact_us_pageLABEL_30">
					Your Phone
				</label>
				<input type="tel" name="phone" placeholder="Your Phone Number" id="contact_us_pageINPUT_31" />
			</div>
			<div id="contact_us_pageDIV_32">
			</div>
		</div>
		<label for="name" id="contact_us_pageLABEL_33">
			Your Message
		</label>
		<textarea name="message" placeholder="Your Message" id="contact_us_pageTEXTAREA_34">
		</textarea>
		<input type="hidden" name="_next" value="https://junilearning.com/contact-success/" id="contact_us_pageINPUT_35" />
		<button type="submit" id="contact_us_pageBUTTON_36">
			<span id="contact_us_pageSPAN_37">Send Message</span>
		</button>

	</form>
</div> */
  );
}

export default Contactus;
