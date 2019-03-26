import React from "react";
import "../styles/pages/timelinebackground.css";
import styled from 'react-emotion';

import Icon5 from '../../static/ssuf/timelinebackground-5.svg';
import Icon6 from '../../static/ssuf/timelinebackground-6.svg';
import Icon7 from '../../static/ssuf/timelinebackground-7.svg';

const Paragraph = styled.p`
color: white;
font-weight: bold;
margin-bottom: 0;
text-align: left;
`
const SubParagraph = styled.p`
color: white;
font-weight: 300;
text-align: left;
`
const List = styled.ul`
color: white;
text-align: left;
font-weight: 300;
margin-bottom: 1em;
`
const ListItem = styled.li`
color: white;
text-align: left;
font-weight: 300;
line-height: 25px;
`

const TimelineOnBackground = () => (
  <div class="container">
    <div id="timelinebg">

      <div class="timelinebg-item">
          <div class="timelinebg-icon">
          </div>
          <div class="timelinebg-content right">
            <Paragraph>
                  50+ Hours
            </Paragraph>
            <SubParagraph>
            of individual coaching with our experienced team​ In addition, choose from 40+ experts and industry mentors to work on your startup during the program
            </SubParagraph>
          </div>
        </div>

      <div class="timelinebg-item">
      <div class="timelinebg-icon">
        </div>
        <div class="timelinebg-content">
          <Paragraph>Become a part of the factory family</Paragraph>
          <SubParagraph>
          to connect and learn from our portfolio startup and the other startups in the batch. You will work next to amazing entrepreneurs and will find friends for life
          </SubParagraph>
        </div>
      </div>

      <div class="timelinebg-item">
        <div class="timelinebg-icon">
        </div>
        <div class="timelinebg-content right">
        <Paragraph>Free Co-working at Zurich newest location WestHive</Paragraph>      
        </div>
      </div>

      <div class="timelinebg-item">
        <div class="timelinebg-icon">
        
        </div>
        <div class="timelinebg-content">
        <Paragraph>Meet successful Swiss Entrepreneurs and industry leaders in monthly events
        </Paragraph>
        </div>
      </div>
      
      <div class="timelinebg-item">
        <div class="timelinebg-icon">
        
        </div>
        <div class="timelinebg-content right">
          <Paragraph style={{marginBottom: "1em"}}>After you completed the program your startup will have a:  
          </Paragraph>
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
        </div>
      </div>

      
      <div class="timelinebg-item">
        <div class="timelinebg-icon">
        
        </div>
        <div class="timelinebg-content">
          <Paragraph>Showcase your startup
          </Paragraph>
          <SubParagraph>to the entire Swiss startup ecosystem, including many investors at our Demo Day</SubParagraph>
        </div>
      </div>
      <div class="timelinebg-item">
        <div class="timelinebg-icon">
        
        </div>
        <div class="timelinebg-content">
          <Paragraph>Get CHF 15`000 Funding
          </Paragraph>
        </div>
      </div>

      <div class="timelinebg-item">
        <div class="timelinebg-icon">
        </div>
        <div class="timelinebg-content right">
        <Paragraph>Test your product and work with our corporate partners
        </Paragraph>
        </div>
      </div>

      <div class="timelinebg-item">
        <div class="timelinebg-icon">
        
        </div>
        <div class="timelinebg-content">
        <Paragraph>Benefit from our Graduate Services
        </Paragraph>
        <SubParagraph>and win the Swiss Startup Factory as a long-term partner after the program</SubParagraph>
        </div>
      </div>


    </div>
  </div>
);

export default TimelineOnBackground;
