import React from "react";
import "../styles/pages/timelinenobackground.css";
import styled from 'react-emotion';

import Icon1 from '../../static/ssuf/timelinebackground-1.svg';
import Icon2 from '../../static/ssuf/timelinebackground-2.svg';
import Icon3 from '../../static/ssuf/timelinebackground-3.svg';
import Icon4 from '../../static/ssuf/timelinebackground-4.svg';
import Icon5 from '../../static/ssuf/timelinebackground-5.svg';
import Icon6 from '../../static/ssuf/timelinebackground-6.svg';
import Icon7 from '../../static/ssuf/timelinebackground-7.svg';

const Image = styled.img`
margin-bottom: 0;
`

const TimelineOnBackground = () => (
  <div class="container">
    <div id="timeline">
      <div class="timeline-item">
        <div class="timeline-icon">
        </div>
        <div class="timeline-content">
              <div className="iconleft">
                    <Image src={Icon1}/>
              </div>
          <p className="b mb0" style={{marginTop: "1.5em"}}>Start of Accelerator & Phase 1</p>
          <p>
          Business Modeling
          </p>
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-icon">
        
        </div>
        <div class="timeline-content right">
            <div className="iconright">
                  <Image src={Icon2}  />
            </div>
          <p className="b mb0" style={{marginTop: "1.5em"}}>Phase 2</p>
          <p>
                Product Development
          </p>
          
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-icon">
        
        </div>
        <div class="timeline-content">
        <div className="iconleft">
        <Image src={Icon3}  />
        </div>
          <p className="b mb0" style={{marginTop: "1.5em"}}>Milestone 1</p>
          <p>
          Product-Market-Fit
          </p>
        </div>
      </div>
      
      <div class="timeline-item">
        <div class="timeline-icon">
        
        </div>
        <div class="timeline-content right">
        <div className="iconright">
        <Image src={Icon4}  />
        </div>
          <p className="b mb0" style={{marginTop: "1.5em"}}>Phase 3</p>
          <p>
          Market testing and validation
          </p>
          
        </div>
      </div>

      
      <div class="timeline-item">
        <div class="timeline-icon">
        
        </div>
        <div class="timeline-content">
        <div className="iconleft">
        <Image src={Icon5}  />
        </div>
          <p className="b mb0" style={{marginTop: "1.5em"}}>Phase 4</p>
          <p>
            Go to market
          </p>
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-icon">
        
        </div>
        <div class="timeline-content right">
        <div className="iconright">
        <Image src={Icon6} />
        </div>
          <p className="b mb0" style={{marginTop: "1.5em"}}>Milestone 2</p>
          <p>
          Market traction
          </p>
          
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-icon">
        
        </div>
        <div class="timeline-content">
        <div className="iconleft">
        <Image src={Icon7}  />
        </div>
          <p className="b mb0" style={{marginTop: "1.5em"}}>Phase 5</p>
          <p>
            Product Market Fit
          </p>
        </div>
      </div>


    </div>
  </div>
);

export default TimelineOnBackground;
