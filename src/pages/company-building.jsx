import React from 'react';
import styled from 'react-emotion';
import { Layout, Wrapper, Navbar, Title } from 'components';
//import Background from '../../static/investmentportfolio.jpg';
import '../styles/pages/portfolio.css';
import Seo from '../components/SEO/index';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Startup1 from '../../static/ssuf/corporate-acc-1.svg' /* //'../../static/growth-process.svg'; */
import Startup2 from '../../static/ssuf/corporate-acc-2.svg'/* //'../../static/growth-market.svg'; */
import Startup3 from '../../static/ssuf/corporate-acc-3.svg'/* //'../../static/growth-analysis.svg'; */

const Test = styled.div`
    position: relative;
    overflow: hidden;
    vertical-align: middle;
    max-height: 450px;
`
const Paragraph = styled.p`
line-height: 35px;
`
const ParagraphS = styled.p`
line-height: 30px;
`

const InvestmentPortfolio = ({ data }) => (
  <Layout>
  <Seo title="SWISS STARTUP FACTORY - Company Building" desc="Company building service wirth the ability to build new business models. Swiss Startup Factory is an expert in company building." />
      <Navbar />
      <Test> 
          <Img fluid={data.portfolio.childImageSharp.fluid} className="w-100" />
      </Test>
    <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <Title>Company Building</Title>
      <div className="containertitle">
        <h2 className="lh-title">The speed of industry transformation has increased and will increase even further in the years to come</h2>
        <Paragraph>
        Startups come up with new innovative ideas that solve the pain points of customers better than existing solutions. As the younger generation is more likely to try out new offers, this trend will take away your existing clients, lower your market share and will thereby threaten your company’s existence. You should not be reactive but take the initiative to shape your industry and address future problems of your customers. To do so, you need the right in-house entrepreneurs. Most companies neither have an internal innovation department nor the right people to scout or discover good ideas and build up new business models. 
        </Paragraph>
        <Paragraph>
        Our company-building service allows you to be one step ahead and build new business models that will eventually disrupt your industry. ​We are the experts in company building in Switzerland – we have the skills, the experience and the platform to find viable business models and build up any company in any industry.
        </Paragraph>
      </div>
    </Wrapper>
    <div className="flex flex-column flex-row-ns background pb4 mb6" style={{backgroundColor: "#00486C"}}>
      <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
      <Img fluid={data.innovation1.childImageSharp.fluid} className="w-100" />
      </div>
      <div className="w-100 w-60-ns pl3-ns flex items-center measure center">
        <div className="pt4">
            <Paragraph className="white">For six months, we create an agile and quick experimental playground, where ideas can grow protected from corporate structures and processes.</Paragraph>
          <Paragraph className=" white">
          During those six months, the goal is to build a ready-to-market startup. With our Swiss Startup Factory company-building framework, which we have developed over the last three years, and our experience of establishing over 50 startups, we can efficiently build up any company in any industry.
          </Paragraph>
          <Paragraph className=" white">
          Our connections to the entire Swiss startup ecosystem, our corporate partners and our own portfolio startups, which we always leverage to test new products and to find synergies, are a further advantage we offer.
          </Paragraph>
          <Paragraph className=" white">
          The lean startup approach (build-measure-learn) assures that we use as little funds as possible to build up the company. Through regular milestones where you have the ability to stop the project, your financial risk is mitigated. No superficial projects but full control, no waste of funds – utmost efficiency that leads to agility, speed and clear results.  
          </Paragraph>
        </div>
      </div>
    </div>
    <Wrapper>
        <Title>The Company Building Process</Title>
    </Wrapper>
    <Wrapper>
    <article class="mobileview cf mv6 mt3">
            <div class="fl w-100 w-50-ns tl pa3-s pa3-m ph4-l">
            <h3 className="lh-title">Phase 1: Idea Generation & Team Definition </h3>
            <ParagraphS className=" mt3 b">Duration: 1 month</ParagraphS>
            <ParagraphS className=" mt3 ">Together with you and our team of exceptional startup analysts, we identify the key disruption trends for the upcoming years in your industry. Then, we focus on the best ideas, start developing theoretical business cases and identify each case’s market potential.</ParagraphS>
            <ParagraphS className=" mt3 ">Based on numbers, expert interviews, your industry knowledge and our analysis, we decide what idea to execute. You either provide an in-house team or we scout the best talents using our in-house boutique recruitment agency for the implementation of your project.</ParagraphS>
              </div>
            <div class=" fl w-100 w-50-ns tc flex justify-center">
            <div className="backgroundgrowth">
                <img src={Startup1} alt="" title="" />
                </div>
            </div>
        </article>
      <article className="cf mb6 mt3">
        <div className="fl w-100 w-50-ns tc flex justify-center">
            <div className="backgroundgrowth">
              <img src={Startup2} alt="" title="" />
            </div>
         </div>
        <div className="fl tl w-100 w-50-ns pa3-s pa3-m pl4-l">
        <h3 className="lh-title">Phase 2: Business Case </h3>
        <ParagraphS className=" mt3 b">Duration: 1 month</ParagraphS>
         <ParagraphS className="mt3">In several intense workshops and by going “out of the office”, we find out everything about the potential clients, their problems and their needs. Then, we continue to shape the idea into a feasible solution and build up the business case around it. At the end, we present the business case to you and you can decide if the project should enter the next phase.</ParagraphS>
          </div>
        </article>
        <article class="mobileview cf mv6">
            <div class="fl w-100 w-50-ns tl pa3-s pa3-m ph4-l">
            <h3 className="lh-title">Phase 3: Start Acceleration</h3>
            <ParagraphS className=" mt3 b">Duration: 3 months</ParagraphS>
            <ParagraphS className=" mt3 ">Our normal accelerator program starts with the final goal of creating a new separate entity. During the entire acceleration program, we guarantee not only highest cost-efficiency but also the agility to adapt and scale quickly when the right strategy and preparations are in place. Once again, several milestones give you the ability to stop the project if you are not satisfied with it.</ParagraphS>
              </div>
            <div class=" fl w-100 w-50-ns tc flex justify-center">
            <div className="backgroundgrowth">
                <img src={Startup3} alt="" title="" />
                </div>
            </div>
        </article>
    </Wrapper>
    <Wrapper>
      <div className="containerinvestors mb6">
        <h3 className="lh-copy center measure" style={{fontFamily: "roboto"}}>
        Do you want to be the organization disrupting the industry or do you want to be disrupted by others?
        </h3>
        <a href="mailto:chris.bargholz@ssuf.ch" className="button-blue">
        Start disrupting
        </a>
      </div>
      </Wrapper>
    

  </Layout>
);

export default InvestmentPortfolio;

export const query = graphql`
  query {
    portfolio: file(relativePath: { eq: "images/company-building.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1500
            traceSVG: { background: "#fff", color: "lightgrey" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
    }
    innovation1: file(relativePath: { eq: "images/company-building-1.jpg" }) {
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

