import React from 'react';
import styled from 'react-emotion';
import { Layout, Wrapper, Navbar, Title } from 'components';
//import '../styles/pages/eir.css';
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

const Check = styled.h4`
line-height: 35px;
color: white;
text-indent: -25px;
font-family: roboto;
font-weight: 300;
::before {
  content: "✔";
  color: white;
  padding-right: 10px;
}
`
const CheckBlue = styled.h4`
line-height: 30px;
margin-bottom: 1em;
color: #00486C;
text-indent: -25px;
font-family: roboto;
font-weight: 300;
::before {
  content: "✔";
  color: #00486C;
  padding-right: 10px;
}
`
const ListItem = styled.li`
line-height: 35px;
color: #00486C;
font-family: roboto;
`

const Benefits = styled.div`
background-color: #F6F6F6;
box-shadow: 0 2px 4px rgba(0,0,0,0.11);
margin-bottom: 4em;
padding: 4em 2em;
`
const BenefitsInside = styled.div`
    max-width: 22em;
    margin: 0 auto;
`

const Innovators = ({data}) => (
    <Layout>
  <Seo title="Swiss Startup Factory - Entrepreneur in Residence Program" desc="Join our Entrepreneur in Residence Program and work with the most prosmising Startups in Switzerland" />
      <Navbar />
      <Test> 
          <Img fluid={data.innovators.childImageSharp.fluid} className="w-100" />
      </Test>
    <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <Title>Innovator Program</Title>
      <div className="containertitle">
        <h2 className="lh-title">Swiss Innovators</h2>
        <Paragraph>
        Become a part of our community of the most innovative people in Switzerland. This community is free, offers only benefits and you can be a part of Switzerland’s entrepreneurial competitiveness in the future.    
        </Paragraph>
      </div>
    </Wrapper>
    <div className="flex flex-column flex-row-ns mv4 background" style={{backgroundColor: "#00486C"}}>
      <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
      <Img fluid={data.innovators2.childImageSharp.fluid} className="w-100" />
      </div>
      <div className="w-100 w-60-ns pl3-ns flex items-center measure center">
        <div className="pa4">
            <h3 className="lh-copy white" style={{fontWeight: "300"}}>Benefits</h3>
                <Check>Get access to exclusive Swiss Startup Factory events for networking and to learn about the latest trends.</Check>
                <Check>Get discounts to interesting industry events from our partners.</Check>
                <Check>Join business and soft skill workshops with elite coaches. </Check>
                <Check>Broaden your network to other future shapers of Switzerland and current industry leaders, startups and entrepreneurs.</Check>
                <Check>Get unique access to non-published job opportunities for innovation departments of large corporates, in the startup ecosystem or SMEs​</Check>
        </div>
      </div>
    </div>
    <Wrapper>
        <h3 className="tc mv5">Admission Criteria</h3>
        <Benefits>
        <BenefitsInside>
        <CheckBlue>At least Bachelor's Degree</CheckBlue>
        <CheckBlue>3 - 15 years working experience</CheckBlue>
        <CheckBlue>Swiss work permit</CheckBlue>
        <CheckBlue>Business Development Knowledge either through working for a startup or experience in project management</CheckBlue>
        <CheckBlue>Technical knowledge in one of the following areas:</CheckBlue>
            <ul>
                <ListItem>AI & Machine Learning</ListItem>
                <ListItem>AR / VR</ListItem>
                <ListItem>FinTech</ListItem>
                <ListItem>Blockchain & ICO Experts</ListItem>
            </ul>
        </BenefitsInside>
        </Benefits>
    </Wrapper>
    
    <div className="tc mv6">
        <h3 className="lh-copy center measure" style={{fontFamily: "roboto"}}>
        Do you have what it takes to become a future shaper of Switzerland?
        </h3>
        <button className="button-blue">
        Apply now
        </button>
      </div>
    </Layout>
)

export default Innovators;

export const query = graphql`
  query {
    innovators: file(relativePath: { eq: "images/innovators.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1500
            traceSVG: { background: "#fff", color: "lightgrey" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
    }
    innovators2: file(relativePath: { eq: "images/innovators-2.jpg" }) {
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
