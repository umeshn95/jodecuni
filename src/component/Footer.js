import React from 'react'
import './Footer.scss';

import mobile from'../image/mobile-alt-solid.svg'
import { Link } from 'react-router-dom';
import useStyle from '../hooks/useStyle';
// import { faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  useStyle('/script/Newfooter.css')
    return (
        <div>

        
               {/* <div className='footer'>
               <Link to='/'><div className='coderm'>Codermama</div></Link>
            <div className='Home_footer'>

            
            <Link to='/'>    <div className='home1'>Home</div></Link> 
<Link to='/how'><div className='how'>How It Works</div></Link>
<Link to='/whycode'><div className='why'>Why Coding </div></Link>
<Link to='/review'><div className='review'>Parent Review</div></Link>
<Link to='/review'><div className='review1'>Student Review</div></Link>
            </div>

<div className='courses_footer'>
<Link><div className='courses'>Courses</div></Link> 
<Link to='/how'><div className='dev_app'>Core App development for kids</div></Link>
<Link to='/web'><div className='web_app'>Core Web development for kids</div></Link>
<Link to='/how'><div className='Adev_app'>Advance App development for kids</div></Link>
<Link to='/web'><div className='Aweb_app'>Advance Web development for kids</div></Link>
<Link to='/whycode'><div className='prog_scratch'>Scratch programming for kids</div></Link>
<Link to='/review'><div className='counsell_career'>Career councselling for kids</div></Link>


</div>

<div className='About_footer'>


<Link to='/aboutus'><div className='about'>About</div></Link>

<Link to='/ourteachp'><div className='teac'>Our Teaching Phillosphy</div></Link>
<Link to='/mentor'><div className='team'>Our Team</div></Link>
<Link to='/Acadadvisor'><div className='Acad_advisor'>Academic Advisor</div></Link>
<Link to='/job'><div className='job1'>Job</div></Link>
<Link to='/contact'><div className='contact1'>Contact</div></Link>
</div>
<div className='support_center'>

<Link to='/'>    <div className='sc'>Support Center</div></Link> 
<Link to='/how'><div className='DI'>Download ISL</div></Link>
<Link to='/whycode'><div className='DA'>Download Anydesk </div></Link>
<Link to='/review'><div className='TV'>Download Team Viewer</div></Link>


</div>

<div className='location'>Location</div>

<div className='location1'>278,Ambikapuri Main Indore</div>
<div className='location2'><img src={mobile} width='10px'></img></div>
        <div className='mobile'>9540424976</div>  
        <div className='right'>© 2021. All Rights Reserved.</div>
          </div>
         */}
     {/* new footer */}
    <div className='hide_footer'>
    <footer id="FOOTER_1">
        <div id="div_foot_2">
            <div id="div_foot_3">
                <div id="div_foot_4">
                    <div id="div_foot_5">
                        <h5 id="h5_foot_6">
                            Sign up &amp; get 10% Off
                        </h5>
                        <form id="form_foot_7" action="https://stacksocial.com/subscribe?footer_newsletter=1" method="post">
                            <input name="utf8" type="hidden" value="✓" id="input_form_8" />
                            <input type="hidden" name="authenticity_token" value="5CR6HzNoViQo+xtlIjafkOWFLLdk7S6p/nOYgMUfI3/yR9XuNIAXHOFSP49du0596bPjAI62nWWXFuuSRsiSSg==" id="input_form_9" />
                            <div id="div_foot_10">
                                <input type="hidden" name="source" id="input_form_11" value="Footer" /> 
                                <label for="signup-newsletter" id="label_foot_12">
                                    Email address
                                </label>
                                <input type="email" name="email" id="input_form_13" placeholder="Email" />
                                <input type="hidden" name="g-recaptcha-response" id="input_form_14" /> 
                                <button type="submit" id="button_foot_15">
                                    Sign up
                                </button>
                            </div> <span id="span_foot_16">*New customers only. Offer lasts 30 days. See Terms. This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" id="a_foot_17">Privacy Policy</a> and <a href="https://policies.google.com/terms" id="a_foot_18">Terms of Service</a> apply.</span>
                        </form>
                    </div>
                    <script type="text/javascript" id="SCRIPT_19">$('#newsletter-subscribe-form').on('submit', function(event) {
    
      });
                    </script>
                </div>
                <div id="div_foot_20">
                        <div id="div_foot_21">
                            <div id="div_foot_22">
                                <h4 id="h4_foot_23">
                                    About
                                </h4>
                                <ul id="ul_foot_24">
                                    <li id="li_foot_25">
                                         About Us
                                    </li>
                                    <li id="li_foot_27">
                                         Contact Us
                                    </li>
                                    <li id="li_foot_29">
                                        Academic Advisor
                                    </li>
                                    <li id="li_foot_31">
                                         Why CodeJuni
                                    </li>
                                    <li id="li_foot_33">
                                         FAQs
                                    </li>
                                    
                                </ul>
                            </div>
                            <div id="div_foot_37">
                                <h4 id="h4_foot_38">
                                    Courses
                                </h4>
                                <ul id="ul_foot_39">
                                    <li id="li_foot_40">
                                  Coding Champ(Grade 1 to 6)
                                    </li>
                                    <li id="li_foot_42">
                                       Coding Master(Grade 7 to 10)
                                    </li>
                                    <li id="li_foot_44">
                                        Coding Pro(Grade 11 to 12)
                                    </li>
                                    <li id="li_foot_46">
                                        Career Counselling for Kids
                                        
                                    </li>
                                    <li id="li_foot_52">
                                        Industrial Automation for Kids
                                    </li>
                                </ul>
                            </div>
                            <div id="div_foot_54">
                                <h4 id="h4_foot_55">
                                    Support Center
                                </h4>
                                <ul id="ul_foot_56">
                                    <li id="li_foot_57">
                                        <a href="https://download.anydesk.com/AnyDesk.exe?_ga=2.63267882.486689436.1614466281-1560762146.1613126302" id="a_foot_58">Download Anydesk</a>
                                    </li>
                                    <li id="li_foot_59">
                                    <a href="https://www.islonline.net/start/isllightclient">Download – ISL Online</a>
                                    </li>
                                    <li id="li_foot_61">
                                        <a href="https://www.teamviewer.com/en-us/teamviewer-automatic-download" id="a_foot_62">Download TeamViewer</a>
                                    </li>
                                 
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
            <div id="div_foot_69">
                    <div id="div_foot_70">
                        <div id="div_foot_71">
                            <h6 id="h6_foot_72">
                                Powered By
                            </h6> <a href="https://stackcommerce.com/" id="a_foot_73"><img alt="StackCommerce" src="https://shops1.stackassets.com/assets/core/logo-light-be04c77da6de1475cb2c1c82cf75120f338265aa36dfd6ed8a6404a720c28431.svg" id="img_foot_74" /></a>
                        </div>
                    </div>
                    <div id="div_foot_75">
                        <p id="p_foot_76">
                            Made in India
                        </p>
                        <p id="p_foot_77">
                            Copyright © 2021 CodeJuni. All Rights Reserved.
                        </p>
                        <div id="div_foot_78">
                        </div>
                    </div>
                    <div id="div_foot_79">
                        <div id="div_foot_80">
                             <a id="a_foot_81" href="https://www.bbb.org/losangelessiliconvalley/business-reviews/online-retailer/stackcommerce-in-venice-ca-1013267#bbbseal" title="StackCommerce, Online Retailer, Venice, CA"><img id="img_foot_82" src="https://seal-sanjose.bbb.org/logo/sehzbus/stackcommerce-1013267.png" width="200" height="38" alt="StackCommerce, Online Retailer, Venice, CA" /></a>
                        </div>
                    </div>
                </div>
        </div>
    </footer>    


    </div>




    {/* responsive footer */}













{/* new */}
<footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo">Something</h1>
          <h2>Contact</h2>
          <address>
            5534 Somewhere In. The World 22193-10212<br />
            <a className="footer__btn" href="mailto:example@gmail.com">Email Us</a>
          </address>
        </div>
        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Media</h2>
            <ul className="nav__ul">
              <li>
                <a href="#">Online</a>
              </li>
              <li>
                <a href="#">Print</a>
              </li>
              <li>
                <a href="#">Alternative Ads</a>
              </li>
            </ul>
          </li>
          <li className="nav__item nav__item--extra">
            <h2 className="nav__title">Technology</h2>
            <ul className="nav__ul nav__ul--extra">
              <li>
                <a href="#">Hardware Design</a>
              </li>
              <li>
                <a href="#">Software Design</a>
              </li>
              <li>
                <a href="#">Digital Signage</a>
              </li>
              <li>
                <a href="#">Automation</a>
              </li>
              <li>
                <a href="#">Artificial Intelligence</a>
              </li>
              <li>
                <a href="#">IoT</a>
              </li>
            </ul>
          </li>
          <li className="nav__item">
            <h2 className="nav__title">Legal</h2>
            <ul className="nav__ul">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Use</a>
              </li>
              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="legal">
          <p>© 2019 Something. All rights reserved.</p>
          <div className="legal__links">
            <span>Made with <span className="heart">♥</span> remotely from Anywhere</span>
          </div>
        </div>
      </footer>



</div>

    
        
    )
}

export default Footer
