import React from 'react';
import styled from 'react-emotion';
import { Layout, Wrapper, Navbar, Title } from 'components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import '../styles/pages/about.css';
import "react-tabs/style/react-tabs.css";
import FounderSlider from '../components/pictureslider/aboutgroupslider';
import AdvisorSlider from '../components/pictureslider/aboutadvisorslider';
import Seo from '../components/SEO/index';
import Partners from '../components/Partners';


import Rico from '../../static/advisors/baldegger_rico_portrait.jpg';
import Robert from '../../static/advisors/bider_robert_portrait.jpg';
import Biver from '../../static/advisors/biver_jeanclaude_portrait.jpg';
import Claudia from '../../static/advisors/coninx_claudia_portrait.jpg';
import Beat from '../../static/advisors/curti_beat_portrait.jpg';
import David from '../../static/advisors/david_allemann_portrait.jpg';
import Friedli from '../../static/advisors/friedli_portrait.jpg';
import Andreas from '../../static/advisors/gall_andreas_portrait.jpg';
import Dietmar from '../../static/advisors/grichnik_dietmar_portrait.jpg';
import Daniel from '../../static/advisors/gutenberg_daniel_portrait.jpg';
import MichaelHartweg from '../../static/advisors/hartweg_michael_portrait.jpg';
import Patrick from '../../static/advisors/patrick_aebischer_portrait.jpg';
import Sauter from '../../static/advisors/sauter_claudia_portrait.jpg';
import Stan from '../../static/advisors/wawrinka_stan_portrait.jpg';
import Urs from '../../static/advisors/wietlisbach_urs_portrait.jpg';

const Test = styled.div`
    position: relative;
    overflow: hidden;
    vertical-align: middle;
    max-height: 450px;
`
const Profile = {
  height: "9em",
  width: "9em"
}


const AboutUs = ({ data }) => (
  <Layout>
  <Seo title="Swiss Startup Factory - About us" desc="The team of the Swiss Startup Factory consists smart experts with a diverse set of experiences and passion for the startup ecosystem." />
      <Navbar />
      <Test> 
          <Img fluid={data.about.childImageSharp.fluid} className="w-100" />
      </Test>
    <Wrapper style={{ paddingTop: '2rem' }}>
      <Title className="mt4">Team</Title>
      <div className="containertitleabout mb6">
        <h2 className="lh-title">Our Team</h2>
        <p style={{lineHeight: "35px"}} className="mv4">
        The team of the Swiss Startup Factory consists smart experts with a diverse set of experiences and backgrounds. As unique as we are individually, we share a mutual passion for startup ecosstem and doing excellent work for our clients and partners. Get to know our team below. 
        </p>
      </div>
      </Wrapper>
      <FounderSlider />
      <div className="fixerclass"></div>
      <Wrapper>
      <Title className="mt6">Swiss Startup Factory</Title>
      </Wrapper>
      
        
        <div className="tabpanel">
        <div className="paddingtabs">
          <div className="tabrow">
            <article className="center pa3 pa4-ns">
              <div className="tc">
                <Img fluid={data.about1.childImageSharp.fluid} className="br-100 dib " style={Profile} title="" alt="" />
                <h3 className="f5 mb2">Mike Baur</h3>
                <h4 className="f6 fw4 gray mt0">Co-Founder</h4>
              </div>
            </article>
            <article className="center pa3 pa4-ns">
              <div className="tc">
                <Img fluid={data.about2.childImageSharp.fluid} className="br-100 dib " style={Profile} title="" alt="" />
                <h3 className="f5 mb2">Oliver Walzer</h3>
                <h4 className="f6 fw4 gray mt0">Co-Founder</h4>
              </div>
            </article>
            <article className="center pa3 pa4-ns">
            <div className="tc">
                <Img fluid={data.about3.childImageSharp.fluid} className="br-100 dib " style={Profile} title="" alt="" />
                <h3 className="f5 mb2">Max Meister</h3>
                <h4 className="f6 fw4 gray mt0">Co-Founder</h4>
              </div>
            </article>
            <article className="center pa3 pa4-ns">
              <div className="tc">
                <Img fluid={data.about4.childImageSharp.fluid} className="br-100 dib " style={Profile} title="" alt="" />
                <h3 className="f5 mb2">Chris Bargholz</h3>
                <h4 className="f6 fw4 gray mt0">COO & Head of Acceleration</h4>
              </div>
            </article>
            </div>
            <div className="tabrow">
            <article className="center pa3 pa4-ns">
              <div className="tc">
                <Img fluid={data.about5.childImageSharp.fluid} className="br-100 dib " style={Profile} title="" alt="" />
                <h3 className="f5 mb2">Virginia Beljean</h3>
                <h4 className="f6 fw4 gray mt0">Head of <br/>Communications & Marketing</h4>
              </div>
            </article>
            <article className="center pa3 pa4-ns">
            <div className="tc">
                <Img fluid={data.about6.childImageSharp.fluid} className="br-100 dib " style={Profile} title="" alt="" />
                <h3 className="f5 mb2">Keith Gunura</h3>
                <h4 className="f6 fw4 gray mt0">Startup Coach</h4>
              </div>
            </article>
            <article className="center pa3 pa4-ns">
            <div className="tc">
                <Img fluid={data.about7.childImageSharp.fluid} className="br-100 dib " style={Profile} title="" alt="" />
                <h3 className="f5 mb2">Cindy Spelt</h3>
                <h4 className="f6 fw4 gray mt0">Head of Platform</h4>
              </div>
            </article>
           {/*  <article className="center pa3 pa4-ns">
              <div className="tc">
                <Img fluid={data.about8.childImageSharp.fluid} className="br-100 dib " style={Profile} title="" alt="" />
                <h3 className="f5 mb2">Paolo Piffaretti</h3>
                <h4 className="f6 fw4 gray mt0">Startup Scout France</h4>
              </div>
            </article>
            </div>
            <div className="tabrow">
            <article className="center pa3 pa4-ns">
              <div className="tc">
                <Img fluid={data.about9.childImageSharp.fluid} className="br-100 dib " style={Profile} title="" alt="" />
                <h3 className="f5 mb2">Keith </h3>
                <h4 className="f6 fw4 gray mt0">Startup Coach</h4>
              </div>
            </article> */}
            </div>
            </div>
        </div>
      <Wrapper style={{ paddingTop: "5em", paddingBottom: "3em"}}>
        <Title>Mentors</Title>
        <div className="containertitleabout mv6">
        <h2 className="lh-title">Our Forward Thinkers</h2>
        <p className="lh-copy">
        Our mentor team consists experts from all fields with diverse backgrounds. Get to know them: 
        </p>
      </div>
        </Wrapper>
        <AdvisorSlider />
        <div className="panel" style={{ backgroundColor: "#f7f7f7" }}>
        <div className="paddingtabs">
          <div className="tabrow">
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <img src={Rico} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Rico J. Baldegger</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <img src={Robert} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Robert Bider</h3>
                        
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                    <div className="tc">
                        <img src={Biver} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Jean Claude Biver</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <img src={Claudia} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Claudia Coninx</h3>
                      </div>
                    </article>
            </div>
            <div className="tabrow">
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <img src={Beat} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Beat Curti</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                    <div className="tc">
                        <img src={David} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">David Allemann</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                    <div className="tc">
                        <img src={Friedli} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Peter Friedli</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <img src={Andreas} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Andreas Gall</h3>
                      </div>
                    </article>
                    </div>
            <div className="tabrow">
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <img src={Dietmar} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Dietmar Grichnik</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                    <div className="tc">
                        <img src={Daniel} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Daniel Gutenberg</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                    <div className="tc">
                        <img src={MichaelHartweg} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Michael Hartweg</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <img src={Patrick} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Patrick Aebischer</h3>
                      </div>
                    </article>
                  </div>
                  <div className="tabrow">
                  <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <img src={Sauter} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Claudia Sauter</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <img src={Stan} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Stan Wawrinka</h3>
                      </div>
                    </article>
                    <article className="center pa3 pa4-ns">
                      <div className="tc">
                        <img src={Urs} className="br-100 h4 w4 dib pa2" title="" alt="" />
                        <h3 className="f5 mb2">Urs Wietlisbach</h3>
                      </div>
                    </article>
                  </div>
            </div>
        </div>
        <Wrapper>
          <Partners />
        </Wrapper>
  </Layout>
);

export default AboutUs;

export const query = graphql`
  query {
    about: file(relativePath: { eq: "images/aboutus.jpg" }) {
        childImageSharp {
          fluid(
            maxWidth: 1500
            traceSVG: { background: "#fff", color: "lightgrey" }
          ) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
    }
    about1: file(relativePath: { eq: "images/mike_baur.jpg" }) {
      childImageSharp {
        fluid(
          maxWidth: 1500
          traceSVG: { background: "#fff", color: "lightgrey" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
  }
  about2: file(relativePath: { eq: "images/walzer_oliver.jpg" }) {
    childImageSharp {
      fluid(
        maxWidth: 1500
        traceSVG: { background: "#fff", color: "lightgrey" }
      ) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
}
about3: file(relativePath: { eq: "images/max_meister.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
about4: file(relativePath: { eq: "images/chris_bargholz.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
about5: file(relativePath: { eq: "images/ginie.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
about6: file(relativePath: { eq: "images/keith.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
about7: file(relativePath: { eq: "images/cindyspelt.jpg" }) {
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