import React from "react";
import "../styles/pages/timelineonbackground.css";

import Icon1 from '../../static/ssuf/timelinebackground-1.svg';
import Icon2 from '../../static/ssuf/timelinebackground-2.svg';
import Icon3 from '../../static/ssuf/timelinebackground-3.svg';
import Icon4 from '../../static/ssuf/timelinebackground-4.svg';
import Icon5 from '../../static/ssuf/timelinebackground-5.svg';
import Icon6 from '../../static/ssuf/timelinebackground-6.svg';
import Icon7 from '../../static/ssuf/timelinebackground-7.svg';

const TimelineOnBackground = () => (
  <div class="container">
    <div id="timeline">
      <div class="timeline-item">
        <div class="timeline-icon">
            
        </div>
        <div class="timeline-content">
        <img src={Icon1}/>
          <h3>Start of Accelerator & Phase 1</h3>
          <p>
          Business Modeling
          </p>
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-icon">
        
        </div>
        <div class="timeline-content right">
        <img src={Icon2}  />
          <h3>Phase 2</h3>
          <p>
                Product Development
          </p>
          
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-icon">
        
        </div>
        <div class="timeline-content">
        <img src={Icon3}  />
          <h3>Milestone 1</h3>
          <p>
          Product-Market-Fit
          </p>
        </div>
      </div>
      
      <div class="timeline-item">
        <div class="timeline-icon">
        
        </div>
        <div class="timeline-content right">
        <img src={Icon4}  />
          <h3>Phase 3</h3>
          <p>
          Market testing and validation
          </p>
          
        </div>
      </div>

      
      <div class="timeline-item">
        <div class="timeline-icon">
        
        </div>
        <div class="timeline-content">
        <img src={Icon5}  />
          <h3>Phase 4</h3>
          <p>
            Go to market
          </p>
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-icon">
        
        </div>
        <div class="timeline-content right">
        <img src={Icon6} />
          <h3>Milestone 2</h3>
          <p>
          Market traction
          </p>
          
        </div>
      </div>

      <div class="timeline-item">
        <div class="timeline-icon">
        
        </div>
        <div class="timeline-content">
        <img src={Icon7}  />
          <h3>Phase 5</h3>
          <p>
            Product Market Fit
          </p>
        </div>
      </div>


    </div>
  </div>
);

export default TimelineOnBackground;
