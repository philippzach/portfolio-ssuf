import React from 'react';
import '../styles/pages/timeline.css';

const Timeline = () => (
    <div >
<div class="flex-parent ">
<div class="input-flex-container">
   <input type="radio" name="timeline-dot" data-description="1910"/>
   <div class="dot-info" data-description="1910">
       <span class="label">Coaching</span>
   </div>
   <input type="radio" name="timeline-dot" data-description="1920" />
   <div class="dot-info" data-description="1920">
       <span class="label">Family</span>
   </div>
   <input type="radio" name="timeline-dot" data-description="1930" />
   <div class="dot-info" data-description="1930">
       <span class="label">Co-Working</span>
   </div>
   <input type="radio" name="timeline-dot" data-description="1940" />
   <div class="dot-info" data-description="1940">
       <span class="label">Events & Networking</span>
   </div>
   <input type="radio" name="timeline-dot" data-description="1950" />
   <div class="dot-info" data-description="1950">
       <span class="label">Investors</span>
   </div>
   <input type="radio" name="timeline-dot" data-description="1960" />
   <div class="dot-info" data-description="1960">
       <span class="label">15.000 CHF</span>
   </div>
   <input type="radio" name="timeline-dot" data-description="1970" />
   <div class="dot-info" data-description="1970">
       <span class="label">Testing</span>
   </div>
   <input type="radio" name="timeline-dot" data-description="1980" />
   <div class="dot-info" data-description="1980">
       <span class="label">Graduate Service</span>
   </div>
   <input type="radio" name="timeline-dot" data-description="1990" />
   <div class="dot-info" data-description="1990">
       <span class="label">Successful Finish</span>
   </div>
   <div id="timeline-descriptions-wrapper">
       <div data-description="1910">
       50+ Hours of individual coaching with our experienced team​ In addition, choose from 40+ experts and industry mentors to work on your startup during the program
       </div>
       <div data-description="1920">
       Become a part of the factory family to connect and learn from our portfolio startup and the other startups in the batch. You will work next to amazing entrepreneurs and will find friends for life.
       </div>
       <div data-description="1930">
       Free Co-working in Zurich's newest co-working space WestHive. 
       </div>
       <div data-description="1940">
       Meet successful Swiss Entrepreneurs and industry leaders in monthly events
       </div>
       <div data-description="1950">Showcase your startup to the entire Swiss startup ecosystem, including many investors at our Demo Day
       </div>
       <div data-description="1960">
       Get CHF 15.000
       </div>
       <div data-description="1970">
       Test your products and work with our corporate partners.
       </div>
       <div data-description="1980">
       Benefit from our Graduate Services and win the Swiss Startup Factory as a long-term partner after the program
       </div>
       <div data-description="1990">
       After you completed the program your startup will have a:  
        <ul>
            <li>Compelling product-market-fit with extensive market validation</li>
            <li>Cost-effective go-to-market strategy and aligned brand</li>
            <li>Efficient internal processes and operations </li>
            <li>Top-Notch investor Pitch Deck</li>
            <li>Pitch Training for elevator, stage and investor pitches</li>
            <li>Ability to answer the most common investor questions</li>
            <li>Scaling & growth hacking strategy</li>
            <li>2 months roadmap focused on OKR</li>
        </ul>
       </div>
   </div>
</div>
</div>
</div>
)

export default Timeline;