import React from 'react';
import styled from 'react-emotion';
import { Layout, Wrapper, Navbar, Title } from 'components';
import '../styles/pages/growth.css';
import Product from '../../static/ssuf/corporates-1.svg' /* //'../../static/growth-process.svg'; */
import Marketing from '../../static/ssuf/corporates-2.svg'/* //'../../static/growth-market.svg'; */
import Analysis from '../../static/ssuf/corporates-3.svg'/* //'../../static/growth-analysis.svg'; */
import Acount from '../../static/ssuf/corporates-4.svg'/* //'../../static/growth-account.svg'; */
import Seo from '../components/SEO/index';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Test = styled.div`
    position: relative;
    overflow: hidden;
    vertical-align: middle;
    max-height: 450px;
`

const GrowthServices = ({ data }) => (
  <Layout>
  <Seo title="SWISS STARTUP GROUP – Growth Services" desc="Dedicated growth services for corporate clients, startups and investors to grow faster. Accounting, Marketing, Finance, Communication and more." />
      <Navbar />
      <Test> 
          <Img fluid={data.growth.childImageSharp.fluid} className="w-100" />
      </Test>
    <Wrapper style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>
      <Title>Corporate</Title>
      <div className="containertitle">
        <h2 className="lh-title">For corporates we are the interface to innovation </h2>
        <p className="">
        Our goal is to understand and evaluate our corporate client’s current strategic innovation roadmap and provide a best advice on it’s execution with our specialized skills. 
        </p>
      </div>
      </Wrapper>
      <Wrapper>
      <article className="cf mb6 mt3">
        <div className="mobilepadding fl w-100 w-50-ns tc flex justify-center">
            <div className="backgroundgrowth">
              <img src={Product} alt="" title="" />
            </div>
         </div>
        <div className="fl tl w-100 w-50-ns pa3-s pa3-m pl4-l">
        <h3>Corporate Acceleration</h3>
         <p className=" mt3">Your company wants to be close to latest industry trends, launch new products or to establish a funnel for corporate venture capital investments. Your internal startups have the chance to participate in our 10-week accelerator program.</p>
            <Link to="/corporate-acceleration">
            <div className="button-blue">Your Chance</div>
            </Link>
          </div>
        </article>
        <article class="mobileview cf mv6">
            <div class="fl w-100 w-50-ns tl pa3-s pa3-m ph4-l">
            <h3>Company Building</h3>
            <p className=" mt3 ">Your company wants to identify and build new business models that will disrupt your industry. We identify and execute new business models in your industry with our in-house team specialised in business development.</p>
                        <Link to="/company-building">
                        <div className="button-blue">Let's Rock</div>
                        </Link>
              </div>
            <div class="mobilepadding fl w-100 w-50-ns tc flex justify-center">
            <div className="backgroundgrowth">
                <img src={Analysis} alt="" title="" />
                </div>
            </div>
        </article>
        <article class="cf mv6">
            <div class="mobilepadding fl w-100 w-50-ns tc flex justify-center">
            <div className="backgroundgrowth">
                <img src={Marketing} alt="" title="" />
                </div>
            </div>
            <div class="fl tl w-100 w-50-ns pa4-s pa3-m pl4-l">
            <h3>Innovation Consulting</h3>
            <p className=" mt3">Our consulting unit helps you in identifying your transformation potential and support you in generating a transformation roadmap and realising it with different services.</p>
            <Link to="/corporate-innovation-service" >
            <div className="button-blue">Learn More</div>
            </Link>
              </div>
        </article>
        <article class="mobileview cf mv6">
            <div class="fl w-100 w-50-ns tl pa3-s pa3-m ph4-l">
            <h3>Venture Capital</h3>
            <p className=" mt3">Your company wants to identify and build new business models that will disrupt your industry. We identify and execute new business models in your industry with our in-house team specialised in business development.</p>
                  <a href="https://ccvs.ch">
                <div className="button-blue">Become Part</div>
                </a>
              </div>
            <div class="mobilepadding fl w-100 w-50-ns tc flex justify-center">
            <div className="backgroundgrowth">
                <img src={Acount} alt="" title="" />
                </div>
            </div>
        </article>
        <article class="cf mv6">
            <div class="mobilepadding fl w-100 w-50-ns tc flex justify-center">
            <div className="backgroundgrowth">
                <img src={Marketing} alt="" title="" />
                </div>
            </div>
            <div class="fl tl w-100 w-50-ns pa4-s pa3-m pl4-l">
            <h3>SME's</h3>
            <p className=" mt3">All collaborations start with a meeting where we will find out more about your organisation and your needs. Based on this, we will suggest a program that fits your needs.</p>
            <Link to="/innovation-for-sme-and-kmu" >
            <div className="button-blue">Get in touch</div>
            </Link>
              </div>
        </article>
        
        </Wrapper>
  </Layout>
);

export default GrowthServices;

export const query = graphql`
  query {
    growth: file(relativePath: { eq: "images/growth.jpg" }) {
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

