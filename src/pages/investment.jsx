import React from 'react';
import styled from 'react-emotion';
import { Layout, Wrapper, Navbar, Title } from 'components';
//import Background from '../../static/investmentportfolio.jpg';
import '../styles/pages/portfolio.css';
import Seo from '../components/SEO/index';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

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
  <Seo title="SWISS STARTUP GROUP – Investment Portfolio" desc="Exclusive startup investment platform, which contains investor club, advisory board and corporate partners for everything about startup investments" />
      <Navbar />
      <Test> 
          <Img fluid={data.portfolio.childImageSharp.fluid} className="w-100" />
      </Test>
    <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <Title>Investment</Title>
      <div className="containertitle">
        <h2 className="lh-title">Swiss Startup Factory has created its own Investors Club with some of the most renown Ultra High Net Worth Individuals in Europe</h2>
        <Paragraph>
        With our Investors Club, we assure a straight forward and efficient funding process for Startups for seed rounds to A- and B- rounds. In addition, if you receive funding from us, you will have access to a powerful worldwide network to support you like smart money investor. No matter if you need money for your first prototype, for further product development or international expansion, we are the right partner for you. 
        </Paragraph>
      </div>
    </Wrapper>
    <div className="flex flex-column flex-row-ns mv4 background" style={{backgroundColor: "#00486C"}}>
      <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
      <Img fluid={data.innovation1.childImageSharp.fluid} className="w-100" />
      </div>
      <div className="w-100 w-60-ns pl3-ns flex items-center measure center">
        <div className="pa4">
            <h3 className="white">We look for scalable startups with a disruptive idea, an amazing complementary team</h3>
          <Paragraph className="white">
          With us you do not only get funding, you will win the Swiss Startup Factory and our entire ecosystem as a valuable partner for the future.  
          </Paragraph>
          <button className="button-blue" style={{boxShadow: "none"}}>
        Join Investor Club
        </button>
        </div>
      </div>
    </div>
    <Wrapper>
      <div className="containerinvestors mv6">
        <h3 className="lh-copy center">
        Just upload your pitch deck so our business analysts will analyse the potential of your company.
        </h3>
        <button className="button-blue">
        Upload Pitch Deck
        </button>
      </div>
      </Wrapper>
    

  </Layout>
);

export default InvestmentPortfolio;

export const query = graphql`
  query {
    portfolio: file(relativePath: { eq: "images/investment.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1500
            traceSVG: { background: "#fff", color: "lightgrey" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
    }
    innovation1: file(relativePath: { eq: "images/investment-1.jpg" }) {
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

