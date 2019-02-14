import React from 'react';
import styled from 'react-emotion';
import { Layout, Wrapper, Navbar, Title } from 'components';
import '../styles/pages/portfolio.css';
import Seo from '../components/SEO/index';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Timeline from '../components/Timeline';
import TimelineOnBackground from '../components/TimelineBackground';
import Slider from '../components/pictureslider/indexfounders';

import Startup1 from '../../static/ssuf/startup-accelerator-1.svg' /* //'../../static/growth-process.svg'; */
import Startup2 from '../../static/ssuf/startup-accelerator-2.svg' /* //'../../static/growth-process.svg'; */
import Startup3 from '../../static/ssuf/startup-accelerator-3.svg' /* //'../../static/growth-process.svg'; */

const Test = styled.div`
    position: relative;
    overflow: hidden;
    vertical-align: middle;
    max-height: 575px;
`

const InvestmentPortfolio = ({ data }) => (
  <Layout>
  <Seo title="SWISS STARTUP GROUP – Investment Portfolio" desc="Exclusive startup investment platform, which contains investor club, advisory board and corporate partners for everything about startup investments" />
      <Navbar />
      <Test> 
          <Img fluid={data.portfolio.childImageSharp.fluid} className="w-100" />
      </Test>
    <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <div className="tc">
      <h1 >Swiss Startup Factory Startup Accelerator</h1>
      <button >CTA - Apply now</button>
      </div>
      <div className="containertitle mt5">
        <h2 className="lh-copy">Make your product happen!</h2>
        <p className="lh-copy">
        After three years of experience, we have designed a completely new customised accelerator program, based on our Swiss Startup Factory Company Building Playbook. We have shifted from incubation of ideas to acceleration of startups, which have already validated their business model and are ready for fast growth.   
        </p>
        <p className="lh-copy">Our intense customised accelerator focuses on business execution of three to four startups per year. 
        </p>
      </div>
    </Wrapper>
    <div className="flex flex-column flex-row-ns mv4 background" style={{backgroundColor: "#00486C"}}>
      <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
      <Img fluid={data.innovation1.childImageSharp.fluid} className="w-100" />
      </div>
      <div className="w-100 w-60-ns pl3-ns flex items-center measure center">
        <div className="pa4">
            <h3 className="lh-copy white">The program is divided in five different phases,</h3>
            <p className="white lh-copy">where the length of each stage depends on the need of your startup and is defined at the beginning of the program. During the accelerator, you will follow our Swiss Startup Factory Company Building Playbook and work in numerous one-on-one sessions with our experienced team, excellent mentors and industry partners to validate all your hypotheses.</p>
            <p className="white lh-copy">In 3 milestones, you need to convince an internal and external jury about the potential of your business, in order to continue the program. </p>
            <p className="white lh-copy b">Applications for the program are accepted on a rolling basis</p>
            <button className="lh-copy white">
                Read the FAQ's
                </button><span className="white">about the Accelerator Programm</span>
        </div>
      </div>
    </div>
    <Wrapper>
      <Title>Key Facts</Title>
    </Wrapper>
    <div className="flex flex-column flex-row-ns mv5">
    <div className="mb4 mb0-ns w-100 w-40-ns">
    <Img fluid={data.innovation2.childImageSharp.fluid} className="w-100" />
      </div>
      <div className="w-100 w-60-ns pl3-ns flex items-center justify-center">
        <div className="pa4">
          <h3>Location: Zurich, Switzerland</h3>
          <ul>
            <li>Program Length: 10 - 16 Weeks</li>
            <li>Requirements: Proof-of-Concept Level</li>
            <li>All Industries welcome</li>
            <li>Contribution: 15k CHF</li>
            <li>Equity: Based on your assessment of the program</li>
            <li>3 Milestones: Customer Fit, Market Traction & Investment Suitability</li>
          </ul>
        </div>
      </div>
    </div>
    <Wrapper>
      <Title>Requirements</Title>
    </Wrapper>
    <Wrapper>
    <article className="cf mb6 mt6 flex items-center">
        <div className="fl tl w-100 w-50-ns pa3-s pa3-m pl4-l">
          <h4 className="lh-copy">Your team must be complementary with a mix of business and technical expertise and previous startup experience is a plus.</h4>
        </div>
        <div className="fl w-100 w-50-ns tc flex justify-center">
            <div className="backgroundgrowth">
              <img src={Startup1} alt="" title="" />
            </div>
         </div>
    </article>
    <article className="cf mb6 mt6 flex items-center">
        <div className="fl w-100 w-50-ns tc flex justify-center">
            <div className="backgroundgrowth">
              <img src={Startup2} alt="" title="" />
            </div>
         </div>
        <div className="fl tl w-100 w-50-ns pa3-s pa3-m pl4-l">
        <h4 className="lh-copy">The business model must be scalable and the product should have some sort of intellectual property</h4>  
          </div>
        </article>
        <article className="cf mb6 mt6 flex items-center">
        <div className="fl tl w-100 w-50-ns pa3-s pa3-m pl4-l">
          <h4 className="lh-copy">We look for startups with at least Proof-of-concept with a well-functioning MVP</h4>
        </div>
        <div className="fl w-100 w-50-ns tc flex justify-center">
            <div className="backgroundgrowth">
              <img src={Startup3} alt="" title="" />
            </div>
         </div>
    </article>
    </Wrapper>
    <Wrapper>
      <Title>Benefits</Title>
    </Wrapper>
    <Timeline />
    <Wrapper>
      <Title>The Program</Title>
    </Wrapper>
    <div className="backgroundtimeline"> 
      <TimelineOnBackground />
    </div>
   
    <Wrapper>
      <Title>Startup Stories</Title>
    </Wrapper>
    <Slider />
    <Wrapper>
    <div className="tabrow">
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <img src={Startup1} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">IDUN Technologies</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <img src={Startup1} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Martin from Snowcookie</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                    <div className="tc">
                        <img src={Startup1} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Flurin from StruckD</h3>
                      </div>
                    </article>
            </div>

      <div className="containerinvestors">
        <h3 className="lh-copy center">
        <b>Do you have specific questions, which is not answered on this website? Then write us an email :)</b>
        </h3>
        <button className="investorparagraph lh-copy">
        Contact us
        </button>
      </div>
      </Wrapper>
    

  </Layout>
);

export default InvestmentPortfolio;

export const query = graphql`
  query {
    portfolio: file(relativePath: { eq: "images/startup-accelerator.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1500
            traceSVG: { background: "#fff", color: "lightgrey" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
    }
    innovation1: file(relativePath: { eq: "images/startup-accelerator-1.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1500
            traceSVG: { background: "#fff", color: "lightgrey" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
    }
    innovation2: file(relativePath: { eq: "images/startup-accelerator-2.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1500
          traceSVG: { background: "#fff", color: "lightgrey" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    background: file(relativePath: { eq: "images/startup-accelerator-background.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1500
          traceSVG: { background: "#fff", color: "lightgrey" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }`

