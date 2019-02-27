/* eslint-disable react/display-name */
import React, { Component } from 'react';
import { Transition, animated } from 'react-spring';
import '../../styles/pagetransitionabout.css';
import Mike from '../../../static/teamssuf/mike_baur.jpg';
import Oli from '../../../static/teamssuf/walzer_oliver.jpg';
import Max from '../../../static/teamssuf/max_meister.jpg';
import Chris from '../../../static/teamssuf/chris_bargholz.jpg';
import Ginie from '../../images/ginie.jpg';
import Cindy from '../../images/cindyspelt.jpg';
import Keith from '../../../static/teamssuf/keith.jpg';

import './arrow.css';

const pages = [
  style => (
    <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
      <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
        <img src={Max} alt="" style={{ maxHeight: '600px' }}/>
      </div>
      <div className="w-100 w-60-ns pl3-ns flex items-center justify-center">
        <div className="paddingfoundersabout">
          <h4 className="mb1 dimgray">Co-Founder</h4>
          <h3>Max Meister</h3>
          <div className="flex">
          <dl class="lh-title pr1-s pr2-m pr4-l mt0">
              <dt class="f6 b">Favorite Heroes</dt>
              <dd class="ml0 mb3">MacGuyver, Colt Seaver, Eddie the Eagle</dd>
              <dt class="f6 b mt2">Passion</dt>
              <dd class="ml0 mb3">Swimming</dd>
              <dt class="f6 b mt2">You didn't know that about me</dt>
              <dd class="ml0 mb3">I used to have Rastas</dd>
              <dt class="f6 b mt2">Negligible vices</dt>
              <dd class="ml0 mb3">approx. 15 coffees a day</dd>
            </dl>
            <dl class="lh-title mt0">
              <dt class="f6 b mt2">Always goes</dt>
              <dd class="ml0 mb3">Underpromise, Overdeliver</dd>
              <dt class="f6 b mt2">Last thing in the evening</dt>
              <dd class="ml0 mb3">Netflix - 2 minutes before I fall asleep </dd>
              <dt class="f6 b mt2">What Co-Founder Oliver says</dt>
              <dd class="ml0 mb3"> I'll take a close look first!</dd>
              <dt class="f6 b mt2">What Co-Founder Mike says</dt>
              <dd class="ml0 mb3">GoGoGo!</dd>
          </dl>
          </div>
          <span className="arrows"></span>
        </div>
      </div>
    </animated.div>
  ),
  style => <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
    <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
        <img src={Mike} alt="" style={{ maxHeight: '600px' }}/>
      </div>
      <div className="w-100 w-60-ns pl3-ns flex items-center justify-center">
        <div className="paddingfoundersabout">
          <h4 className="mb1 dimgray">Co-Founder</h4>
          <h3>Mike Baur</h3>
          <div className="flex">
          <dl class="lh-title pr1-s pr2-m pr4-l mt0">
              <dt class="f6 b">Never without</dt>
              <dd class="ml0 mb3">Airpods</dd>
              <dt class="f6 b mt2">A must for reading</dt>
              <dd class="ml0 mb3">Unlimited Power by Anthony Robbins</dd>
              <dt class="f6 b mt2">As a child, I wanted to be</dt>
              <dd class="ml0 mb3">Professional footballer or tennis professional</dd>
              <dt class="f6 b mt2">Overrated</dt>
              <dd class="ml0 mb3">A lot of people I'd met in banking</dd>
            </dl>
            <dl class="lh-title mt0">
              <dt class="f6 b mt2">I’m not good at</dt>
              <dd class="ml0 mb3">Electrician works</dd>
              <dt class="f6 b mt2">Unbelievable but true</dt>
              <dd class="ml0 mb3">I had a crazy lunch with Dennis Rodman</dd>
              <dt class="f6 b mt2">What Co-Founder Max says</dt>
              <dd class="ml0 mb3">Let’s do it!</dd>
              <dt class="f6 b mt2">What Co-Founder Oliver says</dt>
              <dd class="ml0 mb3"> I'll take a close look first!</dd>
          </dl>
          </div>
          <span className="arrows"></span>
        </div>
      </div>

  </animated.div>,
  style => <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
      <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
        <img src={Oli} alt="" style={{ maxHeight: '600px' }} />
      </div>
      <div className="w-100 w-60-ns pl3-ns flex items-center justify-center">
        <div className="paddingfoundersabout">
          <h4 className="mb1 dimgray">Co-Founder</h4>
          <h3>Oliver Walzer</h3>
          <div className="flex">
          <dl class="lh-title pr1-s pr2-m pr4-l mt0">
              <dt class="f6 b">What Co-Founder Mike says</dt>
              <dd class="ml0 mb3">It’s all about the power of platform</dd>
              <dt class="f6 b mt2">Still on the bucket list</dt>
              <dd class="ml0 mb3">Seeing northern lights</dd>
              <dt class="f6 b mt2">I always wanted to</dt>
              <dd class="ml0 mb3">Ride in a submarine</dd>
              <dt class="f6 b mt2">Favorite Tool</dt>
              <dd class="ml0 mb3">Harvest</dd>
            </dl>
            <dl class="lh-title mt0">
              <dt class="f6 b mt2">My teen idol</dt>
              <dd class="ml0 mb3">DJ Bobo</dd>
              <dt class="f6 b mt2">I do best</dt>
              <dd class="ml0 mb3">Finding solutions to any kind of problem</dd>
              <dt class="f6 b mt2">Overestimated</dt>
              <dd class="ml0 mb3">Money</dd>
              <dt class="f6 b mt2">Underestimated</dt>
              <dd class="ml0 mb3">Pragmatism</dd>
          </dl>
          </div>
          <span className="arrows"></span>
        </div>
      </div>
  </animated.div>,
   style => <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
   <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
     <img src={Chris} alt="" style={{ maxHeight: '600px' }} />
   </div>
   <div className="w-100 w-60-ns pl3-ns flex items-center justify-center">
     <div className="paddingfoundersabout">
       <h4 className="mb1 dimgray">COO & Head of Acceleration</h4>
       <h3>Chris Bargholz</h3>
       <div className="flex">
          <dl class="lh-title pr1-s pr2-m pr4-l mt0">
              <dt class="f6 b">Never without</dt>
              <dd class="ml0 mb3">My Team</dd>
              <dt class="f6 b mt2">Rituals</dt>
              <dd class="ml0 mb3">Fridays Thai Box Sparring at the Dado</dd>
              <dt class="f6 b mt2">I’m not good at</dt>
              <dd class="ml0 mb3">Being patient</dd>
              <dt class="f6 b mt2">Favourite tool</dt>
              <dd class="ml0 mb3">My Skateboard</dd>
            </dl>
            <dl class="lh-title mt0">
              <dt class="f6 b mt2">Center of life</dt>
              <dd class="ml0 mb3">Una mujer muy especial</dd>
              <dt class="f6 b mt2">How I live</dt>
              <dd class="ml0 mb3">Above Zurich</dd>
              <dt class="f6 b mt2">What am I actually doing here</dt>
              <dd class="ml0 mb3">Setting up startups</dd>
              <dt class="f6 b mt2">Favorite Hero</dt>
              <dd class="ml0 mb3">Ragnar Lothbrok</dd>
          </dl>
          </div>
          <span className="arrows"></span>
     </div>
   </div>
</animated.div>,
style => <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
<div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
  <img src={Ginie} alt="" style={{ maxHeight: '600px' }} />
</div>
<div className="w-100 w-60-ns pl3-ns flex items-center justify-center">
  <div className="paddingfoundersabout">
    <h4 className="mb1 dimgray">Head of Communications & Marketing</h4>
    <h3>Virginia Beljean</h3>
    <div className="flex">
       <dl class="lh-title pr1-s pr2-m pr4-l mt0">
           <dt class="f6 b">Rituals</dt>
           <dd class="ml0 mb3">Coffee every morning</dd>
           <dt class="f6 b mt2">I can do best</dt>
           <dd class="ml0 mb3">Laugh and react to the situation in an appropriate way</dd>
           <dt class="f6 b mt2">I’m not good at</dt>
           <dd class="ml0 mb3">Being patient</dd>
           <dt class="f6 b mt2">Overrated</dt>
           <dd class="ml0 mb3">Truffles and being patient</dd>
         </dl>
         <dl class="lh-title mt0">
           <dt class="f6 b mt2">Underrated</dt>
           <dd class="ml0 mb3">Many young people</dd>
           <dt class="f6 b mt2">Mountains or Beach</dt>
           <dd class="ml0 mb3">Diversity is key!</dd>
           <dt class="f6 b mt2">That’s what the table neighbor says</dt>
           <dd class="ml0 mb3">No simple answer to such a simple question</dd>
           <dt class="f6 b mt2">I live</dt>
           <dd class="ml0 mb3">Between forest and concrete jungle</dd>
       </dl>
       </div>
       <span className="arrows"></span>
  </div>
</div>
</animated.div>,
style => <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
<div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
  <img src={Keith} alt="" style={{ maxHeight: '600px' }} />
</div>
<div className="w-100 w-60-ns pl3-ns flex items-center justify-center">
  <div className="paddingfoundersabout">
    <h4 className="mb1 dimgray">Startup Coach</h4>
    <h3>Keith Gunura</h3>
    <div className="flex">
       <dl class="lh-title pr1-s pr2-m pr4-l mt0">
           <dt class="f6 b">No-Go</dt>
           <dd class="ml0 mb3">Peer pressure</dd>
           <dt class="f6 b mt2">Never without</dt>
           <dd class="ml0 mb3">Hunger to learn</dd>
           <dt class="f6 b mt2">My desktop</dt>
           <dd class="ml0 mb3">Nothing there</dd>
           <dt class="f6 b mt2">A must to read</dt>
           <dd class="ml0 mb3">The Soldierson Trilogy by Robin Hobb</dd>
         </dl>
         <dl class="lh-title mt0">
           <dt class="f6 b mt2">Summer Residence</dt>
           <dd class="ml0 mb3">Zurich</dd>
           <dt class="f6 b mt2">Winter residence</dt>
           <dd class="ml0 mb3">Chinhoyi, Zimbabwe</dd>
           <dt class="f6 b mt2">Unbelievable but true</dt>
           <dd class="ml0 mb3">I am</dd>
           <dt class="f6 b mt2">Take time off with</dt>
           <dd class="ml0 mb3">Making or breaking stuff</dd>
       </dl>
       </div>
       <span className="arrows"></span>
  </div>
</div>
</animated.div>,
style => <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
<div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
  <img src={Cindy} alt="" style={{ maxHeight: '600px' }} />
</div>
<div className="w-100 w-60-ns pl3-ns flex items-center justify-center">
  <div className="paddingfoundersabout">
    <h4 className="mb1 dimgray">Head of Platform</h4>
    <h3>Cindy Spelt</h3>
    <div className="flex">
       <dl class="lh-title pr1-s pr2-m pr4-l mt0">
           <dt class="f6 b">Always goes</dt>
           <dd class="ml0 mb3">Always believe in yourself</dd>
           <dt class="f6 b mt2">Never without:</dt>
           <dd class="ml0 mb3">My high heels</dd>
           <dt class="f6 b mt2">As a child, I wanted to be:</dt>
           <dd class="ml0 mb3">A jet fighter pilot</dd>
           <dt class="f6 b mt2">Secret Tip:</dt>
           <dd class="ml0 mb3">How to pack your suitcase in 2 minutes</dd>
         </dl>
         <dl class="lh-title mt0">
           <dt class="f6 b mt2">I can do best:</dt>
           <dd class="ml0 mb3">Listening</dd>
           <dt class="f6 b mt2">I'm not good at:</dt>
           <dd class="ml0 mb3">Following a recipe, I always have to give it a twist.</dd>
           <dt class="f6 b mt2">Unbelievable but true</dt>
           <dd class="ml0 mb3">Playing the drums</dd>
           <dt class="f6 b mt2">I like</dt>
           <dd class="ml0 mb3">Drinking a cup of coffee on a terrace in Paris</dd>
       </dl>
       </div>
       <span className="arrows"></span>
  </div>
</div>
</animated.div>
];

export default class PageTransition extends Component {
  state = { index: 0 };

  toggle = e =>
    this.setState(state => ({
      index: state.index === 6 ? 0 : state.index + 1,
    }));

  render() {
    return (
      <div className="about">
      <div className="aboutmain" onClick={this.toggle}>
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
