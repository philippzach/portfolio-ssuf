import React from 'react'
import Performance from '../../../static/ssuf/about-1.svg';
import Initiative from '../../../static/ssuf/about-2.svg';

import Quality from '../../../static/ssuf/about-3.svg';
import Learning from '../../../static/ssuf/about-4.svg';
import './styles.css'

const FlipCard = () => (
  <div className="flip-card-container">
  <div className="flip-card-row">
 {/*  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={Passion} alt="Avatar" style={{ width: '100px', height: '100px' }} />
      <p className="fliptitle">Passion</p>
    </div>
    <div class="flip-card-back">
      <p className="fliptitleback lh-copy pa2">Passion about innovation and entrepreneurship is at our heart</p>
    </div>
  </div>
</div> */}
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={Performance} alt="Avatar" style={{ width: '100px', height: '100px' }} />
      <p className="fliptitle">Independence</p>
    </div>
    <div class="flip-card-back">
      <p className="fliptitleback pa2">We work independently and are not afraid to fail</p>
    </div>
  </div>
</div>
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={Initiative} alt="Avatar" style={{ width: '100px', height: '100px' }} />
      <p className="fliptitle">Impact</p>
    </div>
    <div class="flip-card-back">
      <p className="fliptitleback lh-copy pa2">We achieve extraordinary outcomes that exceed the expectations of your clients</p>
    </div>
  </div>
  </div>
</div>
<div className="flip-card-row">
  {/* <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={Team} alt="Avatar" style={{ width: '100px', height: '100px' }} />
      <p className="fliptitle">Team</p>
    </div>
    <div class="flip-card-back">
      <p className="fliptitleback pa2">As great things in business are never done by one person, we solve challenges together with trust, respect, structure and by valuing each others expertise</p>
    </div>
  </div>
</div> */}
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={Quality} alt="Avatar" style={{ width: '100px', height: '100px' }} />
      <p className="fliptitle">Making</p>
    </div>
    <div class="flip-card-back">
      <p className="fliptitleback lh-copy pa2">We go the extra mile to get things done. We make things happen</p>
    </div>
  </div>
</div>
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={Learning} alt="Avatar" style={{ width: '100px', height: '100px' }} />
      <p className="fliptitle">Honesty</p>
    </div>
    <div class="flip-card-back">
      <p className="fliptitleback lh-copy pa2">We cultivate a respectful atmosphere where everyone feels comfortable</p>
    </div>
  </div>
  </div>
</div>
</div>
);

export default FlipCard;
/*
      name: 'Passion'
      'Passion about innovation and entrepreneurship is at our heart',
      css: 'linear-gradient(to top, #f5f7fa 0%, rgba(212, 212, 212, .1) 100%)',

      name: 'Performance'
      'As we challenge the status quo in the society with the new business models, we challenge us to exceed client expectation and thereby building amazing companies',
      css: 'linear-gradient(135deg, #f5f7fa 0%, rgba(212, 212, 212, .1) 100%)',
    
      name: 'Initiative'
      'As entrepreneurs ourselves, we think beyond our assigned tasks and create new opportunities for the SSUF',
      css: 'linear-gradient(120deg, #f5f7fa 0%, rgba(212, 212, 212, .1) 100%)',

      name: 'Team'
      'As great things in business are never done by one person, we solve challenges together with trust, respect, structure and by valuing each others expertise',
      css: 'linear-gradient(120deg, #f5f7fa 0%, rgba(212, 212, 212, .1) 100%)',

      name: 'Quality'
      'We take full responsibility for our work and what we do, we do well',
      css: 'linear-gradient(-225deg, #f5f7fa 0%, rgba(212, 212, 212, .1) 100%)',

      name: 'Learning'
      'We never stop learning',
      css: 'linear-gradient(to top, #f5f7fa 0%, rgba(212, 212, 212, .1) 100%)',
*/

