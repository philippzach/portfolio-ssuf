import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { graphql, Link } from 'gatsby';
import { Layout, Listing, Wrapper, Title, Navbar } from 'components';
import Img from 'gatsby-image';
import '../styles/pages/index.css';
import Logo from '../factory.svg';
import Seo from '../components/SEO/index';
import SocialBanner from '../../static/socialsharing.jpg'

const Test = styled.div`
    position: relative;
    overflow: hidden;
    vertical-align: middle;
    max-height: 900px;
`

const HeroInner = styled.div`
  h1 {
    margin-bottom: 2rem;
    text-transform: uppercase;
    font-size: 3em;
  }
  @media (min-width: 1000px) {
    position: absolute;
    ${'' /* top: 150px;
    left: 50px; */}
    top: 400px;  /* position the top  edge of the element at the middle of the parent */
    left: 50%; /* position the left edge of the element at the middle of the parent */
    text-align: center;
    transform: translate(-50%, -50%);
  }
  @media (min-width: 700px) and (max-width: 1000px) {
    position: absolute;
    top: 133px;
    left: 50px;
  }
  @media (max-width: 700px) {
    text-align: center;
    h1{
      padding-top: 2rem;
    }
  }
`;

const HeroText = styled.div`
  font-size: 1.3rem;
  line-height: 1.4;
  margin-bottom: 2rem;
  max-width: 100%;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    font-size: 1.4rem;
    max-width: 100%;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 1.25rem;
    max-width: 100%;
  }
  @media (max-width: 700px) {
    max-width: 100%;
    margin-bottom: 5em;
    padding: 1em;
  }
`;

const BulletPoint = styled.img`
 height: 10px;
 padding-right: 0.3em;
 `

class Index extends Component {
  render() {
    const {
      data: { posts },
      data: { index },
      data: { startups },
      data: {  corporates },
    } = this.props;
    return (
      <Layout>
        <Seo title="SWISS STARTUP FACTORY - We inspire and enable people to build sustainable companies." desc="Swiss Venture Builder for Startup Scouting, Analysis, Acceleration, Company Building, Corporate Venturing, Growth and Investments in one platform." banner={SocialBanner} />
          <Navbar />
          <Test> 
            <Img fluid={index.childImageSharp.fluid} className="w-100" />
          </Test>
          <HeroInner>
            <h1 className="headingcolorshadow">
              Swiss Startup Factory
            </h1>
            <HeroText>
            We inspire and enable people to build sustainable companies.
            </HeroText>
            <div>
              <p>Upload your pitch deck now</p>
              <button>APPLY TO OUR CUSTOMIZED ACCELERATOR PROGRAM</button>
            </div>
          </HeroInner>
        <div className="line" />
        <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <div className="logocontainer">
            <img src={Logo} alt="" title="" description="" className="logoheight"/>
          </div>
          <div className="containertitle">
            <h2 className="lh-copy" style={{fontFamily: "Roboto", fontSize: "28px", fontWeight: "600", }}>
            Swiss Startup Factory is a venture studio for corporates and startups to innovate and accelerate in the best new technologies. 
            </h2>
            <p className="lh-copy"><span className="b">Since 2015 we are the number one privately financed accelerator in Switzerland.</span>
            The Swiss Startup Factory provides a professional execution platform to corporates and startups through a dedicated business driven process that brings their innovation to market fast and lean.
            </p>
            <p className="lh-copy"><b className="lh-copy">At Swiss Startup Factory innovation meets execution – we unleash your entrepreneurial potential! </b></p>
          </div>
        </Wrapper>
        <div className="flex flex-column flex-row-ns mv4 background" style={{backgroundColor: "#00486C"}}>
      <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
      <Img fluid={startups.childImageSharp.fluid} className="w-100" />
      </div>
      <div className="w-100 w-60-ns flex items-center measure center">
        <div style={{padding: "0 3rem",}}>
          <h2 className="white">Startups</h2>
          <p className="white lh-copy">
          Being close to startups is the core for the Swiss Startup Factory. 
          </p>
          <p className="white lh-copy">
          We constantly develop our frameworks and apply them for building up successful startups. 
          </p>
        </div>
      </div>
    </div>
        <Wrapper style={{ paddingTop: '5rem', paddingBottom: '1rem' }}>
          <Title className="mb4-l mb5">What we offer</Title>
        </Wrapper>
        <div className="startupscontainer">
        <article className="hover mw5 center br1 pa3 pa4-ns mv3 ba b--black-10 flex flex-column ">
        <a className="flex flex-column" href="https://www.swissstartupfactory.com/startups/accelerator" target="_blank">
          <div className="tc">
            <h3 className="f4" style={{ color: 'rgb(0, 71, 107)' }}>
              Acceleration
            </h3>
            <hr className="mw3 bb bw1 b--black-10" />
          </div>
          <div>
          <p className="lh-copy measure center f6 black-70">
            Based on more than 3-years of experience we have designed a completely new customised accelerator program
            which will prepare you and your team to live up to your potential
          </p>
          </div>
          <div className="mv3">
          <span className="buttonfactory mid-gray ttu b">Learn more</span>
          </div>
          </a>
        </article>
        <article className="hover mw5 center br1 pa3 pa4-ns mv3 ba b--black-10 flex flex-column ">
        <a className="flex flex-column" href="mailto:chris.bargholz@ssuf.ch">
          <div className="tc">
            <h3 className="f4 lh-copy" style={{ color: 'rgb(0, 71, 107)' }}>
              Startup Support Meeting
            </h3>
            <hr className="mw3 bb bw1 b--black-10" />
          </div>
          <p className="lh-copy measure center f6 black-70">
            30 minutes meeting where you can pitch us your idea, tell us about your challenges and ask us for feedback
          </p>
          <div className="mv3">
          <span className="buttonfactory mid-gray ttu b">Learn more</span>
          </div>
          </a>
        </article>
        <article className="hover mw5 center br1 pa3 pa4-ns mv3 ba b--black-10 flex flex-column ">
        <a className="flex flex-column" href="mailto:chris.bargholz@ssuf.ch">
          <div className="tc">
            <h3 className="f4" style={{ color: 'rgb(0, 71, 107)' }}>
              Pitch Training
            </h3>
            <hr className="mw3 bb bw1 b--black-10" />
          </div>
          <p className="lh-copy measure center f6 black-70">
            We help you to improve your pitch that allows you to understand which areas are important and should be in
            the spotlight to move you company forward
          </p>
          <div className="mv3">
          <span className="buttonfactory mid-gray ttu b">Learn more</span>
          </div>
          </a>
        </article>
      </div>
      <Wrapper style={{ paddingTop: '5rem', paddingBottom: '1rem' }}>
          
        </Wrapper>
      <div className="flex flex-column flex-row-ns mv4 background">
      <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
      <Img fluid={corporates.childImageSharp.fluid} className="w-100" />
      </div>
      <div className="w-100 w-60-ns flex items-center measure center">
        <div style={{padding: "0 3rem",}}>
          <h2 className="">Corporates</h2>
          <p className=" lh-copy">
          Our goal is to understand and evaluate our corporate client’s current strategic innovation roadmap and provide a best advice on it’s execution with our 
          specialized skills. 
          </p>
          <p className="lh-copy">
          For corporates we are the interface to innovation. 
          </p>
        </div>
      </div>
    </div>
    <div className="corporatescontainer">
      <div className="row">
        <article className="shadow hover items-center center br1 pa3 pa4-ns mv3 ba b--black-10 flex flex-column ">
        <a className="flex flex-column" href="https://www.swissstartupfactory.com/corporates/innovation-consulting" target="_blank">
          <div className="tc">
            <h3 className="f4" style={{ color: 'rgb(0, 71, 107)' }}>
              Intra Innovation
            </h3>
            <hr className="mw3 bb bw1 b--black-10" />
          </div>
          <div>
          <p className="lh-copy measure center f6 black-70 mb4-l">
            We offer customised innovation and digital transformation consulting services.
          </p>
          </div>
          <div className="mt4-l mv3 tc">
          <span className="buttonfactory mid-gray ttu b">Learn more</span>
          </div>
          </a>
        </article>
        <article className="shadow hover items-center center br1 pa3 pa4-ns mv3 ba b--black-10 flex flex-column ">
        <a className="flex flex-column" href="https://www.swissstartupfactory.com/corporates/corporate-acceleration" target="_blank">
          <div className="tc">
            <h3 className="f4" style={{ color: 'rgb(0, 71, 107)' }}>
              Corporate Acceleration
            </h3>
            <hr className="mw3 bb bw1 b--black-10" />
          </div>
          <div>
          <p className="lh-copy measure center f6 black-70">
            Adjusting our accelerator program to the structure of the corporate, we build up their existing startup
            projects with - or without taking equity.
          </p>
          </div>
          <div className="mv3 tc">
          <span className="buttonfactory mid-gray ttu b">Learn more</span>
          </div>
          </a>
        </article>
        </div>
        <div className="row">
        <article className="shadow hover items-center center br1 pa3 pa4-ns mv3 ba b--black-10 flex flex-column">
        <a className="flex flex-column" href="https://www.swissstartupfactory.com/corporates/company-building" target="_blank">
          <div className="tc">
            <h3 className="f4" style={{ color: 'rgb(0, 71, 107)' }}>
              Company Builder
            </h3>
            <hr className="mw3 bb bw1 b--black-10" />
          </div>
          <div className="mv3-l">
          <p className="lh-copy measure center f6 black-70">
            Building up a completely new business model or startup from scratch - outside the existing corporate
            structures
          </p>
          </div>
          <div className="mv3 tc">
          <span className="buttonfactory mid-gray ttu b">Learn more</span>
          </div>
          </a>
        </article>
        <article className="shadow hover items-center center br1 pa3 pa4-ns mv3 ba b--black-10 flex flex-column ">
        <a className="flex flex-column" href="https://ccvs.ch/" target="_blank">
          <div className="tc">
            <h3 className="f4" style={{ color: 'rgb(0, 71, 107)' }}>
              Corporate Venturing
            </h3>
            <hr className="mw3 bb bw1 b--black-10" />
          </div>
          <div>
          <p className="lh-copy measure center f6 black-70">
          The Center of Corporate Venturing  connects innovation leaders – its members have access to educational events, networking opportunities and a place to exchange ideas.
          </p>
          </div>
          <div className="mv3 tc">
          <span className="buttonfactory mid-gray ttu b">Learn more</span>
          </div>
          </a>
        </article>
        </div>
      </div>

        <Wrapper style={{ paddingTop: '5rem' }}>
          <Title style={{ marginTop: '4rem' }}>News & Trending Articles</Title>
        </Wrapper>
        <div className="ph4-s ph5-m ph6-l mb3"> 
          <Listing posts={posts.edges} />
        </div> 
        <div className="w100 flex justify-center mb6">
        <div className="button -dark"><a style={{ fontWeight: "600", lineHeight: "1.3em" }} href="/blog" target="_blank">NEWS</a></div>
        </div>
      </Layout>
    );
  }
}

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    posts: PropTypes.object.isRequired,
  }).isRequired,
};

export const pageQuery = graphql`
  query IndexQuery {
    posts: allPrismicPost(limit: 4, sort: { fields: [data___date], order: DESC }) {
      edges {
        node {
          uid
          data {
            title {
              text
            }
            coverimage {
              url
              alt
              localFile {
                id
              	childImageSharp {
                  fluid(maxWidth: 700){
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            date(formatString: "DD.MM.YYYY")
            categories {
              category {
                document {
                  data {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
    index: file(relativePath: { eq: "images/indexbg.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1500
          traceSVG: { background: "#fff", color: "lightgrey" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
  }
  startups: file(relativePath: { eq: "images/startups.jpg" }) {
    childImageSharp {
      fluid(
        maxWidth: 1500
        traceSVG: { background: "#fff", color: "lightgrey" }
      ) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  corporates: file(relativePath: { eq: "images/corporates.jpg" }) {
    childImageSharp {
      fluid(
        maxWidth: 1500
        traceSVG: { background: "#fff", color: "lightgrey" }
      ) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  }
`;


