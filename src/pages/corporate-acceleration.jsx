import React from 'react';
import styled from 'react-emotion';
import { Layout, Wrapper, Navbar, Title } from 'components';
//import Background from '../../static/investmentportfolio.jpg';
import '../styles/pages/portfolio.css';
import Seo from '../components/SEO/index';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import Startup1 from '../../static/ssuf/corporate-acc-1.svg' /* //'../../static/growth-process.svg'; */
import Startup2 from '../../static/ssuf/corporate-acc-2.svg'/* //'../../static/growth-market.svg'; */
import Startup3 from '../../static/ssuf/corporate-acc-3.svg'/* //'../../static/growth-analysis.svg'; */

const Test = styled.div`
    position: relative;
    overflow: hidden;
    vertical-align: middle;
    max-height: 450px;
`

const InvestmentPortfolio = ({ data }) => (
  <Layout>
  <Seo title="SWISS STARTUP GROUP – Investment Portfolio" desc="Exclusive startup investment platform, which contains investor club, advisory board and corporate partners for everything about startup investments" />
      <Navbar />
      <Test> 
          <Img fluid={data.portfolio.childImageSharp.fluid} className="w-100" />
      </Test>
    <Wrapper style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
      <Title>Corporate Acceleration</Title>
      <div className="containertitle">
        <h2 className="lh-copy">For corporates, an accelerator is a valuable innovation and business-building tool. </h2>
        <p className="lh-copy">
        Our program is agile and fast paced with the goal of executing internal projects or external startups. No matter if your internal startups have not been performing as expected or you would like to kickstart a new idea. Through our experience, we can eliminate internal hurdles and can also efficiently build ideas in to sustainable companies. 
        </p>
        <p className="lh-copy">
        Our corporate accelerator program is flexible and can be adjusted to every internal corporate structure.
        </p>
      </div>
    </Wrapper>
    <div className="flex flex-column flex-row-ns mv4 background pb4" style={{backgroundColor: "#00486C"}}>
      <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
      <Img fluid={data.innovation1.childImageSharp.fluid} className="w-100" />
      </div>
      <div className="w-100 w-60-ns pl3-ns flex items-center measure center">
        <div className="pa4">
            <h3 className="white">We accept all of your internal early-stage startups in our accelerator program</h3>
          <p className="lh-copy white">
          Every startup and corporate is different and that is why we customise the accelerator program to your specific needs. 
          </p>
          <p className="lh-copy white">
          In 12 – 16 weeks, we accelerate the startups with the objective that it could get its first external financing round.  
          </p>
          <p className="lh-copy white">
          For that we have developed the Swiss Startup Factory acceleration framework, which we will use in numerous one-to-one sessions with our startup coaches.  
          </p>
          <p className="lh-copy white">
          Another benefit from collaborating with us are our connections to the entire Swiss startup ecosystem, our mentors and our own portfolio startups, which we always leverage to test new products and to find synergies. 
          </p>
        </div>
      </div>
    </div>
    <Wrapper>
        <h3 className="lh-copy tc">Our accelerator framework is split in 3 phases with 3 milestones:</h3>
    </Wrapper>
    <Wrapper>
    <article class="mobileview cf mb6 mt3">
            <div class="fl w-100 w-50-ns tl pa3-s pa3-m ph4-l">
            <h3>Phase 1 – Business Model</h3>
            <p className="lh-copy mt3 ">The goal is to develop a business model that works in theory, the focus is on creating a first solid investor pitch deck that can be presented at the milestone presentation. In addition, the functions of the product and the business case should be defined. In the first phase, the founder team will learn the mindset of an entrepreneur and understand their business/customer from the bottom up.</p>
                        <h4>Workshop Overview:</h4>
                        <ul>
                            <li>Problem & Solution & Market</li>
                            <li>Customers & Value Creation</li>
                            <li>Business Model & Sales & Metrics</li>
                            <li>Legal & Team & Roadmap</li>
                        </ul>
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
        <h3>Phase 2 – Product Development & Testing</h3>
         <p className="lh-copy mt3">The goals are to review the MVP and business model based on customer feedback. The functions for the MVP and the development plan are clear after the tests and the backlog is set up. The customer profiles for the purchase and usage process are also clear by the tests and can be effectively implemented by marketing. The product is ready for going live. The team understands the process of agile product development and the importance of customer feedback. </p>
                    <h4>Workshop Overview:</h4>
                        <ul>
                            <li>Product Development</li>
                            <li>Efficient product development </li>
                            <li>Beta test reviews, analytics & feedback loops are ready</li>
                        </ul>
                        <h4>Testing:</h4>
                        <ul>
                            <li>Test design & distribution</li>
                            <li>Analysis of the results and decision making</li>
                        </ul>
          </div>
        </article>
        <article class="mobileview cf mv6">
            <div class="fl w-100 w-50-ns tl pa3-s pa3-m ph4-l">
            <h3>Phase 3 – Go-to-market & roadmap</h3>
            <p className="lh-copy mt3 ">The first goal is to define a cost-effective marketing strategy for the early adopters with whom the first sales were made. This includes a clear positioning and a CI/CD that is aligned with the company's market positioning and values. </p>
            <p className="lh-copy"> The founding team understands the influence of storytelling and uses these elements in all facets of the company. The next goal is the satisfaction of the first customers with a low churn rate and a continuous improvement of the product.</p>            
            <p className="lh-copy">Finally, an efficient growth hacking and scaling strategy is worked out, which gives an overview of the next phase.</p>
                    <h4>Workshop Overview:</h4>
                        <ul>
                            <li>Go-to-market</li>
                            <li>Forming a Brand</li>
                            <li>Marketing Mix & Content</li>
                            <li>Growth Roadmap</li>
                            <li>Stickiness</li>
                            <li>OKR & Financials</li>
                        </ul>
              </div>
            <div class=" fl w-100 w-50-ns tc flex justify-center">
            <div className="backgroundgrowth">
                <img src={Startup3} alt="" title="" />
                </div>
            </div>
        </article>
    </Wrapper>
    <Wrapper>
        <Title>
            Benefits
        </Title>
    </Wrapper>
    <Wrapper>
        <Title>
            Testimonials
        </Title>
    </Wrapper>
    <div className="flex flex-column flex-row-ns mv4 background" style={{backgroundColor: "#00486C"}}>
      <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
      <Img fluid={data.innovation1.childImageSharp.fluid} className="w-100" />
      </div>
      <div className="w-100 w-60-ns pl3-ns flex items-center measure center">
        <div className="pa4">
            <h3 className="white">Philipp Wetzel</h3>
            <h5 className="white">Managing Director, AMAG Innovation & Venture LAB</h5>
          <p className="lh-copy white">
          “The cooperation with Swiss Start Up Factory is the ideal complement to AMAG’s own innovation process, which is accelerated as a result of this partnership. This gives AMAG a very good starting position for the search, selection and management of its own mobility initiatives on the one hand and the development and support of possible start-ups in the mobility sector on the other hand. ” 
          </p>
        </div>
      </div>
    </div>
    <Wrapper>
      <div className="containerinvestors">
        <h3 className="lh-copy center">
        Do you want to bring your internal startups to the next level?
        </h3>
        <button className="investorparagraph lh-copy">
        Learn More
        </button>
      </div>
      </Wrapper>
    

  </Layout>
);

export default InvestmentPortfolio;

export const query = graphql`
  query {
    portfolio: file(relativePath: { eq: "images/corporate-acceleration.png" }) {
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
  }`

