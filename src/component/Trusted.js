import React from 'react';
import './Trusted.css'

function Trusted() {
    return (
        <div className='Main_trusted'>
         <h1 className='trusted_h1'> Our Trustability in Learning And Knowledgebase</h1>
            <div className='trusted_inside'>
            
<div className='trust_card1'>
<p>Parent satisfaction score of 4.8 in 5</p>
<p>	&#11088;	&#11088;	&#11088;	&#11088;	&#11088;</p>
</div>

<div className='trust_card1'>
<p>40,000+ students learnt coding with us</p>
</div>

<div className='trust_card1'>
<p>Dashboard to track everything your child has learned</p>
</div>

<div className='trusted_inside2'>
    <div className='trust_card4'>
<p>Cumulative teacher review of 4.6 in 5</p>
<p>	&#11088;	&#11088;	&#11088;	&#11088;	&#11088;</p>
    </div>

    <div className='trust_card4'>
<p>Guided course journey for each child</p>

    </div>
</div>

            </div>






            {/* reponsive trusted */}


            <div className='trus'>
        
        <div className="trus_cardContainer">
          <div className="trus_card" style={{backgroundColor: 'rgb(153, 29, 224)'}}>
            <h2>Parent satisfaction score of 4.8 in 5</h2>
            <p>Some text</p>
          </div>
          <div className="trus_card" style={{backgroundColor: 'rgb(12, 126, 120)'}}>
            <h2>Parent satisfaction score of 4.8 in 5</h2>
            <p>Some text</p>
          </div>
          <div className="trus_card" style={{backgroundColor: 'rgb(207, 41, 91)'}}>
            <h2>Parent satisfaction score of 4.8 in 5</h2>
            <p>Some text</p>
          </div>
          <div className="trus_card" style={{backgroundColor: 'rgb(204, 91, 39)'}}>
            <h2>Parent satisfaction score of 4.8 in 5</h2>
            <p>Some text</p>
          </div>
        </div>
      </div>



















            
        </div>
    )
}

export default Trusted
