import React from 'react';
import styled from 'react-emotion';
import '../styles/pages/timeline.css';

const Benefit = styled.div`
    line-height: 35px;
    font-size: 1.1em;
    color: #00486C;
    text-align: center; 
`
const List = styled.ul`
color: #00486C;
margin-top: 2em;
`
const ListItem = styled.li`
list-style: none;
color: #00486C;
line-height: 35px;
::before {
    content: "✔";
    padding-right: 10px;
}
`

const Timeline = () => (
    <div >
<div class="flex-parent mt5 mb6">
<div class="input-flex-container">
   <input className="timelinebenefits" type="radio" name="timeline-dot" data-description="1910"/>
   <div class="dot-info" data-description="1910">
       <span class="label">Coaching</span>
   </div>
   <input className="timelinebenefits" type="radio" name="timeline-dot" data-description="1920" />
   <div class="dot-info" data-description="1920">
       <span class="label">Family</span>
   </div>
   <input className="timelinebenefits" type="radio" name="timeline-dot" data-description="1930" />
   <div class="dot-info" data-description="1930">
       <span class="label">Co-Working</span>
   </div>
   <input className="timelinebenefits" type="radio" name="timeline-dot" data-description="1940" />
   <div class="dot-info" data-description="1940">
       <span class="label">Events & Networking</span>
   </div>
   <input className="timelinebenefits" type="radio" name="timeline-dot" data-description="1950" />
   <div class="dot-info" data-description="1950">
       <span class="label">Investors</span>
   </div>
   <input className="timelinebenefits" type="radio" name="timeline-dot" data-description="1960" />
   <div class="dot-info" data-description="1960">
       <span class="label">15.000 CHF</span>
   </div>
   <input className="timelinebenefits" type="radio" name="timeline-dot" data-description="1970" />
   <div class="dot-info" data-description="1970">
       <span class="label">Testing</span>
   </div>
   <input className="timelinebenefits" type="radio" name="timeline-dot" data-description="1980" />
   <div class="dot-info" data-description="1980">
       <span class="label">Graduate Service</span>
   </div>
   <input className="timelinebenefits" type="radio" name="timeline-dot" data-description="1990" />
   <div class="dot-info" data-description="1990">
       <span class="label">Successful Finish</span>
   </div>
   <div id="timeline-descriptions-wrapper">
       <Benefit data-description="1910">
       50+ Hours of individual coaching with our experienced team​ In addition, choose from 40+ experts and industry mentors to work on your startup during the program
       </Benefit>
       <Benefit data-description="1920">
       Become a part of the factory family to connect and learn from our portfolio startup and the other startups in the batch. You will work next to amazing entrepreneurs and will find friends for life.
       </Benefit>
       <Benefit data-description="1930">
       Free Co-working in Zurich's newest co-working space WestHive. 
       </Benefit>
       <Benefit data-description="1940">
       Meet successful Swiss Entrepreneurs and industry leaders in monthly events
       </Benefit>
       <Benefit data-description="1950">Showcase your startup to the entire Swiss startup ecosystem, including many investors at our Demo Day
       </Benefit>
       <Benefit data-description="1960">
       Get CHF 15.000
       </Benefit>
       <Benefit data-description="1970">
       Test your products and work with our corporate partners.
       </Benefit>
       <Benefit data-description="1980">
       Benefit from our Graduate Services and win the Swiss Startup Factory as a long-term partner after the program
       </Benefit>
       <Benefit data-description="1990">
       After you completed the program your startup will have a:  
        <List>
            <ListItem>Compelling product-market-fit with extensive market validation</ListItem>
            <ListItem>Cost-effective go-to-market strategy and aligned brand</ListItem>
            <ListItem>Efficient internal processes and operations </ListItem>
            <ListItem>Top-Notch investor Pitch Deck</ListItem>
            <ListItem>Pitch Training for elevator, stage and investor pitches</ListItem>
            <ListItem>Ability to answer the most common investor questions</ListItem>
            <ListItem>Scaling & growth hacking strategy</ListItem>
            <ListItem>2 months roadmap focused on OKR</ListItem>
        </List>
       </Benefit>
   </div>
</div>
</div>
</div>
)

export default Timeline;