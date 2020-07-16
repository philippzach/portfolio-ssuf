/* eslint-disable react/display-name */
import React, { Component } from 'react';
import { Transition, animated } from 'react-spring';
import '../../styles/pagetransitionabout.css';
import Mike from '../../../static/teamssuf/mike_baur.jpg';
import Oli from '../../../static/teamssuf/walzer_oliver.jpg';
import Max from '../../../static/teamssuf/max_meister.jpg';
import Sandra from '../../images/sandra.jpg';
import Sonam from '../../images/sonam.jpg';
import Simon from '../../images/simon.jpg';
import Desiree from '../../images/desiree.jpg';
import Larissa from '../../images/larissa.jpg';
import Jeroen from '../../images/jeroen_herman.jpg';
import Kirill from '../../images/kirill_babich.jpg';
// import Emanuele from '../../images/emanuele.jpg';
// import Keith from '../../../static/teamssuf/keith.jpg';
// import Daniel from '../../../static/teamssuf/daniel.jpg';
import Tamara from '../../images/tamaranew.jpg';
// import Jana from '../../../static/teamssuf/jana.jpg';

import './arrow.css';

const pages = [
  (style) => (
    <animated.div style={{ ...style }} className='flex flex-column flex-row-ns'>
      <div className='pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center'>
        <img src={Mike} alt='' style={{ maxHeight: '600px' }} />
      </div>
      <div className='w-100 w-60-ns pl3-ns flex items-center justify-center'>
        <div className='paddingfoundersabout'>
          <h4 className='mb1 dimgray'>Co-Founder</h4>
          <h3>Mike Baur</h3>
          <div className='flex'>
            <dl className='lh-title pr1-s pr2-m pr4-l mt0'>
              <dt className='f6 b'>Never without</dt>
              <dd className='ml0 mb3'>Airpods</dd>
              <dt className='f6 b mt2'>A must for reading</dt>
              <dd className='ml0 mb3'>Unlimited Power by Anthony Robbins</dd>
              <dt className='f6 b mt2'>As a child, I wanted to be</dt>
              <dd className='ml0 mb3'>
                Professional footballer or tennis professional
              </dd>
              <dt className='f6 b mt2'>Overrated</dt>
              <dd className='ml0 mb3'>A lot of people I'd met in banking</dd>
            </dl>
            <dl className='lh-title mt0'>
              <dt className='f6 b mt2'>I’m not good at</dt>
              <dd className='ml0 mb3'>Electrician works</dd>
              <dt className='f6 b mt2'>Unbelievable but true</dt>
              <dd className='ml0 mb3'>
                I had a crazy lunch with Dennis Rodman
              </dd>
              <dt className='f6 b mt2'>What Co-Founder Max says</dt>
              <dd className='ml0 mb3'>Let’s do it!</dd>
              <dt className='f6 b mt2'>What Co-Founder Oliver says</dt>
              <dd className='ml0 mb3'> I'll take a close look first!</dd>
            </dl>
          </div>
          <span className='arrows' />
        </div>
      </div>
    </animated.div>
  ),
  (style) => (
    <animated.div style={{ ...style }} className='flex flex-column flex-row-ns'>
      <div className='pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center'>
        <img src={Oli} alt='' style={{ maxHeight: '600px' }} />
      </div>
      <div className='w-100 w-60-ns pl3-ns flex items-center justify-center'>
        <div className='paddingfoundersabout'>
          <h4 className='mb1 dimgray'>Co-Founder</h4>
          <h3>Oliver Walzer</h3>
          <div className='flex'>
            <dl className='lh-title pr1-s pr2-m pr4-l mt0'>
              <dt className='f6 b'>What Co-Founder Mike says</dt>
              <dd className='ml0 mb3'>It’s all about the power of platform</dd>
              <dt className='f6 b mt2'>Still on the bucket list</dt>
              <dd className='ml0 mb3'>Seeing northern lights</dd>
              <dt className='f6 b mt2'>I always wanted to</dt>
              <dd className='ml0 mb3'>Ride in a submarine</dd>
              <dt className='f6 b mt2'>What Co-Founder Max says</dt>
              <dd className='ml0 mb3'>Please Execute (pE)</dd>
            </dl>
            <dl className='lh-title mt0'>
              <dt className='f6 b mt2'>My teen idol</dt>
              <dd className='ml0 mb3'>DJ Bobo</dd>
              <dt className='f6 b mt2'>I do best</dt>
              <dd className='ml0 mb3'>
                Finding solutions to any kind of problem
              </dd>
              <dt className='f6 b mt2'>Overestimated</dt>
              <dd className='ml0 mb3'>Money</dd>
              <dt className='f6 b mt2'>Underestimated</dt>
              <dd className='ml0 mb3'>Pragmatism</dd>
            </dl>
          </div>
          <span className='arrows' />
        </div>
      </div>
    </animated.div>
  ),
  (style) => (
    <animated.div style={{ ...style }} className='flex flex-column flex-row-ns'>
      <div className='pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center'>
        <img src={Max} alt='' style={{ maxHeight: '600px' }} />
      </div>
      <div className='w-100 w-60-ns pl3-ns flex items-center justify-center'>
        <div className='paddingfoundersabout'>
          <h4 className='mb1 dimgray'>Co-Founder</h4>
          <h3>Max Meister</h3>
          <div className='flex'>
            <dl className='lh-title pr1-s pr2-m pr4-l mt0'>
              <dt className='f6 b'>Favorite Heroes</dt>
              <dd className='ml0 mb3'>
                MacGuyver, Colt Seaver, Eddie the Eagle
              </dd>
              <dt className='f6 b mt2'>Passion</dt>
              <dd className='ml0 mb3'>Swimming</dd>
              <dt className='f6 b mt2'>You didn't know that about me</dt>
              <dd className='ml0 mb3'>I used to have Rastas</dd>
              <dt className='f6 b mt2'>Negligible vices</dt>
              <dd className='ml0 mb3'>approx. 15 coffees a day</dd>
            </dl>
            <dl className='lh-title mt0'>
              <dt className='f6 b mt2'>Always goes</dt>
              <dd className='ml0 mb3'>Underpromise, Overdeliver</dd>
              <dt className='f6 b mt2'>Last thing in the evening</dt>
              <dd className='ml0 mb3'>
                Netflix - 2 minutes before I fall asleep{' '}
              </dd>
              <dt className='f6 b mt2'>What Co-Founder Oliver says</dt>
              <dd className='ml0 mb3'> I'll take a close look first!</dd>
              <dt className='f6 b mt2'>What Co-Founder Mike says</dt>
              <dd className='ml0 mb3'>GoGoGo!</dd>
            </dl>
          </div>
          <span className='arrows' />
        </div>
      </div>
    </animated.div>
  ),
  (style) => (
    <animated.div style={{ ...style }} className='flex flex-column flex-row-ns'>
      <div className='pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center'>
        <img src={Simon} alt='' style={{ maxHeight: '600px' }} />
      </div>
      <div className='w-100 w-60-ns pl3-ns flex items-center justify-center'>
        <div className='paddingfoundersabout'>
          <h4 className='mb1 dimgray'>CEO</h4>
          <h3>Simon Koch</h3>
          <div className='flex'>
            <dl className='lh-title pr1-s pr2-m pr4-l mt0'>
              <dt className='f6 b'>Still on the bucket list</dt>
              <dd className='ml0 mb3'>Honeymoon</dd>
              <dt className='f6 b mt2'>I always wanted to</dt>
              <dd className='ml0 mb3'>Challenge myself</dd>
              <dt className='f6 b mt2'>Favorite Tool</dt>
              <dd className='ml0 mb3'>Kindle</dd>
              <dt className='f6 b mt2'>My teen idol</dt>
              <dd className='ml0 mb3'>Michael Jordan</dd>
            </dl>
            <dl className='lh-title mt0'>
              <dt className='f6 b mt2'>I do best</dt>
              <dd className='ml0 mb3'>Inspire others</dd>
              <dt className='f6 b mt2'>Overestimated</dt>
              <dd className='ml0 mb3'>What we can achieve in a year</dd>
              <dt className='f6 b mt2'>Underestimated</dt>
              <dd className='ml0 mb3'>What we can achieve in a decade</dd>
              <dt className='f6 b mt2'>Favorite book</dt>
              <dd className='ml0 mb3'>The War of Art by Steven Pressfield</dd>
            </dl>
          </div>
          <span className='arrows' />
        </div>
      </div>
    </animated.div>
  ),
  (style) => (
    <animated.div style={{ ...style }} className='flex flex-column flex-row-ns'>
      <div className='pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center'>
        <img src={Sonam} alt='' style={{ maxHeight: '600px' }} />
      </div>
      <div className='w-100 w-60-ns pl3-ns flex items-center justify-center'>
        <div className='paddingfoundersabout'>
          <h4 className='mb1 dimgray'>Venture and Innovation Analyst</h4>
          <h3>Sonam Bhuka</h3>
          <div className='flex'>
            <dl className='lh-title pr1-s pr2-m pr4-l mt0'>
              <dt className='f6 b'>Where I'm from</dt>
              <dd className='ml0 mb3'>Chur, GR</dd>
              <dt className='f6 b mt2'>Still on my bucket list</dt>
              <dd className='ml0 mb3'>
                Tansania: Going on a safari and hiking up Kilimanjaro
              </dd>
              <dt className='f6 b mt2'>Favorite drink</dt>
              <dd className='ml0 mb3'>Moscow Mule</dd>
              <dt className='f6 b mt2'>One thing nobody knows about me </dt>
              <dd className='ml0 mb3'>
                Used to play the piano in a small theatre
              </dd>
            </dl>
            <dl className='lh-title mt0'>
              <dt className='f6 b mt2'>Favorite vacation spot</dt>
              <dd className='ml0 mb3'>Anywhere up in the mountains</dd>
              <dt className='f6 b mt2'>Never without</dt>
              <dd className='ml0 mb3'>Laptop and charger</dd>
              <dt className='f6 b mt2'>Overrated</dt>
              <dd className='ml0 mb3'>Suits</dd>
              <dt className='f6 b mt2'>Underrated</dt>
              <dd className='ml0 mb3'>Fruits</dd>
            </dl>
          </div>
          <span className='arrows' />
        </div>
      </div>
    </animated.div>
  ),
];

export default class PageTransition extends Component {
  state = { index: 0 };

  toggle = (e) =>
    this.setState((state) => ({
      index: state.index === 4 ? 0 : state.index + 1,
    }));

  render() {
    return (
      <div className='about'>
        <div className='aboutmain' onClick={this.toggle}>
          <Transition
            native
            reset
            unique
            items={this.state.index}
            from={{ opacity: 0, transform: 'translate3d(100%,0,0)' }}
            enter={{ opacity: 1, transform: 'translate3d(0%,0,0)' }}
            leave={{ opacity: 0, transform: 'translate3d(-50%,0,0)' }}
          >
            {(index) => pages[index]}
          </Transition>
        </div>
      </div>
    );
  }
}
