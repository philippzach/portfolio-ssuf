/* eslint-disable react/display-name */
import React, { Component } from 'react';
import { Transition, animated } from 'react-spring';
import '../../styles/pagetransitionindexfounders.css';
import Snowcookie from '../../../static/ssuf/snowcookie.jpg';
import Idun from '../../../static/ssuf/startupstories-idunx2.jpg';
import Struckd from '../../../static/ssuf/struckd.jpg';
import './arrow.css';

const pages = [
  style => (
    <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
      <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
        <img src={Idun} alt="" style={{ maxHeight: '550px' }}/>
      </div>
      <div className="w-100 w-60-ns pl3-ns flex items-center ">
        <div className="paddingfounders measure">
          <h3>IDUN Technologies</h3>
          <a href="https://iduntechnologies.ch" target="_blank"><h4>iduntechnologies.ch</h4></a>
          <span className="arrows"></span>
          <p className="lh-copy">
          We have optimal preconditions, coming from a top technical university. But the implementation and the mindset we first had to learn in a hands-on approach. The Swiss Startup Factory is excellent in bringing together people who want to move things and make it happen. Their network is very valuable for financing in Switzerland and they will be by your side during the process
          </p>
        </div>
      </div>
    </animated.div>
  ),
  style => <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
        <img src={Snowcookie} alt="" style={{ maxHeight: '550px' }}/>
      </div>
      <div className="w-100 w-60-ns pl3-ns flex items-center ">
        <div className="paddingfounders measure">
          <h3>Snowcookie</h3>
          <a href="https://snowcookie.eu" target="_blank"><h4>snowcookie.eu</h4></a>
          <span className="arrows"></span>
          <p className="lh-copy">
          The SSUF guys are for real. We came to the Swiss Startup Factory having the nuts&bolts of business case already figured out, but those guys are extremely adaptable and quickly found a way to accelerate our growth by leveraging their connections, which are impressive. They enabled us to work with Red Bull on some amazing projects
          </p>
        </div>
      </div>

  </animated.div>,
  style => <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
      <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
        <img src={Struckd} alt="" style={{ maxHeight: '550px' }} />
      </div>
      <div className="w-100 w-60-ns pl3-ns flex items-center ">
        <div className="paddingfounders measure">
          <h3>StruckD</h3>
          <a href="https://strukd.com" target="_blank"><h4>struckd.com</h4></a>
          <span className="arrows"></span>
          <p className="lh-copy">
          Without the Swiss Startup Factory our gaming platform StruckD would not exist today. 2 years ago my co-founder Silvan and I only had an idea and a pitch deck. Now we are one of the fastest growing gaming companies in Switzerland and are scaling globally. The passion and business support of the Swiss Startup Factory helped us to get, where we are now
          </p>

        </div>
      </div>
  </animated.div>
];

export default class Founders extends Component {
  state = { index: 0 };

  toggle = e =>
    this.setState(state => ({
      index: state.index === 2 ? 0 : state.index + 1,
    }));

  render() {
    return (
      <div className="founders">
      <div className="foundermain" onClick={this.toggle}>
        <Transition
          native
          reset
          unique
          items={this.state.index}
          from={{ opacity: 0, transform: 'translate3d(100%,0,0)' }}
          enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
          leave={{ opacity: 0, transform: 'translate3d(-50%,0,0)' }}
        >
          {index => pages[index]}
        </Transition>
      </div>
      </div>
    );
  }
}
