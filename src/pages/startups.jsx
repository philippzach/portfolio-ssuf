import React from 'react';
import styled from 'react-emotion';
import { Layout, Wrapper, Navbar, Title } from 'components';
import '../styles/pages/growth.css';

import Startup1 from '../../static/ssuf/startups-1.svg' /* //'../../static/growth-process.svg'; */
import Startup2 from '../../static/ssuf/startups-2.svg'/* //'../../static/growth-market.svg'; */
import Startup3 from '../../static/ssuf/startups-3.svg'/* //'../../static/growth-analysis.svg'; */
import Startup4 from '../../static/ssuf/startups-4.svg'/* //'../../static/growth-account.svg'; */

import Seo from '../components/SEO/index';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Test = styled.div`
    position: relative;
    overflow: hidden;
    vertical-align: middle;
    max-height: 550px;
`

const Startup = ({ data }) => (
  <Layout>
  <Seo title="SWISS STARTUP GROUP – Growth Services" desc="Dedicated growth services for corporate clients, startups and investors to grow faster. Accounting, Marketing, Finance, Communication and more." />
      <Navbar />
      <Test> 
          <Img fluid={data.growth.childImageSharp.fluid} className="w-100" />
      </Test>
    <Wrapper style={{ paddingTop: '2rem', paddingBottom: '1rem' }}>
      <Title>Startups</Title>
      <div className="containertitle">
        <h2 className="lh-copy">Being close to startups is the core for the Swiss Startup Factory</h2>
        <p className="lh-copy">
        We constantly develop our frameworks and apply them for building up successful startups.  
        </p>
      </div>
      </Wrapper>
      <Wrapper>
      
        <article class="mobileview cf mb6 mt3">
            <div class="fl w-100 w-50-ns tl pa3-s pa3-m ph4-l">
            <h3>Switzerland Accelerator</h3>
            <p className="lh-copy mt3 ">Our intense customised accelerator program will prepare you and your team to achieve the maximum potential of your startup.</p>
                        <Link to="/">
                        <div className="button -dark">Learn More</div>
                        </Link>
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
        <h3>Pitch Training</h3>
         <p className="lh-copy mt3">We do more than just help you improve your pitch. Our objective is to help you do this in a way that allows you to understand which areas of your business are important, and should be put in the spotlight to help you move your company forward as fast as possible.</p>
            <Link to="/pitch-training">
            <div className="button -dark">Learn More</div>
            </Link>
          </div>
        </article>
        <article class="mobileview cf mv6">
            <div class="fl w-100 w-50-ns tl pa3-s pa3-m ph4-l">
            <h3>Startup Services</h3>
            <p className="lh-copy mt3 ">Founding a startup is difficult and you have enough work with winning clients, closing investors and improving your product. Check our 360 degree startup services, so you can focus on the topics that matter the most.</p>
                        <Link to="/startup-services">
                        <div className="button -dark">Learn More</div>
                        </Link>
              </div>
            <div class=" fl w-100 w-50-ns tc flex justify-center">
            <div className="backgroundgrowth">
                <img src={Startup3} alt="" title="" />
                </div>
            </div>
        </article>
        <article class="cf mv6">
            <div class=" fl w-100 w-50-ns tc flex justify-center">
            <div className="backgroundgrowth">
                <img src={Startup4} alt="" title="" />
                </div>
            </div>
            <div class="fl tl w-100 w-50-ns pa4-s pa3-m pl4-l">
            <h3>Investment</h3>
            <p className="lh-copy mt3">No matter if you need money for your first prototype, for further product development or international expansion, we can support you. We look for scalable startups with a disruptive idea – just upload your pitch deck so our business analysts will analyse the potential of your company.</p>
            <Link to="/investment" target="_blank">
            <div className="button -dark">Learn More</div>
            </Link>
              </div>
        </article>
        
        
        </Wrapper>
  </Layout>
);

export default Startup;

export const query = graphql`
  query {
    growth: file(relativePath: { eq: "images/startup.jpg" }) {
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

