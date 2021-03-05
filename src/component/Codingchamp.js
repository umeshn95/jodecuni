import React,{useState} from 'react';
import codingchamp from '../image/ourmonk.jpg';
import './Codingchamp.css';
import FAQ from './FAQ';

function Codingchamp() {
// 
const [faqs, setfaqs] = useState([
    {
      question: 'How many programmers does it take to screw in a lightbulb?',
      answer: 'None. We don\'t address hardware issues.',
      open: true
    },
    {
      question: 'Who is the most awesome person?',
      answer: 'You. The Viewer.',
      open: false
    },
    {
      question: 'How many questions does it take to make a successful FAQ Page?',
      answer: 'This many.',
      open: false
    }
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
}




    return (
        <div className='main_codingchamp'>
            <div  ><img className='codingchamp_img' src={codingchamp}></img></div>
            <div className='coding_champ_course_detail'>


{/*  */}
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






      {/* faq */}



      <div className="App">
      
      <div className="faqs">
        {faqs.map((faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>

      



            </div>
        </div>
    )
}

export default Codingchamp
