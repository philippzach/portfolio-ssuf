/* eslint-disable react/display-name */
import React, { Component } from 'react';
import { Transition, animated } from 'react-spring';
import '../../styles/pagetransitionabout.css';
import Mike from '../../../static/teamssuf/mike_baur.jpg';
import Oli from '../../../static/teamssuf/walzer_oliver.jpg';
import Max from '../../../static/teamssuf/max_meister.jpg';
import Sandra from '../../images/sandra.jpg';
import Sonam from '../../images/sonam.jpg';
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
  style => (
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
  style => (
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
  style => (
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
  style => (
    <animated.div style={{ ...style }} className='flex flex-column flex-row-ns'>
      <div className='pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center'>
        <img src={Desiree} alt='' style={{ maxHeight: '600px' }} />
      </div>
      <div className='w-100 w-60-ns pl3-ns flex items-center justify-center'>
        <div className='paddingfoundersabout'>
          <h4 className='mb1 dimgray'>CEO</h4>
          <h3>Désirée Heutschi</h3>
          <div className='flex'>
            <dl className='lh-title pr1-s pr2-m pr4-l mt0'>
              <dt className='f6 b'>Place of residence</dt>
              <dd className='ml0 mb3'>Zug</dd>
              <dt className='f6 b mt2'>Favorite heroes</dt>
              <dd className='ml0 mb3'>V.S. Naipaul</dd>
              <dt className='f6 b mt2'>Passion</dt>
              <dd className='ml0 mb3'>Getting off the beaten track</dd>
              <dt className='f6 b mt2'>You didn't know that about me</dt>
              <dd className='ml0 mb3'>
                Silver in Swiss championship over 800m
              </dd>
            </dl>
            <dl className='lh-title mt0'>
              <dt className='f6 b mt2'>Never without</dt>
              <dd className='ml0 mb3'>Curiosity</dd>
              <dt className='f6 b mt2'>Unbelievable but true</dt>
              <dd className='ml0 mb3'>Starred in a movie</dd>
              <dt className='f6 b mt2'>Always goes</dt>
              <dd className='ml0 mb3'>
                Getting to grips with a changing environment
              </dd>
              <dt className='f6 b mt2'>No-Go</dt>
              <dd className='ml0 mb3'>Inertia</dd>
            </dl>
          </div>
          <span className='arrows' />
        </div>
      </div>
    </animated.div>
  ),
  style => (
    <animated.div style={{ ...style }} className='flex flex-column flex-row-ns'>
      <div className='pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center'>
        <img src={Jeroen} alt='' style={{ maxHeight: '600px' }} />
      </div>
      <div className='w-100 w-60-ns pl3-ns flex items-center justify-center'>
        <div className='paddingfoundersabout'>
          <h4 className='mb1 dimgray'>Head of Corporate Acceleration</h4>
          <h3>Jeroen Hermans</h3>
          <div className='flex'>
            <dl className='lh-title pr1-s pr2-m pr4-l mt0'>
              <dt className='f6 b'>Place of residence</dt>
              <dd className='ml0 mb3'>Zürich</dd>
              <dt className='f6 b mt2'>Never without</dt>
              <dd className='ml0 mb3'>Music</dd>
              <dt className='f6 b mt2'>Rituals</dt>
              <dd className='ml0 mb3'>
                Make my bed every morning - first task of the day completed!
              </dd>
              <dt className='f6 b mt2'>I Like</dt>
              <dd className='ml0 mb3'>‘niksen’ (Google it)</dd>
            </dl>
            <dl className='lh-title mt0'>
              <dt className='f6 b mt2'>Overrated</dt>
              <dd className='ml0 mb3'>Growing up</dd>
              <dt className='f6 b mt2'>Underrated</dt>
              <dd className='ml0 mb3'>Laughter</dd>
              <dt className='f6 b mt2'>Unbelievable but true</dt>
              <dd className='ml0 mb3'>
                Not all Dutch people are from Holland or from Europe
              </dd>
              <dt className='f6 b mt2'>Must have seen</dt>
              <dd className='ml0 mb3'>
                Torres del Paine National Park (Chile)
              </dd>
            </dl>
          </div>
          <span className='arrows' />
        </div>
      </div>
    </animated.div>
  ),
  style => (
    <animated.div style={{ ...style }} className='flex flex-column flex-row-ns'>
      <div className='pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center'>
        <img src={Tamara} alt='' style={{ maxHeight: '600px' }} />
      </div>
      <div className='w-100 w-60-ns pl3-ns flex items-center justify-center'>
        <div className='paddingfoundersabout'>
          <h4 className='mb1 dimgray'>Head of Company Buildung</h4>
          <h3>Tamara Savchuk</h3>
          <div className='flex'>
            <dl className='lh-title pr1-s pr2-m pr4-l mt0'>
              <dt className='f6 b'>Overrated</dt>
              <dd className='ml0 mb3'>Star Wars</dd>
              <dt className='f6 b mt2'>Underrated</dt>
              <dd className='ml0 mb3'>Self-care</dd>
              <dt className='f6 b mt2'>I can do best</dt>
              <dd className='ml0 mb3'>overthink</dd>
              <dt className='f6 b mt2'>I’m not good at</dt>
              <dd className='ml0 mb3'>waiting</dd>
            </dl>
            <dl className='lh-title mt0'>
              <dt className='f6 b mt2'>I always wanted to</dt>
              <dd className='ml0 mb3'>Be a professional tennis player</dd>
              <dt className='f6 b mt2'>Favorite App</dt>
              <dd className='ml0 mb3'>Uber</dd>
              <dt className='f6 b mt2'>Passion</dt>
              <dd className='ml0 mb3'>Startups, modern art and wine</dd>
              <dt className='f6 b mt2'>Favorite Book</dt>
              <dd className='ml0 mb3'>
                The Art of Thinking Clearly, Rolf Dobelli
              </dd>
            </dl>
          </div>
          <span className='arrows' />
        </div>
      </div>
    </animated.div>
  ),

  style => (
    <animated.div style={{ ...style }} className='flex flex-column flex-row-ns'>
      <div className='pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center'>
        <img src={Kirill} alt='' style={{ maxHeight: '600px' }} />
      </div>
      <div className='w-100 w-60-ns pl3-ns flex items-center justify-center'>
        <div className='paddingfoundersabout'>
          <h4 className='mb1 dimgray'>Venture Builder</h4>
          <h3>Kirill Babich</h3>
          <div className='flex'>
            <dl className='lh-title pr1-s pr2-m pr4-l mt0'>
              <dt className='f6 b'>Always goes</dt>
              <dd className='ml0 mb3'>
                Investing time and money into innovative ideas
              </dd>
              <dt className='f6 b mt2'>Never without</dt>
              <dd className='ml0 mb3'>Confidence and faith</dd>
              <dt className='f6 b mt2'>As a child, I wanted to be</dt>
              <dd className='ml0 mb3'>Investment banker</dd>
              <dt className='f6 b mt2'>Secret tip</dt>
              <dd className='ml0 mb3'>
                Never give up, never give in. Everything is possible, the
                impossible simply takes more time.
              </dd>
            </dl>
            <dl className='lh-title mt0'>
              <dt className='f6 b mt2'>I can do best</dt>
              <dd className='ml0 mb3'>
                Exceeding the limits of what is possible in order to achieve the
                impossible
              </dd>
              <dt className='f6 b mt2'>I’m not good at</dt>
              <dd className='ml0 mb3'>
                Losing or giving up on something important to me
              </dd>
              <dt className='f6 b mt2'>Unbelievable but true</dt>
              <dd className='ml0 mb3'>
                Started my first business at age of 15
              </dd>
              <dt className='f6 b mt2'>I like</dt>
              <dd className='ml0 mb3'>
                Disruptive innovations and new technology
              </dd>
            </dl>
          </div>
          <span className='arrows' />
        </div>
      </div>
    </animated.div>
  ),
  style => (
    <animated.div style={{ ...style }} className='flex flex-column flex-row-ns'>
      <div className='pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center'>
        <img src={Larissa} alt='' style={{ maxHeight: '600px' }} />
      </div>
      <div className='w-100 w-60-ns pl3-ns flex items-center justify-center'>
        <div className='paddingfoundersabout'>
          <h4 className='mb1 dimgray'>Marketing & Communication Manager</h4>
          <h3>Larissa Truffer</h3>
          <div className='flex'>
            <dl className='lh-title pr1-s pr2-m pr4-l mt0'>
              <dt className='f6 b'>No-Go</dt>
              <dd className='ml0 mb3'>Arrogance</dd>
              <dt className='f6 b mt2'>I Like</dt>
              <dd className='ml0 mb3'>Pasta</dd>
              <dt className='f6 b mt2'>Never without</dt>
              <dd className='ml0 mb3'>Mobile phone and handkerchiefs</dd>
              <dt className='f6 b mt2'>My Desktop</dt>
              <dd className='ml0 mb3'>Must be cleaned up every week</dd>
            </dl>
            <dl className='lh-title mt0'>
              <dt className='f6 b mt2'>Summer Residence</dt>
              <dd className='ml0 mb3'>Lake Zurich</dd>
              <dt className='f6 b mt2'>Winter residence</dt>
              <dd className='ml0 mb3'>Warm Bed</dd>
              <dt className='f6 b mt2'>Unbelievable but true</dt>
              <dd className='ml0 mb3'>I once had red, short hair</dd>
              <dt className='f6 b mt2'>What's easy</dt>
              <dd className='ml0 mb3'>to get up early</dd>
            </dl>
          </div>
          <span className='arrows' />
        </div>
      </div>
    </animated.div>
  ),
  style => (
    <animated.div style={{ ...style }} className='flex flex-column flex-row-ns'>
      <div className='pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center'>
        <img src={Sandra} alt='' style={{ maxHeight: '600px' }} />
      </div>
      <div className='w-100 w-60-ns pl3-ns flex items-center justify-center'>
        <div className='paddingfoundersabout'>
          <h4 className='mb1 dimgray'>Head of Marketing</h4>
          <h3>Sandra Kobel</h3>
          <div className='flex'>
            <dl className='lh-title pr1-s pr2-m pr4-l mt0'>
              <dt className='f6 b'>I like</dt>
              <dd className='ml0 mb3'>Deep talk and good laugther </dd>
              <dt className='f6 b mt2'>Passion</dt>
              <dd className='ml0 mb3'>explore something new and unknown</dd>
              <dt className='f6 b mt2'>You didn't know that about me</dt>
              <dd className='ml0 mb3'>
                never played any kind of a muscial instrument
              </dd>
              <dt className='f6 b mt2'>Secret tip</dt>
              <dd className='ml0 mb3'>Playa Junquillal in Costa Rica</dd>
            </dl>
            <dl className='lh-title mt0'>
              <dt className='f6 b mt2'>My Charisma</dt>
              <dd className='ml0 mb3'>Audrey Hepburn</dd>
              <dt className='f6 b mt2'>No-Go</dt>
              <dd className='ml0 mb3'>dishonest people</dd>
              <dt className='f6 b mt2'>I've always wanted to</dt>
              <dd className='ml0 mb3'>visit tibet</dd>
              <dt className='f6 b mt2'>Take time off with</dt>
              <dd className='ml0 mb3'>Sports, nights out, travel</dd>
            </dl>
          </div>
          <span className='arrows' />
        </div>
      </div>
    </animated.div>
  ),
  style => (
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
  )
];

export default class PageTransition extends Component {
  state = { index: 0 };

  toggle = e =>
    this.setState(state => ({
      index: state.index === 9 ? 0 : state.index + 1
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
            {index => pages[index]}
          </Transition>
        </div>
      </div>
    );
  }
}
