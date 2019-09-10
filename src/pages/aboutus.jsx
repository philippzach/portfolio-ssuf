import React from 'react';
import styled from 'react-emotion';
import { Layout, Wrapper, Navbar, Title } from 'components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import '../styles/pages/about.css';
import FounderSlider from '../components/pictureslider/aboutgroupslider';
import AdvisorSlider from '../components/pictureslider/aboutadvisorslider';
import Seo from '../components/SEO/index';
import Partners from '../components/Partners';
import FlipCards from '../components/Values/index';
import Mentors from '../components/mentors';


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
  <Seo title="SWISS STARTUP FACTORY - About us" desc="The team of the Swiss Startup Factory consists smart experts with a diverse set of experiences and passion for the startup ecosystem." />
      <Navbar />
      <Test> 
          <Img fluid={data.about.childImageSharp.fluid} className="w-100" />
      </Test>
    <Wrapper style={{ paddingTop: '2rem' }}>
      <Title className="mt4">Team</Title>
      <div className="containertitleabout mb6">
        <h2 className="lh-title">Our Team</h2>
        <p style={{lineHeight: "35px"}} className="mv4">
        We are a team of startup enthusiasts, product & technology people and top management consultants. We help our clients execute digital growth – from the first board discussion to the execution of M&A, corporate ventures or building a digital business unit as well as a startup. 
        </p>
        <FlipCards />
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
                <Img fluid={data.about9.childImageSharp.fluid} className="br-100 dib " style={Profile} title="" alt="" />
                <h3 className="f5 mb2">Désirée Heutschi</h3>
                <h4 className="f6 fw4 gray mt0">CEO</h4>
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
            <Img fluid={data.about10.childImageSharp.fluid} className="br-100 dib " style={Profile} title="" alt="" />
                <h3 className="f5 mb2">Larissa Truffer</h3>
                <h4 className="f6 fw4 gray mt0">Marketing & Communication Manager</h4>
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
                <Img fluid={data.about11.childImageSharp.fluid} className="br-100 dib " style={Profile} title="" alt="" />
                <h3 className="f5 mb2">Tamara Savchuk</h3>
                <h4 className="f6 fw4 gray mt0">Head of Company Buildung</h4>
              </div>
            </article>
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
        <Mentors data={data}/>
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
about9: file(relativePath: { eq: "images/desiree.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
about10: file(relativePath: { eq: "images/larissa.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
about11: file(relativePath: { eq: "images/tamaranew.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor1: file(relativePath: { eq: "images/mentors-sm/mentor-sm-1.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor2: file(relativePath: { eq: "images/mentors-sm/mentor-sm-2.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor3: file(relativePath: { eq: "images/mentors-sm/mentor-sm-3.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor4: file(relativePath: { eq: "images/mentors-sm/mentor-sm-4.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor5: file(relativePath: { eq: "images/mentors-sm/mentor-sm-5.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor6: file(relativePath: { eq: "images/mentors-sm/mentor-sm-6.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor7: file(relativePath: { eq: "images/mentors-sm/mentor-sm-7.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor8: file(relativePath: { eq: "images/mentors-sm/mentor-sm-8.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor9: file(relativePath: { eq: "images/mentors-sm/mentor-sm-9.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor10: file(relativePath: { eq: "images/mentors-sm/mentor-sm-10.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor11: file(relativePath: { eq: "images/mentors-sm/mentor-sm-11.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor12: file(relativePath: { eq: "images/mentors-sm/mentor-sm-12.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor13: file(relativePath: { eq: "images/mentors-sm/mentor-sm-13.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor14: file(relativePath: { eq: "images/mentors-sm/mentor-sm-14.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor15: file(relativePath: { eq: "images/mentors-sm/mentor-sm-15.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor16: file(relativePath: { eq: "images/mentors-sm/mentor-sm-16.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor18: file(relativePath: { eq: "images/mentors-sm/mentor-sm-18.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor19: file(relativePath: { eq: "images/mentors-sm/mentor-sm-19.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor20: file(relativePath: { eq: "images/mentors-sm/mentor-sm-20.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor21: file(relativePath: { eq: "images/mentors-sm/mentor-sm-21.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor24: file(relativePath: { eq: "images/mentors-sm/mentor-sm-24.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor25: file(relativePath: { eq: "images/mentors-sm/mentor-sm-25.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor27: file(relativePath: { eq: "images/mentors-sm/mentor-sm-27.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor28: file(relativePath: { eq: "images/mentors-sm/mentor-sm-28.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor29: file(relativePath: { eq: "images/mentors-sm/mentor-sm-29.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor30: file(relativePath: { eq: "images/mentors-sm/mentor-sm-30.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor32: file(relativePath: { eq: "images/mentors-sm/mentor-sm-32.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor33: file(relativePath: { eq: "images/mentors-sm/mentor-sm-33.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor34: file(relativePath: { eq: "images/mentors-sm/mentor-sm-34.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor35: file(relativePath: { eq: "images/mentors-sm/mentor-sm-35.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor36: file(relativePath: { eq: "images/mentors-sm/mentor-sm-36.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor37: file(relativePath: { eq: "images/mentors-sm/mentor-sm-37.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor38: file(relativePath: { eq: "images/mentors-sm/mentor-sm-38.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor39: file(relativePath: { eq: "images/mentors-sm/mentor-sm-39.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor40: file(relativePath: { eq: "images/mentors-sm/mentor-sm-40.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor41: file(relativePath: { eq: "images/mentors-sm/mentor-sm-41.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor42: file(relativePath: { eq: "images/mentors-sm/mentor-sm-42.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor43: file(relativePath: { eq: "images/mentors-sm/mentor-sm-43.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor44: file(relativePath: { eq: "images/mentors-sm/mentor-sm-44.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor45: file(relativePath: { eq: "images/mentors-sm/mentor-sm-45.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor46: file(relativePath: { eq: "images/mentors-sm/mentor-sm-46.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor47: file(relativePath: { eq: "images/mentors-sm/mentor-sm-47.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor48: file(relativePath: { eq: "images/mentors-sm/mentor-sm-48.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor50: file(relativePath: { eq: "images/mentors-sm/mentor-sm-50.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor51: file(relativePath: { eq: "images/mentors-sm/mentor-sm-51.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor52: file(relativePath: { eq: "images/mentors-sm/mentor-sm-52.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor53: file(relativePath: { eq: "images/mentors-sm/mentor-sm-53.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor54: file(relativePath: { eq: "images/mentors-sm/mentor-sm-54.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor55: file(relativePath: { eq: "images/mentors-sm/mentor-sm-55.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor56: file(relativePath: { eq: "images/mentors-sm/mentor-sm-56.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor57: file(relativePath: { eq: "images/mentors-sm/mentor-sm-57.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor59: file(relativePath: { eq: "images/mentors-sm/mentor-sm-59.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor60: file(relativePath: { eq: "images/mentors-sm/mentor-sm-60.jpg" }) {
  childImageSharp {
    fluid(
      maxWidth: 1500
      traceSVG: { background: "#fff", color: "lightgrey" }
    ) {
      ...GatsbyImageSharpFluid_tracedSVG
    }
  }
}
mentor61: file(relativePath: { eq: "images/mentors-sm/mentor-sm-61.jpg" }) {
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