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
padding: 4em;
`

const Eir = ({data}) => (
    <Layout>
  <Seo title="SWISS STARTUP FACTORY - Entrepreneur in Residence Program" desc="Join our Entrepreneur in Residence Program and work with the most prosmising Startups in Switzerland" />
      <Navbar />
      <Test> 
          <Img fluid={data.eir.childImageSharp.fluid} className="w-100" />
      </Test>
    <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <Title>EIR Program</Title>
      <div className="containertitle">
        <h2 className="lh-title">What is an Entrepreneur in Residence?</h2>
        <Paragraph>
        In our EIR program, we look for talented CEOs of a startup. The idea for the startup can come from our corporate acceleration projects, company building cases or in-house cases that our business analysts select and that we think has lots of potential in Europe.   
        </Paragraph>
      </div>
    </Wrapper>
    <div className="flex flex-column flex-row-ns mv4 background" style={{backgroundColor: "#00486C"}}>
      <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
      <Img fluid={data.eir2.childImageSharp.fluid} className="w-100" />
      </div>
      <div className="w-100 w-60-ns pl3-ns flex items-center measure center">
        <div className="pa4">
            <h3 className="lh-copy white" style={{fontWeight: "300"}}>What is the typical application process?</h3>
                <Check>Send the COO of the Swiss Startup Factory Chris Bargholz your CV.</Check>
                <Check>We screen your application and schedule a call 	with you.</Check>
                <Check>If this goes well, we include you in our EIR database.</Check>
                <Check>As soon as we have a project that fits your skill set, we will contact you.</Check>
        </div>
      </div>
    </div>
    <Wrapper>
        <h3 className="tc mv5">What happens after we find a project for you?</h3>
        <Benefits>
            <ol>
                <ListItem>You will get all information about the case.</ListItem>
                <ListItem>You and other candidates will come in for a meeting, where you will get introduced to the involved parties (corporates, investors, sponsors, etc.)</ListItem>
                <ListItem>If you can convince us that you are the right person for the startup, we will organise another meeting to talk about the terms (salary, equity share, milestones, contract).</ListItem>
                <ListItem>During the first weeks you will build a business model using the lean canvas and other quick frameworks together with our business analysts and business development team.</ListItem>
                <ListItem>With the support of the Swiss Startup Factory, our 360 degree services and the other involved parties you will build a prototype, which you will present to the involved parties.</ListItem>
                <ListItem>If you can convince the jury you will continue and found a company, where a certain percentage of shares will be assigned to you.</ListItem>
                <ListItem>Afterwards, you will continue to develop the product, build the business, fundraise money and scale the business.</ListItem>
            </ol>
        </Benefits>
    </Wrapper>
    <div className="flex flex-column flex-row-ns mv4 background" style={{backgroundColor: "#F6F6F6"}}>
      <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
      <Img fluid={data.eir3.childImageSharp.fluid} className="w-100" />
      </div>
      <div className="w-100 w-60-ns pl3-ns flex items-center measure center">
        <div className="pa4">
            <h3 className="lh-copy" style={{color: "#00486C", fontWeight: "300"}}>Do you have what it takes to become a EIR?</h3>
                <CheckBlue>Minimum two years of work experience.</CheckBlue>
                <CheckBlue>Business development or startup experience.</CheckBlue>
                <CheckBlue>Ability to lead an IT team.</CheckBlue>
                <CheckBlue>Great salesperson.</CheckBlue>
                <CheckBlue>Fluent in English; German is a plus.</CheckBlue>
                <CheckBlue>Entrepreneur mindset with startup DNA.</CheckBlue>
                <CheckBlue>Open personality with great communication skills.</CheckBlue>
                <CheckBlue>Ability to work independently.</CheckBlue>
                <CheckBlue>Resilience to go from one failure to another with no loss of enthusiasm.</CheckBlue>
                <CheckBlue>Ability to sustain a period of time without stable income.</CheckBlue>
                <CheckBlue>Valid work permit in Switzerland.</CheckBlue>
        </div>
      </div>
    </div>
    <div className="tc mv6">
        <h3 className="lh-copy center measure" style={{fontFamily: "roboto"}}>
        Do you want to be part of our Team?
        </h3>
        <button className="button-blue">
        Apply now
        </button>
      </div>
    </Layout>
)

export default Eir;

export const query = graphql`
  query {
    eir: file(relativePath: { eq: "images/eir.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1500
            traceSVG: { background: "#fff", color: "lightgrey" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
    }
    eir2: file(relativePath: { eq: "images/eir-2.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1500
            traceSVG: { background: "#fff", color: "lightgrey" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
    }
    eir3: file(relativePath: { eq: "images/eir-3.jpg" }) {
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