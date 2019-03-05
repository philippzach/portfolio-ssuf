import React from 'react';
import styled from 'react-emotion';
import { Layout, Wrapper, Navbar, Title } from 'components';
//import Background from '../../static/investmentportfolio.jpg';
import '../styles/pages/portfolio.css';
import Seo from '../components/SEO/index';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Startup1 from '../../static/ssuf/startup-services-1.svg' /* //'../../static/growth-process.svg'; */
import Startup2 from '../../static/ssuf/startup-services-2.svg'/* //'../../static/growth-market.svg'; */
import Startup3 from '../../static/ssuf/startup-services-3.svg'/* //'../../static/growth-analysis.svg'; */

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
  <Seo title="SWISS STARTUP FACTORY- Startup Services" desc="Founding a Startup is enough work – check our 360 degree startup services, so you can focus on your core business." />
      <Navbar />
      <Test> 
          <Img fluid={data.portfolio.childImageSharp.fluid} className="w-100" />
      </Test>
    <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <Title>Services for Startups</Title>
      <div className="containertitle">
        <h2 className="lh-title">Founding a startup is difficult and you have enough work with winning clients, securing funding and improving your product.</h2>
        <Paragraph >
        Check our 360 degree startup services from SWISS STARTUP TECH, so you can focus on the topics that matter the most.  
        </Paragraph>
      </div>
    </Wrapper>
    <div className="flex flex-column flex-row-ns mv4 background" style={{backgroundColor: "#00486C"}}>
      <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
      <Img fluid={data.innovation1.childImageSharp.fluid} className="w-100" />
      </div>
      <div className="w-100 w-60-ns pl3-ns flex items-center measure center">
        <div className="pa4">
            <h3 className="lh-copy white" style={{fontWeight: "300"}}>We work transparently, which requires quality, empathy and fair prices.   </h3>
        </div>
      </div>
    </div>
    <Wrapper>
    <article className="cf mb6 mt6">
        <div className="fl w-100 w-50-ns tc flex justify-center">
            <div className="backgroundgrowth">
              <img src={Startup1} alt="" title="" />
            </div>
         </div>
        <div className="fl tl w-100 w-50-ns pa3-s pa3-m pl4-l">
        <h3 className="lh-title">Product and Application Development</h3>
        <Paragraph className=" mt3">We help startups create modern products. Whether you need a prototype or a complex application we build products that live up to your customers needs, by using latest software development techniques and working with local and remote team setups.
        </Paragraph>
        <button className="button-blue">
                Learn More
                </button>
          </div>
        </article>
    <article class="mobileview cf mb6 mt3">
            <div class="fl w-100 w-50-ns tl pa3-s pa3-m ph4-l">
            <h3>Accounting</h3>
            <p className="mt3">We offer customised solutions for startups in the areas of:
            </p>
            <ul style={{color: "#00486C"}}>
                <li>Accounting</li>
                <li>Tax consulting (Direct and VAT)</li>
                <li>Payroll Accounting</li>
                <li>Human resources and controlling </li>
            </ul>
            <p className="lh-copy mt3">Due to our years of experience in accounting and our customisation to startups, we are experts in the field of accounting services for young firms.</p>
                <button className="button-blue">
                Learn More
                </button>
              </div>
            <div class=" fl w-100 w-50-ns tc flex justify-center">
            <div className="backgroundgrowth">
                <img src={Startup2} alt="" title="" />
                </div>
            </div>
        </article>
      <article className="cf mb6 mt3">
        <div className="fl w-100 w-50-ns tc flex justify-center">
            <div className="backgroundgrowth">
              <img src={Startup3} alt="" title="" />
            </div>
         </div>
        <div className="fl tl w-100 w-50-ns pa3-s pa3-m pl4-l">
        <h3 className="lh-title">Communication & Marketing</h3>
        <Paragraph className="mt3">Another service of SWISS STARTUP TECH is communication and marketing. We advise you on your communication strategy, conceptualize and create content tailored to your target group, growth hack and establish the public relation.
        </Paragraph>
        <button className="button-blue">
                Learn More
                </button>
          </div>
        </article>
    </Wrapper>
    <Wrapper>
      <div className="containerinvestors mb6">
        <h3 style={{fontFamily: "roboto"}} className=" center">
        <b>Contact us for more information.</b>
        </h3>
        <button className="button-blue">
        Contact us
        </button>
      </div>
      </Wrapper>
    

  </Layout>
);

export default InvestmentPortfolio;

export const query = graphql`
  query {
    portfolio: file(relativePath: { eq: "images/startup-services.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1500
            traceSVG: { background: "#fff", color: "lightgrey" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
    }
    innovation1: file(relativePath: { eq: "images/startup-services-1.jpg" }) {
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

