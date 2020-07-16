import React from 'react';
import styled from 'react-emotion';
import '../styles/pages/join-the-platform.css';
import '../styles/input.css';
import Chris from '../images/message.svg';

const Half = styled.a`
  width: 100%;
  margin: auto;
  text-align: center;
  @media (min-width: 700px) {
    width: 50%;
  }
`;
const Join = () => (
  <div className='box'>
    <Half href='mailto:info@ssuf.ch'>
      <img
        style={{ borderRadius: '1rem', padding: '4em' }}
        src={Chris}
        alt=''
      />
      {/* <h3 style={{ margin: '1em 0' }}>Message us</h3>
      <h4 style={{ margin: '1em 0' }}>
        APPLY TO OUR CUSTOMIZED ACCELERATOR PROGRAM
      </h4> */}
    </Half>
    <Half>
      <div className='box'>
        <form
          action='https://formspree.io/chris.bargholz@ssuf.ch'
          method='POST'
          style={{ margin: 'auto' }}
        >
          <input
            type='text'
            name='company'
            className='emailinput'
            placeholder='Company Name'
          />
          <input
            style={{ margin: '1.5em 0' }}
            className='emailinput'
            type='email'
            placeholder='Enter your Email'
            name='_replyto'
          />
          <textarea
            name='message'
            className='textareainput'
            placeholder='Message ...'
          />
          <input className='button-blue' type='submit' value='Send' />
        </form>
      </div>
    </Half>
  </div>
);

export default Join;
