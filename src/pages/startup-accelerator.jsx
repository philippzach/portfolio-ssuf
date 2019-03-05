import React from 'react';
import styled from 'react-emotion';
import { Layout, Wrapper, Navbar, Title } from 'components';
import '../styles/pages/portfolio.css';
import '../styles/pages/buttonblue.css';
import Seo from '../components/SEO/index';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import TimelineNoBackground from '../components/TimelineNoBackground';
import TimelineBackground from '../components/TimelineBackground';
import Slider from '../components/pictureslider/startupstories';
import Background from '../images/startup-accelerator-background-sm.jpg';
import Form from '../components/form-accelerator';

import Startup1 from '../../static/ssuf/startup-accelerator-1.svg' /* //'../../static/growth-process.svg'; */
import Startup2 from '../../static/ssuf/startup-accelerator-2.svg' /* //'../../static/growth-process.svg'; */
import Startup3 from '../../static/ssuf/startup-accelerator-3.svg' /* //'../../static/growth-process.svg'; */

const Test = styled.div`
    position: relative;
    overflow: hidden;
    vertical-align: middle;
    max-height: 575px;
`
const Head = styled.h1`
color: white;
font-size: 2em;
`
const Paragraph = styled.p`
line-height: 35px;
`
const List = styled.li`
line-height: 35px;
color: #00486C;
`
const SubHead = styled.h2`
margin-top: 3em;
font-family: roboto;
`
const Check = styled.h4`
line-height: 35px;
color: #00486C;
font-family: roboto;
font-weight: 300;
::before {
  content: "✔";
  color: #00486C;
  padding-right: 10px;
}
`
const BackgroundTimeline = styled.div`
    background: linear-gradient(rgba(0, 71, 107,0.58),rgba(0, 71, 107,0.88)),url(${Background}) center;
    background-size: cover;
    padding: 2em 0;
    margin: 5em 0;
`
const Contact = styled.h3`
font-family: roboto;
line-height: 35px;

`

const InvestmentPortfolio = ({ data }) => (
  <Layout>
  <Seo title="SWISS STARTUP FACTORY - Startup Accelerator" desc="Our intense customised accelerator program focuses on business execution of startups. From incubation to acceleration." />
      <Navbar />
      <Test> 
          <Img fluid={data.portfolio.childImageSharp.fluid} className="w-100" />
      </Test>
      <div style={{backgroundColor: "#00486C", padding:"3em 0", maring: "3em 0"}}>
          <div className="tc">
          <Head className="pa1">Swiss Startup Factory Startup Accelerator</Head>
          <a href="https://ssuf.typeform.com/to/BPDGQ9"><div className="button-blue" style={{boxShadow: "none"}}>Apply now</div></a>
          </div>
      </div>
    <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <div className="containertitle mt5">
        <SubHead >Make your product happen!</SubHead>
        <Paragraph>
        After three years of experience, we have designed a completely new customised accelerator program, based on our Swiss Startup Factory Company Building Playbook. We have shifted from incubation of ideas to acceleration of startups, which have already validated their business model and are ready for fast growth.   
        </Paragraph>
        <Paragraph>Our intense customised accelerator focuses on business execution of three to four startups per year. 
        </Paragraph>
      </div>
    </Wrapper>
    <div className="flex flex-column flex-row-ns mt4 mb6 background" style={{backgroundColor: "#00486C"}}>
      <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
      <Img fluid={data.innovation1.childImageSharp.fluid} className="w-100" />
      </div>
      <div className="w-100 w-60-ns pl3-ns flex items-center measure center">
        <div className="pt4 pb5 ph3 ph0-ns">
            <Paragraph className="white ">The program is divided in five different phases, where the length of each stage depends on the need of your startup and is defined at the beginning of the program. During the accelerator, you will follow our Swiss Startup Factory Company Building Playbook and work in numerous one-on-one sessions with our experienced team, excellent mentors and industry partners to validate all your hypotheses.</Paragraph>
            <Paragraph className="white ">In 3 milestones, you need to convince an internal and external jury about the potential of your business, in order to continue the program. </Paragraph>
            <Paragraph className="white b">Applications for the program are accepted on a rolling basis.</Paragraph>
            <Link to="/accelerator-faq">
            <div className="button-blue" style={{boxShadow: "none"}}>
                Accelerator FAQ's
                </div>
              </Link>
        </div>
      </div>
    </div>
    <Wrapper>
      <Title>Key Facts</Title>
    </Wrapper>
    <div className="flex flex-column flex-row-ns mt5 mb6">
    <div className="mb4 mb0-ns w-100 w-40-ns">
    <Img fluid={data.innovation2.childImageSharp.fluid} className="w-100" />
      </div>
      <div className="w-100 w-60-ns pl3-ns flex justify-center">
        <div className="pa4">
          <h3>Location: Zurich, Switzerland</h3>
          <ul>
            <List>Program Length: 10 - 16 Weeks</List>
            <List>Requirements: Proof-of-Concept Level</List>
            <List>All Industries welcome</List>
            <List>Contribution: 15k CHF</List>
            <List>Equity: Based on your assessment of the program</List>
            <List>3 Milestones: Customer Fit, Market Traction & Investment Suitability</List>
          </ul>
        </div>
      </div>
    </div>
    <Wrapper>
      <Title>Requirements</Title>
    </Wrapper>
    <Wrapper>
    <article className="cf mb6 mt6 flex-ns items-center">
        <div className="fl tl w-100 w-50-ns pa3-s pa3-m pl4-l">
          <Check className="lh-copy">Your team must be complementary with a mix of business and technical expertise and previous startup experience is a plus.</Check>
        </div>
        <div className="fl w-100 w-50-ns tc flex justify-center">
            <div className="backgroundgrowth">
              <img src={Startup1} alt="" title="" />
            </div>
         </div>
    </article>
    <article className="cf mb6 mt6 flex flex-column-reverse flex-row-ns items-center">
        <div className="fl w-100 w-50-ns tc flex justify-center">
            <div className="backgroundgrowth">
              <img src={Startup2} alt="" title="" />
            </div>
         </div>
        <div className="fl tl w-100 w-50-ns pa3-s pa3-m pl4-l">
        <Check className="lh-copy">The business model must be scalable and the product should have some sort of intellectual property</Check>  
          </div>
        </article>
        <article className="cf mb6 mt6 flex-ns items-center">
        <div className="fl tl w-100 w-50-ns pa3-s pa3-m pl4-l">
          <Check className="lh-copy">We look for startups with at least Proof-of-concept with a well-functioning MVP</Check>
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
    <BackgroundTimeline> 
      <TimelineBackground />
    </BackgroundTimeline>
    <Wrapper>
      <Title>The Program</Title>
    </Wrapper>
    
      <TimelineNoBackground />
   
   
    <Wrapper>
      <Title>Startup Stories</Title>
    </Wrapper>
    <Slider />
    <Wrapper>
    <div className="tabrow mv5">
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={data.stories1.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mv3">IDUN Technologies</h3>
                        <a href="https://iduntechnologies.ch" target="_blank"><h4>iduntechnologies.ch</h4></a>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <Img fluid={data.stories2.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mv3">Martin from Snowcookie</h3>
                        <a href="https://snowcookie.eu" target="_blank"><h4>snowcookie.eu</h4></a>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                    <div className="tc">
                        <Img fluid={data.stories3.childImageSharp.fluid} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mv3">Flurin from StruckD</h3>
                        <a href="https://strukd.com" target="_blank"><h4>struckd.com</h4></a>
                      </div>
                    </article>
            </div>
        <Form />
      <div className="containerinvestors mv6">
        <Contact>Specific Questions?</Contact>
        <a href="mailto:"><div className="button-blue">
        Contact us!
        </div>
        </a>
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
    stories1: file(relativePath: { eq: "images/idun.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 500
          traceSVG: { background: "#fff", color: "lightgrey" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    stories2: file(relativePath: { eq: "images/snowcookie.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 500
          traceSVG: { background: "#fff", color: "lightgrey" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    stories3: file(relativePath: { eq: "images/struckd.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 500
          traceSVG: { background: "#fff", color: "lightgrey" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }`

