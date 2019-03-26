import React from 'react';
import styled from 'react-emotion';
import { Layout, Wrapper, Navbar, Title } from 'components';
import '../styles/pages/portfolio.css';
import Seo from '../components/SEO/index';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Row11 from '../../static/ssuf/pitch-training-1-1.svg' /* //'../../static/growth-process.svg'; */
import Row12 from '../../static/ssuf/pitch-training-1-2.svg'/* //'../../static/growth-market.svg'; */
import Row13 from '../../static/ssuf/pitch-training-1-3.svg'/* //'../../static/growth-analysis.svg'; */
import Row21 from '../../static/ssuf/pitch-training-2-1.svg' /* //'../../static/growth-process.svg'; */
import Row22 from '../../static/ssuf/pitch-training-2-2.svg'/* //'../../static/growth-market.svg'; */
import Row23 from '../../static/ssuf/pitch-training-2-3.svg'/* //'../../static/growth-analysis.svg'; */
import Row31 from '../../static/ssuf/pitch-training-3-1.svg' /* //'../../static/growth-process.svg'; */
import Row32 from '../../static/ssuf/pitch-training-3-2.svg'/* //'../../static/growth-market.svg'; */
import Row33 from '../../static/ssuf/pitch-training-3-3.svg'/* //'../../static/growth-analysis.svg'; */

const Test = styled.div`
    position: relative;
    overflow: hidden;
    vertical-align: middle;
    max-height: 450px;
`
const Paragraph = styled.p`
line-height: 35px;
`

const InvestmentPortfolio = ({ data }) => (
  <Layout>
  <Seo title="SWISS STARTUP FACTORY - Pitch Training" desc="Rock your Pitch – Pitching is how you communicate your story, share your passion and the way in which you constantly continue to better understand your business." />
      <Navbar />
      <Test> 
          <Img fluid={data.portfolio.childImageSharp.fluid} className="w-100" />
      </Test>
    <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <Title>Pitch Training</Title>
      <div className="containertitle">
        <h2 className="lh-title">Pitching is not just a means to an end – it is how you communicate your story, share your passion and the way in which you constantly continue to better understand your business.</h2>
        <Paragraph>
        You sell your product, your company and yourself all the time. The big question is: How aware are you of it and how effective is it? In our pitch training you will learn how to sell your idea and your company on pitch events and networking events in front of investors in an impressive way. 
        </Paragraph>
      </div>
    </Wrapper>
    <div className="flex flex-column flex-row-ns mv4 background pb4" style={{backgroundColor: "#00486C"}}>
      <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
      <Img fluid={data.innovation1.childImageSharp.fluid} className="w-100" />
      </div>
      <div className="w-100 w-60-ns pl3-ns flex items-center measure center">
        <div className="ph3 ph0-ns">
            <Paragraph className="lh-copy white">We re-work your pitch, in line with our framework in our three stages-  create clarity, communicate the opportunity and demonstrate the validation.</Paragraph>
          <Paragraph className="lh-copy white">
          For each slide, we make sure to explain why the content matters and what different stakeholders need to see. Our one-on-one pitch training is split into three separate workshops. Between each workshop we expect our participants to be re-working different elements of their pitch and their business in preparation for the next session.  
          </Paragraph>
          <a href="mailto:pitchtraining@ssuf.ch" className="button-blue" style={{boxShadow: "none"}}>
        Learn More
        </a>
        </div>
      </div>
    </div>
    <Wrapper>
      <div className="containerinvestors mv5">
        <h3 className="lh-copy center">
        It depends on what you need. We develop a personal pitch deck that fits your situation.<br/> The workshops contains the following topics:
        </h3>
      </div>
      <div className="mv4">
          <div className="row cf">
                        <div class="fl w-100 w-third-ns pa3" style={{margin: "auto"}}>
                            <div class="pitchcard flex flex-column items-center">
                                <div className="tc">
                                <img src={Row11} />
                                <p className="pt3 b mb0">Pitch Structure</p>
                                </div>
                            </div>
                        </div>
                        <div class="fl w-100 w-third-ns pa3" style={{margin: "auto"}}>
                            <div class="pitchcard flex flex-column items-center">
                                <div className="tc">
                                <img src={Row12} />
                                <p className="pt3 b mb0">Simplify</p>
                                </div>
                            </div>
                        </div>
                        <div class="fl w-100 w-third-ns pa3" style={{margin: "auto"}}>
                            <div class="pitchcard flex flex-column items-center">
                                <div className="tc">
                                <img src={Row13} />
                                <p className="pt3 b mb0">Presentation Goals</p>
                                </div>
                            </div>
                        </div>
          </div>
          <div className="row cf">
                    <div class="fl w-100 w-third-ns pa3" style={{mar3in: "auto"}}>
                            <div class="pitchcard flex flex-column items-center">
                                <div className="tc">
                                <img src={Row21} />
                                <p className="pt3 b mb0">Storytelling</p>
                                </div>
                            </div>
                        </div>
                        <div class="fl w-100 w-third-ns pa3" style={{margin: "auto"}}>
                            <div class="pitchcard flex flex-column items-center">
                                <div className="tc">
                                <img src={Row22} />
                                <p className="pt3 b mb0">Sales Skills</p>
                                </div>
                            </div>
                        </div>
                        <div class="fl w-100 w-third-ns pa3" style={{margin: "auto"}}>
                            <div class="pitchcard flex flex-column items-center">
                                <div className="tc">
                                <img src={Row23} />
                                <p className="pt3 b mb0">Effective Communication</p>
                                </div>
                            </div>
                        </div>
          </div>
          <div className="row cf">
                        <div class="fl w-100 w-third-ns pa3" style={{margin: "auto"}}>
                            <div class="pitchcard flex flex-column items-center">
                                <div className="tc">
                                <img src={Row31} />
                                <p className="pt3 b mb0">Presentation Skills</p>
                                </div>
                            </div>
                        </div>
                        <div class="fl w-100 w-third-ns pa3" style={{margin: "auto"}}>
                            <div class="pitchcard flex flex-column items-center">
                                <div className="tc">
                                <img src={Row32} />
                                <p className="pt3 b mb0">Feedback</p>
                                </div>
                            </div>
                        </div>
                        <div class="fl w-100 w-third-ns pa3" style={{margin: "auto"}}>
                            <div class="pitchcard flex flex-column items-center">
                                <div className="tc">
                                <img src={Row33} />
                                <p className="pt3 b mb0">Exercise</p>
                                </div>
                            </div>
                        </div>
          </div>
      </div>
      </Wrapper>
    

  </Layout>
);

export default InvestmentPortfolio;

export const query = graphql`
  query {
    portfolio: file(relativePath: { eq: "images/pitch-training.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1500
            traceSVG: { background: "#fff", color: "lightgrey" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
    }
    innovation1: file(relativePath: { eq: "images/pitch-training-1.jpg" }) {
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

