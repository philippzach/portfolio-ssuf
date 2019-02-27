/* eslint-disable react/display-name */
import React, { Component } from 'react';
import { Transition, animated } from 'react-spring';
import linkedin from '../../../static/ssuf/linkedin.svg';
import '../../styles/pagetransitionadvisors.css';

import Mentor1 from '../../../static/ssuf/mentors/mentor-big-1.jpg';
import Mentor2 from '../../../static/ssuf/mentors/mentor-big-2.jpg';
import Mentor3 from '../../../static/ssuf/mentors/mentor-big-3.jpg';
import Mentor4 from '../../../static/ssuf/mentors/mentor-big-4.jpg';
import Mentor5 from '../../../static/ssuf/mentors/mentor-big-5.jpg';
import Mentor6 from '../../../static/ssuf/mentors/mentor-big-6.jpg';
import Mentor7 from '../../../static/ssuf/mentors/mentor-big-7.jpg';
import Mentor8 from '../../../static/ssuf/mentors/mentor-big-8.jpg';
import Mentor9 from '../../../static/ssuf/mentors/mentor-big-9.jpg';
import Mentor10 from '../../../static/ssuf/mentors/mentor-big-10.jpg';
import Mentor11 from '../../../static/ssuf/mentors/mentor-big-11.jpg';
import Mentor12 from '../../../static/ssuf/mentors/mentor-big-12.jpg';
import Mentor13 from '../../../static/ssuf/mentors/mentor-big-13.jpg';
import Mentor14 from '../../../static/ssuf/mentors/mentor-big-14.jpg';
import Mentor15 from '../../../static/ssuf/mentors/mentor-big-15.jpg';
import Mentor16 from '../../../static/ssuf/mentors/mentor-big-16.jpg';
import Mentor18 from '../../../static/ssuf/mentors/mentor-big-18.jpg';
import Mentor19 from '../../../static/ssuf/mentors/mentor-big-19.jpg';
import Mentor20 from '../../../static/ssuf/mentors/mentor-big-20.jpg';
import Mentor21 from '../../../static/ssuf/mentors/mentor-big-21.jpg';
import Mentor24 from '../../../static/ssuf/mentors/mentor-big-24.jpg';
import Mentor25 from '../../../static/ssuf/mentors/mentor-big-25.jpg';
import Mentor27 from '../../../static/ssuf/mentors/mentor-big-27.jpg';
import Mentor28 from '../../../static/ssuf/mentors/mentor-big-28.jpg';
import Mentor29 from '../../../static/ssuf/mentors/mentor-big-29.jpg';
import Mentor30 from '../../../static/ssuf/mentors/mentor-big-30.jpg';
import Mentor32 from '../../../static/ssuf/mentors/mentor-big-32.jpg';
import Mentor33 from '../../../static/ssuf/mentors/mentor-big-33.jpg';
import Mentor34 from '../../../static/ssuf/mentors/mentor-big-34.jpg';
import Mentor35 from '../../../static/ssuf/mentors/mentor-big-35.jpg';
import Mentor36 from '../../../static/ssuf/mentors/mentor-big-36.jpg';
import Mentor37 from '../../../static/ssuf/mentors/mentor-big-37.jpg';
import Mentor38 from '../../../static/ssuf/mentors/mentor-big-38.jpg';
import Mentor39 from '../../../static/ssuf/mentors/mentor-big-39.jpg';
import Mentor40 from '../../../static/ssuf/mentors/mentor-big-40.jpg';
import Mentor41 from '../../../static/ssuf/mentors/mentor-big-41.jpg';
import Mentor42 from '../../../static/ssuf/mentors/mentor-big-42.jpg';
import Mentor43 from '../../../static/ssuf/mentors/mentor-big-43.jpg';
import Mentor44 from '../../../static/ssuf/mentors/mentor-big-44.jpg';
import Mentor45 from '../../../static/ssuf/mentors/mentor-big-45.jpg';
import Mentor46 from '../../../static/ssuf/mentors/mentor-big-46.jpg';
import Mentor47 from '../../../static/ssuf/mentors/mentor-big-47.jpg';
import Mentor48 from '../../../static/ssuf/mentors/mentor-big-48.jpg';
import Mentor50 from '../../../static/ssuf/mentors/mentor-big-50.jpg';
import Mentor51 from '../../../static/ssuf/mentors/mentor-big-51.jpg';
import Mentor52 from '../../../static/ssuf/mentors/mentor-big-52.jpg';
import Mentor53 from '../../../static/ssuf/mentors/mentor-big-53.jpg';
import Mentor54 from '../../../static/ssuf/mentors/mentor-big-54.jpg';
import Mentor55 from '../../../static/ssuf/mentors/mentor-big-55.jpg';
import Mentor56 from '../../../static/ssuf/mentors/mentor-big-56.jpg';
import Mentor57 from '../../../static/ssuf/mentors/mentor-big-57.jpg';
import Mentor59 from '../../../static/ssuf/mentors/mentor-big-59.jpg';
import Mentor60 from '../../../static/ssuf/mentors/mentor-big-60.jpg';
import Mentor61 from '../../../static/ssuf/mentors/mentor-big-61.jpg';

import './arrow.css';

const pages = [
    style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
          <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor1} alt="" style={{ maxHeight: '550px' }}/>
          </div>
          <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
              <h3>Jeremy Tai Abbett</h3>
              <span className="arrows"></span>
              <p className="lh-copy">
              Creative Evangelist
              </p>
              <a href="https://www.linkedin.com/in/jeremyabbett/?locale=de_DE">
                <img src={linkedin} />
              </a>
            </div>
          </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor2} alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Cem	Aydogan</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>CEO</b><br/>
                PhytoNet AG
                </p>
                <a href="https://www.linkedin.com/in/cemaydogan/?locale=de_DE">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor3} alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Roger Baur</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>CEO</b><br/>
                Netprofit AG
                </p>
                <a href="https://www.linkedin.com/in/roger-baur-979a8a8/">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor4} alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Daniel Biene</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>General Manager  </b><br/>
                Axiom
                </p>
                <a href="https://www.linkedin.com/in/danielbiene/">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor5} alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Raphael	Bienz</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>CEO</b><br/>
                Blueglass
                </p>
                <a href="https://www.linkedin.com/in/rbienz/">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor6} alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Adrian Bieri</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Director Corporate Finance</b><br/>
                KPMG
                </p>
                <a href="https://www.linkedin.com/in/adrian-bieri-181b51a/">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor7} alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Otto Bitterli</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Founder</b><br/>
                bi-digital GmbH
                </p>
                <a href="https://www.linkedin.com/in/otto-bitterli-8512ab78/">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor8} alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Noel Blessing</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Owner</b><br/>
                Blessing Digital Consulting
                </p>
                <a href="https://www.linkedin.com/in/noel-blessing-417a0510/?locale=de_DE">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor9} alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Christian	Brand</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Partner and COO</b><br/>
                DAC System
                </p>
                <a href="https://www.linkedin.com/in/christian-brand-601369/">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor10} alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Nicolas	Bürer</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Managing Director</b><br/>
                digitalswitzerland 
                </p>
                <a href="https://www.linkedin.com/in/nicolasburer/">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor11}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Alex Curiger</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Managing Owner</b><br/>
                DRINK.ch / Silverbogen AG
                </p>
                <a href="https://www.linkedin.com/in/curiger/">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor12}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Mohammad Dastmaltchi</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Chairman of the Board of Directors</b><br/>
                Union Bank AG
                </p>
                <a href="https://www.linkedin.com/in/mohammad-hans-dastmaltchi-177b9a5b/?locale=de_DE">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor13}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Guillaume	Dubray</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Managing Partner </b><br/>
                Polytech Ventures
                </p>
                <a href="https://www.linkedin.com/in/guillaume-dubray-81127b/">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor14}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Oliver Durrer</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Founder</b><br/>
                SwissLEAP Ltd
                </p>
                <a href="https://www.linkedin.com/in/oliverdurrer/?locale=de_DE">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor15}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Frank	Edelkraut</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Managing Partner </b><br/>
                Mentus GmbH
                </p>
                <a href="https://www.linkedin.com/in/frankedelkraut/">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor16}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Kerstin Elsholz</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Managing Director</b><br/>
                Sovendus
                </p>
                <a href="https://www.linkedin.com/in/kerstinelsholz/?locale=de_DE">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor18}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Samuel Fricker</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Professor</b><br/>
                University of Applied Science and Arts Northwestern Switzerland FHNW
                </p>
                <a href="https://www.linkedin.com/in/samuelfricker/?locale=de_DE">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor19}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Sacha D. Gerber</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>CFO</b><br/>
                Calida
                </p>
                <a href="https://www.linkedin.com/in/sacha-d-gerber-75954953/">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor20}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Alex Grechanowski</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Owner & Digital Marketing Specialist </b><br/>
                Marketing Sutra
                </p>
                <a href="https://www.linkedin.com/in/grechanowski/">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor21}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Pascal Gurtner</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Senior Innovation Manager</b><br/>
                Helvetia Versicherungen Schweiz
                </p>
                <a href="https://www.linkedin.com/in/pascalgurtner/?locale=de_DE">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor24}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Milko	Hensel</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Member of Senior Management</b><br/>
                Maerki Baumann & Co. AG
                </p>
                <a href="https://www.linkedin.com/in/milko-hensel-41a9241/?locale=de_DE">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor25}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Markus	Herzberg</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Director of Operations & Strategy </b><br/>
                Racerfish
                </p>
                <a href="https://www.linkedin.com/in/markusherzberg/">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor27}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Karim-Alexandre	Koubaa-Olesen</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Chairman</b><br/>
                Jutzler AG
                </p>
                <a href="https://www.linkedin.com/in/koubaa/?locale=de_DE">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor28}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>David D. Laux</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>CEO</b><br/>
                ec4u
                </p>
                <a href="https://www.linkedin.com/in/dlaux/?locale=de_DE">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor29}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Thomas Liebe</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Owner</b><br/>
                Ad Rem Design AG
                </p>
                <a href="https://www.linkedin.com/in/thomas-liebe-b1b98342/">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor30}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Daniela	Maag</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Owner</b><br/>
                Visielle
                </p>
                <a href="https://www.linkedin.com/in/daniela-maag-13a76a135/">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor32}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Daniela	Marino</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>CEO</b><br/>
                Cutiss AG
                </p>
                <a href="https://www.linkedin.com/in/daniela-marino-3bb35a26/">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor33}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Olivia Menzi</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Content Strategist</b><br/>
                Unic
                </p>
                <a href="https://www.linkedin.com/in/oliviamenzi/">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor34}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Tom	Morf</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Founder / CEO</b><br/>
                Brand Masters International LLC 
                </p>
                <a href="https://www.linkedin.com/in/tom-morf-a2a3015b/">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor35}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Cornel Müller</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Founder</b><br/>
                x28 AG
                </p>
                <a href="https://www.linkedin.com/in/cornelmueller/">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor36}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Matthias Müller</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Senior Vice President Unify S&P Service</b><br/>
                Unify
                </p>
                <a href="https://www.linkedin.com/in/matthias-m%C3%BCller-9373a2b/?locale=de_DE">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor37}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Manuel Nappo</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Director Institute for Digital Business </b><br/>
                HWZ Hochschule für Wirtschaft Zürich
                </p>
                <a href="https://www.linkedin.com/in/manuelnappo/?locale=de_DE">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor38}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Claudio	Nessi</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>CEO</b><br/>
                GeeniuX AG
                </p>
                <a href="https://www.linkedin.com/in/claudionessi/?locale=de_DE">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor39}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Stewart	Noakes</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Stewart Noakes</b><br/>
                Qapitol QA
                </p>
                <a href="https://www.linkedin.com/in/stewartnoakes/?locale=de_DE">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor40}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Silas	Obrist</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>CEO</b><br/>
                TST Trading GmbH
                </p>
                <a href="https://www.linkedin.com/in/silas-obrist-100912147/">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor41}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Corinne	Pellerin</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Chief Commercial Officer</b><br/>
                EWZ
                </p>
                <a href="https://www.linkedin.com/in/corinnepellerin/">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor42}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Paolo	Petrolini</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Chief Technology Officer</b><br/>
                Digital Nomas Hong Kong
                </p>
                <a href="https://www.linkedin.com/in/paolo-petrolini-4435474/">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor43}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Lax Poojary</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Co-Founder & Product Lead Google Area 120</b><br/>
                Google
                </p>
                <a href="https://www.linkedin.com/in/laxpoojary/">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor44}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Myriam	Reinle</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>CEO</b><br/>
                Lendico Schweiz AG
                </p>
                <a href="https://www.linkedin.com/in/myriamreinle/">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor45}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Ruud Rikhof</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Managing Director</b><br/>
                Kennedy Fitch
                </p>
                <a href="https://www.linkedin.com/in/ruudrikhof/?locale=de_DE">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor46}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Miguel Rodriguez</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Chief Sales Officer </b><br/>
                Squirro
                </p>
                <a href="https://www.linkedin.com/in/miguelrodriguez1981/">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor47}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Andrea Rutishauser</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Founder</b><br/>
                Avivar
                </p>
                <a href="https://www.linkedin.com/in/andrearutishauser/?locale=de_DE">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor48}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Yusuf	Savmaz</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Head Market Area Entrepreneurs & Executives</b><br/>
                Credit Suisse
                </p>
                <a href="https://www.linkedin.com/in/yusuf-savmaz-b5278211/">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor50}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Marie-Christine Schindler</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Managing Director</b><br/>
                mcschindler.com GmbH
                </p>
                <a href="https://www.linkedin.com/in/mcschindler/">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor51}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Andreas	Schlenker</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Head of M&A and Investments</b><br/>
                Tamedia Digital
                </p>
                <a href="https://www.linkedin.com/in/andreasschlenker/?locale=de_DE">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor52}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Michael	Schmid</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Group CTO </b><br/>
                amazee.io
                </p>
                <a href="https://www.linkedin.com/in/schnitzel/?locale=en_US">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor53}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Reto Senn</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>CEO & Partner</b><br/>
                bitforge Ltd. 
                </p>
                <a href="https://www.linkedin.com/in/rsenn/?locale=de_DE">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor54}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Domonique	Specht</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Vice President</b><br/>
                DKSH
                </p>
                <a href="https://www.linkedin.com/in/dominique-specht/?locale=de_DE">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor55}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Isa	Steiner</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>CTO</b><br/>
                autoricardo AG
                </p>
                <a href="https://www.linkedin.com/in/isasteiner/">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor56}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Rolf Styger</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Entrepreneur </b><br/>
                Fressnapf Schweiz AG
                </p>
                <img src={linkedin} />
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor57}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Marc Sutterlüti</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Head of Global Marketing</b><br/>
                Oris Watches
                </p>
                <a href="https://www.linkedin.com/in/marc-sutterl%C3%BCti-1037105/?locale=de_DE">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor59}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Alexander	Von Schirmeister</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Member of Innovation Council</b><br/>
                Confederation of British Industry
                </p>
                <a href="https://www.linkedin.com/in/alexander-von-schirmeister-045375/">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor60}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Roger Weber</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>CEO</b><br/>
                Biral AG
                </p>
                <a href="https://www.linkedin.com/in/roger-weber-590b3940/">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
      style => (
        <animated.div style={{ ...style }} className="flex flex-column flex-row-ns">
                <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns flex items-center">
            <img src={Mentor61}  alt="" style={{ maxHeight: '550px' }}/>
            </div>
            <div className="w-100 w-60-ns pl3-ns flex items-center ">
            <div className="paddingfounders measure">
                <h3>Dimitri	Wittwer</h3>
                <span className="arrows"></span>
                <p className="lh-copy">
                <b>Strategy Director & Partner</b><br/>
                Gridonic AG
                </p>
                <a href="https://www.linkedin.com/in/dimitri-wittwer-57b55449/">
                <img src={linkedin} />
              </a>
            </div>
            </div>
        </animated.div>
      ),
];

export default class Founders extends Component {
  state = { index: 0 };

  toggle = e =>
    this.setState(state => ({
      index: state.index === 52 ? 0 : state.index + 1,
    }));

  render() {
    return (
      <div className="advisors">
      <div className="advisorsmain" onClick={this.toggle}>
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
