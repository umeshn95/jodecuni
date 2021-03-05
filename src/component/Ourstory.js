import React from "react";
import ourstorypic from "../image/ourmonk.jpg";
import "./Ourstory.css";

function Ourstory() {
  return (
    <div>
      <div className='ourstory_img'><img className='ourimagestory' src={ourstorypic}></img></div>

      {/* <img className="online" src={ourstorypic}></img> */}
      <div className="header_space"></div>
      <div className="side_width">
        <div className="main_coloumn">
          <h1 className="cover_title">
            Our Teaching <b>Phillosophy</b>{" "}
          </h1>
          <div className="cover_intro">
            <p>
              We believe in the importance of the teacher’s role, the support of
              the group and the power of real-time interaction to inspire kids’
              creativity.
            </p>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="site_width clearfix">
          <section className="main_section">
            <div>
              <div className="section1">
                <div className="image_section">
                  <img
                    src={
                      "https://tekkieuni.com/wp-content/uploads/2019/03/computer_kids_last_version.png"
                    }
                  ></img>
                </div>
                <div className="text_section">
                  <h2>
                    OUR METHOD: LIVE INSTRUCTION, INSPIRING TEACHERS, SUPPORTIVE
                    PEERS
                  </h2>
                  <p>
                    Most online coding courses are self-directed, with software,
                    rather than humans, doing the “teaching”. This may work for
                    some highly-motivated students, but not for most. While
                    coding is fun it is also challenging, requiring a degree of
                    persistence and self-discipline that most young people
                    haven’t yet developed. At Tekkie Uni, we believe that most
                    young coders learn best in small groups, supported by their
                    peers and guided by highly qualified and attentive teachers.
                    We believe that live interaction with such teachers, and
                    with fellow students, provides not only the content, but
                    also the inspiration that kids need to leverage their innate
                    ability to learn. Our proven methodology has already helped
                    thousands of young people aged 8-18 learn coding,
                    irrespective of their former experience.
                  </p>
                </div>
              </div>
              <div className="section2">
                <div className="image_section">
                  <img
                    src={
                      "https://tekkieuni.com/wp-content/uploads/2019/03/computer_kids_last_version.png"
                    }
                  ></img>
                </div>
                <div className="text_section">
                  <h2>
                    OUR METHOD: LIVE INSTRUCTION, INSPIRING TEACHERS, SUPPORTIVE
                    PEERS
                  </h2>
                  <p>
                    Most online coding courses are self-directed, with software,
                    rather than humans, doing the “teaching”. This may work for
                    some highly-motivated students, but not for most. While
                    coding is fun it is also challenging, requiring a degree of
                    persistence and self-discipline that most young people
                    haven’t yet developed. At Tekkie Uni, we believe that most
                    young coders learn best in small groups, supported by their
                    peers and guided by highly qualified and attentive teachers.
                    We believe that live interaction with such teachers, and
                    with fellow students, provides not only the content, but
                    also the inspiration that kids need to leverage their innate
                    ability to learn. Our proven methodology has already helped
                    thousands of young people aged 8-18 learn coding,
                    irrespective of their former experience.
                  </p>
                </div>
              </div>
              <div className="section3">
                <div className="image_section">
                  <img
                    src={
                      "https://tekkieuni.com/wp-content/uploads/2019/03/computer_kids_last_version.png"
                    }
                  ></img>
                </div>
                <div className="text_section">
                  <h2>
                    OUR METHOD: LIVE INSTRUCTION, INSPIRING TEACHERS, SUPPORTIVE
                    PEERS
                  </h2>
                  <p>
                    Most online coding courses are self-directed, with software,
                    rather than humans, doing the “teaching”. This may work for
                    some highly-motivated students, but not for most. While
                    coding is fun it is also challenging, requiring a degree of
                    persistence and self-discipline that most young people
                    haven’t yet developed. At Tekkie Uni, we believe that most
                    young coders learn best in small groups, supported by their
                    peers and guided by highly qualified and attentive teachers.
                    We believe that live interaction with such teachers, and
                    with fellow students, provides not only the content, but
                    also the inspiration that kids need to leverage their innate
                    ability to learn. Our proven methodology has already helped
                    thousands of young people aged 8-18 learn coding,
                    irrespective of their former experience.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    

      <div className="container_div">
        <section id="curriculum">
          <div class="container1">
            <h2>Multi-Year Curriculum</h2>
            <p>
              Some students want “just a taste”. Others want to work toward a
              long-term goal. That's why we created a multi-year curriculum
              where every student can choose his or her favorite route. Kids can
              enter at any stage and continue their studies for one to six
              years. The only question is when to start.
            </p>
            <div class="timeline">
              <h3>Core Course</h3>
              <div class="timeline-boxes">
                <div class="timeline-row">
                  <div class="timeline-box">
                    <div class="age-box">
                      <span>Age 8-9</span>
                    </div>
                    <div class="box-wrap">
                      <span
                        class="timeline-image"
                        role="img"
                        aria-label="timeline-image"
                        style={{
                          backgroundImage: `url(${"https://tekkieuni.com/wp-content/uploads/2019/02/Kid_8_9_.png"})`,
                        }}
                      >
                        <span class="inner"></span>
                      </span>
                      <img
                        class="mobile-only lazyload"
                        data-src="https://tekkieuni.com/wp-content/uploads/2019/03/Age_8-9_pic.png"
                        loading="lazy"
                      />
                      <p>
                        <b>For children age 8-9</b> we recommend starting with
                        Coding Fundamentals – an introduction to programming
                        using a block-based introductory programming language
                        called Scratch. Scratch was developed at MIT especially
                        for kids. It is fun to use, providing animated
                        illustrations of abstract mathematical concepts. Kids
                        create colorful stories, games and videos while learning
                        about axes, parameters and variables.
                      </p>
                      <span class="corner"></span>
                    </div>
                  </div>
                </div>
                <div class="timeline-row">
                  <div class="timeline-box">
                    <div class="age-box">
                      <span>Age 10-14</span>
                    </div>
                    <div class="box-wrap">
                      <span
                        class="timeline-image"
                        role="img"
                        aria-label="timeline-image"
                        style={{
                          backgroundImage: `url(${"https://tekkieuni.com/wp-content/uploads/2019/02/Kid_10_14_.png"})`,
                        }}
                      >
                        <span class="inner"></span>
                      </span>
                      <img
                        class="mobile-only lazyload"
                        data-src="https://tekkieuni.com/wp-content/uploads/2019/03/Age_10-14_pic.png"
                        loading="lazy"
                      />
                      <p>
                        <b>For kids age 10-14</b> we recommend taking courses in
                        the one to three-year App Development Sequence. Students
                        learn, step by step, how to take a raw idea and turn it
                        to a real product. At the same time, and almost without
                        noticing, they are getting a broad introduction to
                        coding. In their first year, students will learn the
                        basics of coding apps and games, creating their own
                        version of an existing app and installing it on their
                        smartphone.
                        <br></br>In their second year, students will code their
                        own apps and acquire new design tools. They can even
                        upload their finished apps to the Apple App Store and
                        Google Play. In their third year, students will emulate
                        real-life startup teams in launching their new apps.
                        They will know how to pitch an idea to customer, work on
                        it with their team and deliver the product on time.
                      </p>
                      <span class="corner"></span>
                    </div>
                  </div>
                </div>
                <div class="timeline-row">
                  <div class="timeline-box">
                    <div class="age-box">
                      <span>Age 15-18</span>
                    </div>
                    <div class="box-wrap">
                      <span
                        class="timeline-image"
                        role="img"
                        aria-label="timeline-image"
                        style={{
                          backgroundImage: `url(${"https://tekkieuni.com/wp-content/uploads/2019/02/Kid_10_14_.png"})`,
                        }}
                      >
                        <span class="inner"></span>
                      </span>
                      <img
                        class="mobile-only lazyload"
                        data-src="https://tekkieuni.com/wp-content/uploads/2019/03/Age_15-18_pic.png"
                        loading="lazy"
                      />
                      <p>
                        <b>For our teen graduates age 15-18</b> we offer
                        students a chance to work on their own projects, closely
                        guided by an experienced mentor in our in-house
                        incubator. Those who excel throughout the entire program
                        may be invited to join our teaching force first as TA's
                        - strengthening their own coding skills while helping
                        other students.{" "}
                      </p>
                      <span class="corner"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="join_footer">
        <section id="footer-cta">
          <div class="container1">
            <div class="cta-text">
              <h2>Interested in any of our programs?</h2>
              <p>
                Our advisors will be happy to answer all of your questions,
                click below to leave your details.
              </p>
            </div>
            <div class="cta-buttons">
              <button className="phone_button">Book a Free Class Now</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Ourstory;
