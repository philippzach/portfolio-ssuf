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
import '../styles/pages/factory.css';
import '../styles/pages/buttonblue.css';


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
    white-space: nowrap
  }
  @media (min-width: 1200px) {
    position: absolute;
    top: 450px;  /* position the top  edge of the element at the middle of the parent */
    left: 50%; /* position the left edge of the element at the middle of the parent */
    text-align: center;
    transform: translate(-50%, -50%);
  }
  @media (min-width: 950px) and (max-width: 1200px){
    position: absolute;
    top: 350px;
    left: 50%; 
    text-align: center;
    transform: translate(-50%, -50%);
  }
  @media (min-width: 700px) and (max-width: 950px) {
    position: absolute;
    top: 275px;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 700px) {
    text-align: center;
    h1{
      padding-top: 2rem;
      white-space: unset;
    }
  }
`;

const HeroText = styled.div`
    font-size: 1.4rem;
    line-height: 1.5;
    margin-bottom: 2rem;
    padding-bottom: 2em;
    max-width: 100%;
    color: white;
    text-shadow: 0 1px 5px rgba(0,0,0,1);
  @media (max-width: 950px) {
    font-size: 1.4rem;
    max-width: 100%;
    padding-bottom: 0;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 1.25rem;
    max-width: 100%;
  }
  @media (max-width: 700px) {
    max-width: 100%;
    margin-bottom: 5em;
    padding: 1em;
    color: black;
    text-shadow: none;
    margin-bottom: 0;
    padding-bottom: 2em;
  }
`;

const HeaderSmall = styled.p`
 color: white;
 font-size: 1em;
 text-shadow: 0 0 5px rgba(0,0,0,0.5);
 margin-bottom: .5em;
 @media (max-width: 700px) {
   color: black;
   text-shadow: none;
 }
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
        <Seo title="SWISS STARTUP FACTORY" desc="Swiss Startup Factory. We inspire & enable people to build sustainable companies and unleash entrepreneurial potential. " banner={SocialBanner} />
          <Navbar />
          <Test> 
            <Img fluid={index.childImageSharp.fluid} className="w-100" />
          </Test>
          <HeroInner>
            <h1 className="headingcolorshadow">
              Swiss Startup Factory
            </h1>
            <HeroText>
            We inspire and enable people to build<br/> sustainable companies and unleash their entrepreneurial potential.
            </HeroText>
            <div>
              <HeaderSmall>Upload your pitch deck now</HeaderSmall>
              
              <Link to="/startup-accelerator"><div className="button-blue">APPLY TO OUR CUSTOMIZED ACCELERATOR PROGRAM</div></Link>
              
            </div>
          </HeroInner>
        <div className="line" />
        <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <div className="logocontainer">
            <img src={Logo} alt="" title="" description="" className="logoheight"/>
          </div>
          <div className="containertitle" style={{color:"#00486C"}}>
            <h2 className="lh-copy" style={{fontFamily: "Roboto", fontSize: "28px", fontWeight: "600", color:"#00486C"}}>
            Swiss Startup Factory is a venture studio for corporates and startups to innovate and accelerate the best new technologies. 
            </h2>
            <p className="lh-copy">Since 2015 we are the number one privately financed accelerator in Switzerland.
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
          <h2 className="white" style={{fontFamily: "Roboto", textTransform: "uppercase"}}>Startups</h2>
          <p className="white lh-copy">
          Being close to startups is the core for the Swiss Startup Factory. 
          </p>
          <p className="white lh-copy">
          We constantly develop our frameworks and apply them for building up successful and sustainable startups. 
          </p>
        </div>
      </div>
    </div>
        <Wrapper style={{ paddingTop: '5rem', paddingBottom: '1rem' }}>
          <Title className="mb4-l mb5">What we offer</Title>
        </Wrapper>
        <div className="startupscontainer">
        <article className="shadow maxwstartups hover mw5 center br4 pa3 pa4-ns mv3 b--black-10 flex flex-column ">
        <a href="mailto:acceleration@ssuf.ch" className="flex flex-column">
          <div className="tc">
            <h3 className="f4 pt3" style={{ color: 'rgb(0, 71, 107)' }}>
              Acceleration
            </h3>
            <hr className="mw3 bb bw1 b--black-10" />
          </div>
          <div>
          <p className="lh-copy measure center f6 black-70 tc" style={{ color: 'rgb(0, 71, 107)' }}>
            Based on more than 4 years of experience we have designed a completely new customised accelerator program
            which will prepare you and your team to live up to your potential.
          </p>
          </div>
          <div className="mv3 center">
          <span className="buttonfactory mid-gray ttu b">Apply now</span>
          </div>
          </a>
        </article>
        <article className="shadow maxwstartups hover mw5 center br4 pa3 pa4-ns mv3 b--black-10 flex flex-column ">
        <a className="flex flex-column" href="mailto:meetus@ssuf.ch">
          <div className="tc">
            <h3 className="f4 pt3" style={{ color: 'rgb(0, 71, 107)' }}>
              Support Meeting
            </h3>
            <hr className="mw3 bb bw1 b--black-10" />
          </div>
          <p className="lh-copy measure center f6 black-70 tc mb5-ns" style={{ color: 'rgb(0, 71, 107)' }}>
            30 minutes meeting where you can pitch us your idea, tell us about your challenges and ask us for feedback.
          </p>
          <div className="mv3 center">
          <span className="buttonfactory mid-gray ttu b">Get in touch</span>
          </div>
          </a>
        </article>
        <article className="shadow maxwstartups hover mw5 center br4 pa3 pa4-ns mv3 b--black-10 flex flex-column ">
        <Link className="flex flex-column" to="/pitch-training">
          <div className="tc">
            <h3 className="f4 pt3" style={{ color: 'rgb(0, 71, 107)' }}>
              Pitch Training
            </h3>
            <hr className="mw3 bb bw1 b--black-10" />
          </div>
          <p className="lh-copy measure center f6 black-70 tc " style={{ color: 'rgb(0, 71, 107)' }}>
            We help you to improve your pitch that allows you to understand which areas are important and should be in
            the spotlight to move your company forward.
          </p>
          <div className="mv3 center">
          <span className="buttonfactory mid-gray ttu b">Start now</span>
          </div>
          </Link>
        </article>
      </div>
      <Wrapper style={{ paddingTop: '5rem', paddingBottom: '1rem' }}>
          
        </Wrapper>
      <div className="flex flex-column flex-row-ns mv4 background">
      <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
      <Img fluid={corporates.childImageSharp.fluid} className="w-100" />
      </div>
      <div className="w-100 w-60-ns flex items-center measure center">
        <div style={{padding: "0 3rem", color: 'rgb(0, 71, 107)'}}>
          <h2 style={{fontFamily: "Roboto", textTransform: "uppercase", color: 'rgb(0, 71, 107)'}}>Corporates</h2>
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
        <article className="shadow maxwcorporates hover items-center center br4 pa3 pa4-ns mv3 b--black-10 flex flex-column ">
        <Link className="flex flex-column" to="/corporate-innovation-service">
          <div className="tc">
            <h3 className="f4 pt3" style={{ color: 'rgb(0, 71, 107)' }}>
              Intra Innovation
            </h3>
            <hr className="mw3 bb bw1 b--black-10" />
          </div>
          <div>
          <p className="lh-copy measure center f6 black-70 mb4-l tc" style={{ color: 'rgb(0, 71, 107)' }}>
            We offer customised innovation and digital transformation consulting services.
          </p>
          </div>
          <div className="mt4-l mv3 tc">
          <span className="buttonfactory mid-gray ttu b">Just do it</span>
          </div>
          </Link>
        </article>
        <article className="shadow maxwcorporates hover items-center center br4 pa3 pa4-ns mv3 b--black-10 flex flex-column ">
        <Link className="flex flex-column" to="/corporate-acceleration" target="_blank">
          <div className="tc">
            <h3 className="f4 pt3" style={{ color: 'rgb(0, 71, 107)' }}>
              Corporate Acceleration
            </h3>
            <hr className="mw3 bb bw1 b--black-10" />
          </div>
          <div>
          <p className="lh-copy measure center f6 black-70 tc" style={{ color: 'rgb(0, 71, 107)' }}>
            Adjusting our accelerator program to the structure of the corporate, we build up their existing startup
            projects with or without taking equity.
          </p>
          </div>
          <div className="mv3 tc">
          <span className="buttonfactory mid-gray ttu b">Build Startups</span>
          </div>
          </Link>
        </article>
        </div>
        <div className="row">
        <article className="shadow maxwcorporates hover items-center center br4 pa3 pa4-ns mv3  b--black-10 flex flex-column">
        <Link className="flex flex-column" to="/company-building" target="_blank">
          <div className="tc">
            <h3 className="f4 pt3" style={{ color: 'rgb(0, 71, 107)' }}>
              Company Builder
            </h3>
            <hr className="mw3 bb bw1 b--black-10" />
          </div>
          <div className="mt4-l mb4-l">
          <p className="lh-copy measure center f6 black-70 tc" style={{ color: 'rgb(0, 71, 107)' }}>
            Building up a completely new business model or startup from scratch - outside the existing corporate
            structures.
          </p>
          </div>
          <div className="mv3 tc">
          <span className="buttonfactory mid-gray ttu b">Learn more</span>
          </div>
          </Link>
        </article>
        <article className="shadow maxwcorporates hover items-center center br4 pa3 pa4-ns mv3  b--black-10 flex flex-column ">
        <a className="flex flex-column" href="https://ccvs.ch/" target="_blank">
          <div className="tc">
            <h3 className="f4 pt3" style={{ color: 'rgb(0, 71, 107)', lineHeight: "25px" }}>
              Center for Corporate Venturing
            </h3>
            <hr className="mw3 bb bw1 b--black-10" />
          </div>
          <div>
          <p className="lh-copy measure center f6 black-70 tc" style={{ color: 'rgb(0, 71, 107)' }}>
          The Center for Corporate Venturing connects innovation leaders – its members have access to educational events, networking opportunities and a place to exchange ideas.
          </p>
          </div>
          <div className="mv3 tc">
          <span className="buttonfactory mid-gray ttu b">More Information</span>
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
        <Link to="/blog">
          <button className="button-blue">
            News
          </button>
        </Link>
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
          traceSVG: { background: "lightgrey", color: "#00486c" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
  }
  startups: file(relativePath: { eq: "images/startups.jpg" }) {
    childImageSharp {
      fluid(
        maxHeight: 1500
        traceSVG: { background: "lightgrey", color: "#00486c" }
      ) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  corporates: file(relativePath: { eq: "images/corporates.jpg" }) {
    childImageSharp {
      fluid(
        maxHeight: 1500
        traceSVG: { background: "#fff", color: "lightgrey" }
      ) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  }
`;


