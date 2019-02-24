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
  <Seo title="Swiss Startup Factory - Innovation Consulting" desc="Swiss Startup Factory innovation consulting include idea generation, change of internal culture, corporate venturing and strategy development for innovation departments." />
      <Navbar />
      <Test> 
          <Img fluid={data.portfolio.childImageSharp.fluid} className="w-100" />
      </Test>
    <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <Title>Intra Innovation</Title>
      <div className="containertitle">
        <h2 className="lh-title">As a corporate the digital transformation is a large topic with many different ways of how to approach it.</h2>
        <Paragraph className="lh-copy">
        Our SSUF innovation consulting services include idea generation for new business models/products, change of internal culture towards innovation, corporate venturing setup support, as well as strategy development for innovation departments. 
        </Paragraph>
      </div>
    </Wrapper>
    <div className="flex flex-column flex-row-ns mv4 background" style={{backgroundColor: "#00486C"}}>
      <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
      <Img fluid={data.innovation1.childImageSharp.fluid} className="w-100" />
      </div>
      <div className="w-100 w-60-ns pl3-ns flex items-center measure center">
        <div className="pa2">
          <Paragraph className="lh-copy white">
          With us as a partner, you can benefit from our startup expertise in combination with our experience working on various innovation projects with large corporations. Unlike other consulting firms, we do not observe innovation from a bird's eye perspective. Through our startup platform, we are at the core of innovation and we can pass on this DNA to your corporation. 
          </Paragraph>
        </div>
      </div>
    </div>
    <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <div className="containerinvestors mv5">
        <h3 className="center" style={{lineHeight: "40px", fontFamily: "roboto", fontWeight: "400"}}>
        Through our own startup platform, our talented and diverse team and our experience working with various corporates, we can offer a great variety of innovation services. 
        </h3>
        {/* <Paragraph className="investorparagraph lh-copy fw3">
        Those services include are not limited to the following:
        </Paragraph> */}
      </div>
      
    </Wrapper>
    <div className="flex flex-column flex-row-ns background">
    <div className="mb4 mb0-ns w-100 w-40-ns">
    <Img fluid={data.innovation2.childImageSharp.fluid} className="w-100" />
      </div>
      <div className="w-100 w-60-ns pl3-ns flex items-center justify-center">
        <div className="pa4">
          <h3 className="lh-title">Innovation Screening & Research</h3>
          <Paragraph className=" measure">
          All great accomplishments start with a thought, an idea, a seed from which actions and execution unfold to make a vision real. 
          </Paragraph>
          <Paragraph className=" measure">
          Together with our team of highly skilled analysts, we identify current trends and startups in your industry from all over the world. Being aware of the latest ideas, gives you a competitive edge to make the best strategic decisions going forward. 
          </Paragraph>
        </div>
      </div>
    </div>
    <Wrapper></Wrapper>
    <div className="flex flex-column flex-row-ns mv6 ">
      <div className="w-100 w-60-ns pl3-ns flex items-center justify-center">
        <div className="pa4">
          <h3 className="lh-title"> Innovation Consulting</h3>
          <Paragraph className=" measure">
          In today’s world, businesses that are successful are constantly evolving and have the courage to rethink its own business model every day. In today’s world, change is not an option, it is unstoppable. 
          </Paragraph>
          <Paragraph className=" measure">
          Organizations that are willing to benefit from the opportunities at hand need to be courageous and act.​ Fail fast, fail forward. In today’s world, your biggest advantage lies in being innovative and fast. Together we show you the way while supporting you along the execution.
          </Paragraph>
        </div>
      </div>
      <div className="mb4 mb0-ns w-100 w-40-ns">
      <Img fluid={data.innovation3.childImageSharp.fluid} className="w-100" />
      </div>
    </div>
    <Wrapper />
    <div className="flex flex-column flex-row-ns mt4 background">
    <div className="mb4 mb0-ns w-100 w-40-ns">
        <Img fluid={data.innovation4.childImageSharp.fluid} className="w-100" />
      </div>
      <div className="w-100 w-60-ns pl3-ns flex items-center justify-center">
        <div className="pa4">
          <h3 className="lh-title">Innovation Culture</h3>
          <Paragraph className=" measure">
          Business is people business. Digitization and business transformation requires courage at the management level to set the agenda, the targets, question the status quo and ultimately make certain hard decisions. 
          </Paragraph>
          <Paragraph className=" measure">
          However, in order to be successful in the future, your whole workforce needs to use their knowledge and experience for addressing the needs of the clients. Through the selection of the right tools like workshops or innovation challenges, we can support you throughout the entire process of changing your internal culture.  
          </Paragraph>
        </div>
      </div>
    </div>
    <Wrapper />
    <div className="flex flex-column flex-row-ns mv6 ">
      <div className="w-100 w-60-ns pl3-ns flex items-center justify-center">
        <div className="pa4">
          <h3 className="lh-title"> Others</h3>
          <Paragraph className="measure">
          In addition to the services from above, we can support you with 
          </Paragraph>
          <ul className="lh-copy measure" style={{color: "#00486C"}}>
          <li>Events</li>
          <li>Hackathons</li>
          <li>Startup acceleration</li>
          <li>Startup investments</li>
          <li>General corporate venturing</li>
          </ul>
        </div>
      </div>
      <div className="mb4 mb0-ns w-100 w-40-ns">
      <Img fluid={data.innovation5.childImageSharp.fluid} className="w-100" />
      </div>
    </div>
    <Wrapper />
    <div className="flex flex-column flex-row-ns mt4 background">
    <div className="mb4 mb0-ns w-100 w-40-ns">
        <Img fluid={data.innovation6.childImageSharp.fluid} className="w-100" />
      </div>
      <div className="w-100 w-60-ns pl3-ns flex items-center justify-center">
        <div className="pa4">
          <Paragraph className="measure">
          For each of the services described above, we have developed standardised programs, which we have tested multiple times with large clients. All collaborations start with a meeting where we will find out more about your organisation and your needs. Based on this, we will suggest the right services from our toolbox that fits 100% to your needs. 
          </Paragraph>
        </div>
      </div>
    </div>
    <Wrapper>
      <div className="containerinvestors mv6">
        <h3 className="lh-copy center" style={{fontFamily:"roboto"}}>
        Are you interested in finding out more on how your company can prepare itself for the digital transformation? 
        </h3>
        <button className="button-blue">
        Learn More
        </button>
      </div>
      </Wrapper>
  </Layout>
);

export default InvestmentPortfolio;

export const query = graphql`
  query {
    portfolio: file(relativePath: { eq: "images/intrainnovation.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1500
            traceSVG: { background: "#fff", color: "lightgrey" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
    }
    innovation1: file(relativePath: { eq: "images/innovation-1.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1500
            traceSVG: { background: "#fff", color: "lightgrey" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
    }
    innovation2: file(relativePath: { eq: "images/innovation-2.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1500
            traceSVG: { background: "#fff", color: "lightgrey" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
    }
    innovation3: file(relativePath: { eq: "images/innovation-3.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1500
            traceSVG: { background: "#fff", color: "lightgrey" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
    }
    innovation4: file(relativePath: { eq: "images/innovation-4.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1500
            traceSVG: { background: "#fff", color: "lightgrey" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
    }
    innovation5: file(relativePath: { eq: "images/innovation-5.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1500
            traceSVG: { background: "#fff", color: "lightgrey" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
    }
    innovation6: file(relativePath: { eq: "images/innovation-6.jpg" }) {
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

