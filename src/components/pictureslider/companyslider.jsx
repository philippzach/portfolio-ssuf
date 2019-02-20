/* eslint-disable react/display-name */
import React, { Component } from 'react';
import { Transition, animated } from 'react-spring';
import '../../styles/pagetransitiondna.css';
import Knowhow from '../../../static/ssuf/philipp_wetzel.jpg';
import Network from '../../../static/ssuf/thomas_amstutz.jpg';
import './arrow.css';

const pages = [
  style => (
    <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
      <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
        <img src={Knowhow} style={{maxHeight: '600px'}} alt="" title=""/>
      </div>
      <div className="w-100 w-60-ns pl3-ns flex items-center">
        <div className="paddingdna measure">
            <h3 className="white">Philipp Wetzel</h3>
            <h5 className="white">Managing Director, AMAG Innovation & Venture LAB</h5>
            <span className="arrows"></span>
          <p className="lh-copy white">
          “The cooperation with Swiss Start Up Factory is the ideal complement to AMAG’s own innovation process, which is accelerated as a result of this partnership. This gives AMAG a very good starting position for the search, selection and management of its own mobility initiatives on the one hand and the development and support of possible start-ups in the mobility sector on the other hand.” 
          </p>
        </div>
      </div>
    </animated.div>
  ),
  style => <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
        <img src={Network} style={{maxHeight: '600px'}} alt="" title=""/>
      </div>
      <div className="w-100 w-60-ns pl3-ns flex items-center">
        <div className="paddingdna measure">
        <h3 className="white">Thomas Amstutz</h3>
            <h5 className="white">Feldschlösschen</h5>
            <span className="arrows"></span>
          <p className="lh-copy white">
          “The SSUF is the ideal partner for companies that want to break out and get some fresh input as they have large experience in working with Startups and an excellent network of engaged and highly talented people.” 
          </p>
        </div>
      </div>

  </animated.div>
];

export default class PageTransition extends Component {
  state = { index: 0 };

  toggle = e =>
    this.setState(state => ({
      index: state.index === 1 ? 0 : state.index + 1,
    }));

  render() {
    return (
      <div className="dna">
      <div className="dnamain" onClick={this.toggle}>
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
