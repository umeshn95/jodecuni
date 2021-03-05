import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import aboutus from "../image/about___us.png";
import "./Aboutus.css";
import Schools from "./Schools";
import parentpic1 from "../image/parentpic1.png";
import Get_interested from "./Get_interested";

const Educator = ({ containerClass, src, title }) => {
  return (
    <div className={containerClass}>
      <img className="our_team_about_pic" src={src}></img>
      <p>{title}</p>{" "}
    </div>
  );
};

function Aboutus() {
  return (
    <div>
      <Navbar></Navbar>
      <div
        className="relative flex justify-between rounded-b-2xl px-6"
        style={{
        
            
          height: "600px",
        }}
      >
        <div className="container1 mx-auto flex flex-col text-white z-5 lg:flex-row md:px-20 lg:items-center py-12">
          <div className="flex flex-col max-w-6xl">
            <h1 className="font-600 text-5xl max-w-3xl leading-tight">
              Moulding creators of the future
            </h1>
            <div className="font-300 text-2xl mt-10 max-w-4xl">
              Codingal started with a dream to inspire school kids to fall in
              love with coding. Our vision is to empower every child with the
              knowledge of coding, so that they can build anything they imagine.
            </div>
          </div>
          <div>
            <img
              src="https://cdn.codingal.com/images/about-us/first-fold/penguin.svg"
              alt="penguin"
            />
          </div>
        </div>
      </div>

      {/* quizzer */}

{/* our mentorship team */}
<div id="ourmentorshipDIV_1">
        <img alt="shape" src="https://cdn.codingal.com/images/home/student-testimonials/waves.svg" id="ourmentorshipIMG_2" /><img alt="shape" src="https://cdn.codingal.com/images/home/student-projects/square-block.svg" id="ourmentorshipIMG_3" /><img alt="shape" src="https://cdn.codingal.com/images/about-us/leadership/rectangular-block.svg" id="ourmentorshipIMG_4" />
        <h2 id="ourmentorshipH2_5">
          Our Leadership Team
        </h2>
        <p id="ourmentorshipP_6">
          With over 50 years of combined experience, we have got a well-seasoned team at the helm.
        </p>
        <div id="ourmentorshipDIV_7">
          <div id="ourmentorshipDIV_8">
            <picture id="ourmentorshipPICTURE_9">
              <source id="ourmentorshipSOURCE_10" /><img src="https://cdn.codingal.com/images/about-us/leadership/vivek-prakash.png" alt="Vivek Prakash" id="ourmentorshipIMG_11" />
            </picture>
            <p id="ourmentorshipP_12">
              Vivek Prakash
            </p>
            <p id="ourmentorshipP_13">
              Co-founder &amp; CEO
            </p>
            <p id="ourmentorshipP_14">
              B.Tech &amp; M.Tech, IIT Roorkee
            </p>
            <p id="ourmentorshipP_15">
              Know more
              <svg id="ourmentorshipsvg_16">
                <line id="ourmentorshipline_17">
                </line>
                <polyline id="ourmentorshippolyline_18">
                </polyline>
              </svg>
            </p>
          </div>
          <div id="ourmentorshipDIV_19">
            <picture id="ourmentorshipPICTURE_20">
              <source id="ourmentorshipSOURCE_21" /><img src="https://cdn.codingal.com/images/about-us/leadership/satyam-baranwal.png" alt="Satyam Baranwal" id="ourmentorshipIMG_22" />
            </picture>
            <p id="ourmentorshipP_23">
              Satyam Baranwal
            </p>
            <p id="ourmentorshipP_24">
              Co-founder &amp; COO
            </p>
            <p id="ourmentorshipP_25">
              IIT Dhanbad
            </p>
            <p id="ourmentorshipP_26">
              Know more
              <svg id="ourmentorshipsvg_27">
                <line id="ourmentorshipline_28">
                </line>
                <polyline id="ourmentorshippolyline_29">
                </polyline>
              </svg>
            </p>
          </div>
          <div id="ourmentorshipDIV_30">
            <picture id="ourmentorshipPICTURE_31">
              <source id="ourmentorshipSOURCE_32" /><img src="https://cdn.codingal.com/images/about-us/leadership/sumit-singh.png" alt="Sumit Singh" id="ourmentorshipIMG_33" />
            </picture>
            <p id="ourmentorshipP_34">
              Sumit Singh
            </p>
            <p id="ourmentorshipP_35">
              VP, Marketing
            </p>
            <p id="ourmentorshipP_36">
              MBA, Marketing
            </p>
            <p id="ourmentorshipP_37">
              Know more
              <svg id="ourmentorshipsvg_38">
                <line id="ourmentorshipline_39">
                </line>
                <polyline id="ourmentorshippolyline_40">
                </polyline>
              </svg>
            </p>
          </div>
        </div>
      </div>





      {/* our journey */}



      
      <div id="journeyDIV_1">
        <img alt="shape" src="https://cdn.codingal.com/images/about-us/journey/left-shapes.svg" id="journeyIMG_2" /><img alt="shape" src="https://cdn.codingal.com/images/about-us/journey/right-shapes.svg" id="journeyIMG_3" /><img alt="shape" src="https://cdn.codingal.com/images/about-us/journey/rectangular-block.svg" id="journeyIMG_4" /><img alt="shape" src="https://cdn.codingal.com/images/about-us/journey/rectangular-block.svg" id="journeyIMG_5" /><img src="https://cdn.codingal.com/images/about-us/journey/curved-path.svg" id="journeyIMG_6" alt="" />
        <div id="journeyDIV_7">
          <h2 id="journeyH2_8">
            Our Journey
          </h2>
          <div id="journeyDIV_9">
            <div id="journeyDIV_10">
              <p id="journeyP_11">
                <span id="journeySPAN_12">There is a dream of building Codingal</span>
                {/* */}
                - a company which can inspire millions of school kids to fall in love with coding.
              </p>
            </div>
            <div id="journeyDIV_13">
              <picture id="journeyPICTURE_14">
                <source id="journeySOURCE_15" /><img src="https://cdn.codingal.com/images/about-us/journey/phase-1.png" alt="Journey" id="journeyIMG_16" />
              </picture>
            </div>
            <div id="journeyDIV_17">
              <picture id="journeyPICTURE_18">
                <source id="journeySOURCE_19" /><img src="https://cdn.codingal.com/images/about-us/journey/phase-2.png" alt="Journey" id="journeyIMG_20" />
              </picture>
            </div>
            <div id="journeyDIV_21">
              <p id="journeyP_22">
                <span id="journeySPAN_23">Codingal acquires Skillovate</span>
                {/* */}
                - a company providing coding and robotics education to school kids.
              </p>
            </div>
            <div id="journeyDIV_24">
              <p id="journeyP_25">
                Codingal introduces a new curriculum based on BIDE, STEAM and BLOOM's taxonomy.
              </p>
            </div>
            <div id="journeyDIV_26">
              <picture id="journeyPICTURE_27">
                <source id="journeySOURCE_28" /><img src="https://cdn.codingal.com/images/about-us/journey/phase-3.png" alt="Journey" id="journeyIMG_29" />
              </picture>
            </div>
            <div id="journeyDIV_30">
              <picture id="journeyPICTURE_31">
                <source id="journeySOURCE_32" /><img src="https://cdn.codingal.com/images/about-us/journey/phase-4.png" alt="Journey" id="journeyIMG_33" />
              </picture>
            </div>
            <div id="journeyDIV_34">
              <div id="journeyDIV_35">
                <p id="journeyP_36">
                  November 2020
                </p>
                <p id="journeyP_37">
                  Codingal has inspired over 40,000 kids globally to fall in love with coding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>








{/* Rjourney */}

<div id="RjourneyDIV_1">
	<h2 id="RjourneyH2_2">
		Our Journey
	</h2>
	<div id="RjourneyDIV_3">
		<div id="RjourneyDIV_4">
			<p id="RjourneyP_5">
				<span id="RjourneySPAN_6">There is a dream of building Codingal</span> - a company which can inspire millions of school kids to fall in love with coding.
			</p>
		</div>
		<div id="RjourneyDIV_7">
			<picture id="RjourneyPICTURE_8">
				<source id="RjourneySOURCE_9" /><img src="https://cdn.codingal.com/images/about-us/journey/phase-1.png" alt="Journey" id="RjourneyIMG_10" />
			</picture>
		</div>
		<div id="RjourneyDIV_11">
			<picture id="RjourneyPICTURE_12">
				<source id="RjourneySOURCE_13" /><img src="https://cdn.codingal.com/images/about-us/journey/phase-2.png" alt="Journey" id="RjourneyIMG_14" />
			</picture>
		</div>
		<div id="RjourneyDIV_15">
			<p id="RjourneyP_16">
				<span id="RjourneySPAN_17">Codingal acquires Skillovate</span> - a company providing coding and robotics education to school kids.
			</p>
		</div>
		<div id="RjourneyDIV_18">
			<p id="RjourneyP_19">
				Codingal introduces a new curriculum based on BIDE, STEAM and BLOOM's taxonomy.
			</p>
		</div>
		<div id="RjourneyDIV_20">
			<picture id="RjourneyPICTURE_21">
				<source id="RjourneySOURCE_22" /><img src="https://cdn.codingal.com/images/about-us/journey/phase-3.png" alt="Journey" id="RjourneyIMG_23" />
			</picture>
		</div>
		<div id="RjourneyDIV_24">
			<picture id="RjourneyPICTURE_25">
				<source id="RjourneySOURCE_26" /><img src="https://cdn.codingal.com/images/about-us/journey/phase-4-lqip.png" alt="Journey" id="RjourneyIMG_27" />
			</picture>
		</div>
		<div id="RjourneyDIV_28">
			<div id="RjourneyDIV_29">
				<p id="RjourneyP_30">
					November 2020
				</p>
				<p id="RjourneyP_31">
					Codingal has inspired over 40,000 kids globally to fall in love with coding.
				</p>
			</div>
		</div>
	</div>
</div>












     

      {/* our team */}
      <section>
        <div className="ourteam_main_div">
          <h2>Code Juni Team</h2>

          <div className="our_team_inner_div">
            <Educator containerClass="pic1" src={parentpic1} title="Asshish" />

            <Educator containerClass="pic1" src={parentpic1} title="Asshish" />
            <Educator containerClass="pic1" src={parentpic1} title="Asshish" />
            <Educator containerClass="pic1" src={parentpic1} title="Asshish" />
            <Educator containerClass="pic1" src={parentpic1} title="Asshish" />
            <Educator containerClass="pic1" src={parentpic1} title="Asshish" />
            <Educator containerClass="pic1" src={parentpic1} title="Asshish" />
            <Educator containerClass="pic1" src={parentpic1} title="Asshish" />
            <Educator containerClass="pic1" src={parentpic1} title="Asshish" />
            <Educator containerClass="pic1" src={parentpic1} title="Asshish" />

     
          </div>
        </div>
      </section>


 {/* intereated */}
 <div className='get_interested_div'><Get_interested></Get_interested></div>


    </div>
  );
}

export default Aboutus;
