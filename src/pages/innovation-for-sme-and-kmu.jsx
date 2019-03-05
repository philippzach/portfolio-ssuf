import React from 'react';
import styled from 'react-emotion';
import { Layout, Wrapper, Navbar, Title } from 'components';
//import Background from '../../static/investmentportfolio.jpg';
import '../styles/pages/portfolio.css';
import Seo from '../components/SEO/index';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Startup1 from '../../static/ssuf/innovation-for-sme.svg' /* //'../../static/growth-process.svg'; */

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
  <Seo title="SWISS STARTUP FACTORY - Innovation for SME / KMU" desc="Swiss Startup Factory innovation consulting include idea generation, change of internal culture, corporate venturing and strategy development for innovation departments." />
      <Navbar />
      <Test> 
          <Img fluid={data.portfolio.childImageSharp.fluid} className="w-100" />
      </Test>
    <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <Title>Innovation for SME / KMU</Title>
      <div className="containertitle">
        <h2 className="lh-title">SMEs are less likely to innovate than large enterprises.</h2>
        <Paragraph >
        The high payback period combined with a lack of own resources constitute obstacles to innovation activities for SMEs. Nevertheless, innovations are regarded as an important success factor for small and medium-sized enterprises. Only through their flexibility and innovative strength can they compete against large enterprises.  
        </Paragraph>
        <Paragraph >The Swiss Startup Factory helps your company to adapt its internal processes to the new technologies that suit it best. We advise you individually in order to enable an innovative and individual transformation.
        </Paragraph>
        <Paragraph >Among other things, the brand and marketing strategy will be revised in order to optimally prepare them for the current and future market and to optimally reach their target group. Based on our own experience as an SME in the Swiss and foreign markets, we show you what is important and set the right focus.
        </Paragraph>
      </div>
    </Wrapper>
    <div className="flex flex-column flex-row-ns mv4 background" style={{backgroundColor: "#00486C"}}>
      <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
      <Img fluid={data.innovation1.childImageSharp.fluid} className="w-100" />
      </div>
      <div className="w-100 w-60-ns pl3-ns flex items-center measure center">
        <div className="pv4">
            <h3 className="lh-tile white">For SMEs we offer customized programs adapted to a standardised process,which we have tested multiple times with clients from all different branches.</h3>
            <Paragraph className="white ">All collaborations start with a meeting where we will find out more about your organisation and your needs. Based on this, we will suggest a program that fits your needs.</Paragraph>
            <Paragraph className="white">Through our Growth Services platform, our talented and diverse team and our experience working with various corporates, we can offer a great variety of communication and marketing services. </Paragraph>
            <button className="button-blue" style={{boxShadow: "none"}}>
                Contact us
                </button><span className="white fw3">for more information</span>
        </div>
      </div>
    </div>
    <Wrapper>
    <article className="cf mb3 mt6">
        <div className="fl w-100 w-50-ns tc flex justify-center">
            <div className="backgroundgrowth">
              <img src={Startup1} alt="" title="" />
            </div>
         </div>
        <div className="fl tl w-100 w-50-ns pa3-s pa3-m pl4-l">
        <h3 className="lh-title">In order to optimally achieve the set goal, we have developed a process that has already proven itself in other cases.</h3>
        <p className="lh-copy mt3 b black">1. Analyze current situation through our analyst team</p>
        <p className="lh-copy b black">2. Workshop</p>
        <ul style={{color: "#00486C"}}>
            <li>Purpose (Vision, Mission, Values, Customer)</li>
            <li>Product (USP, UCP, Services, Focus) </li>
            <li>Market (Positioning, Competitors)</li>
            <li>Sales (Funnel Management, Strategy)</li>
            <li>Marketing & Communications</li>
            <li>Internal Process (Tools, Apps, Digitisation)</li>
            <li>KPIs (Company, Team, Team member)</li>
            <li>Leadership (Team management, middle management)</li>
        </ul>
        <p className="lh-copy b black">3. Develop strategy document</p>
        <p className="lh-copy b black">4. Implementation with few resources and with focus on tracking</p>
          </div>
        </article>
    
    </Wrapper>
    <Wrapper>
      <div className="containerinvestors mv5">
        <h3 className="lh-copy center" style={{fontFamily:"roboto"}}>
        <b>For any further information <br/>we are happy to help. </b>
        </h3>
        <button className="button-blue">
        Contact us
        </button>
        <p className="fw3">for a non-binding meeting</p>
      </div>
      </Wrapper>
    

  </Layout>
);

export default InvestmentPortfolio;

export const query = graphql`
  query {
    portfolio: file(relativePath: { eq: "images/innovation-for-sme.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1500
            traceSVG: { background: "#fff", color: "lightgrey" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
    }
    innovation1: file(relativePath: { eq: "images/innovation-for-sme-1.jpg" }) {
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

