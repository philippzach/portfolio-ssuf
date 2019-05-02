import React from 'react';
import '../styles/faq.css';
import styled from 'react-emotion';
import { Layout, Wrapper, NavbarInverted, Title } from 'components';
import Seo from '../components/SEO/index';

const Faq = () => (
    <Layout>
  <Seo title="SWISS STARTUP FACTORY – Startup Accelerator FAQ" desc="FAQ for our Startup Accelerator Program" />
      <NavbarInverted />
    <Wrapper style={{paddingTop: "10em"}}>
    <h2 className="tc">Frequently Asked Questions</h2>
    <div style={{paddingTop: "3em"}}>
        <h3>General</h3>
        <details>
          <summary >What is the SSUF?</summary>
          <div className="wrapper">
          <p>The Swiss Startup Factory is a seed-stage accelerator program based in Zurich. Since 2016, we have launched more than 30 companies. Starting this year, we select the top three startups from a huge pool of applicants to work with us. Our goal is to find remarkable companies with founders we like to work with and spend very intense weeks with. During the program, we work on everything from finding product-market fit, defining a target market to building a solid foundation for future growth. We are also instrumental in helping companies prepare for fundraising and of course for investor meetings.</p>
          </div>
        </details>
        <details>
          <summary >What is the goal of the program?</summary>
          <div className="wrapper">
          <p>After you have completed the SSUF accelerator by passing all milestones, you have built a solid foundation for scaling up your company. Among others, you will have worked on:</p>
          <ul><li>
                    <p>A compelling product-market fit</p>
                    </li>
                    <li>
                    <p>An HR and team role plan</p>
                    </li>
                    <li>
                    <p>A marketing strategy</p>
                    </li>
                    <li>
                    <p>A growth hacking game plan</p>
                    </li>
                    <li>
                    <p>A strong brand design</p>
                    </li>
                    <li>
                    <p>A sales plan to convert clients to paying customers</p>
                    </li>
                    <li>
                    <p>A Pitch Deck to approach investors</p>
                    </li>
                    <li>
                    <p>A solid legal structure</p>
                    </li>
                    <li>
                    <p>Doing elevator, stage and investor pitches</p>
                    </li>
                    <li>
                    <p>Your ability to answer the most common investor questions during a due diligence hearing</p>
                    </li>
                    <li>
                    <p>A six-months roadmap</p>
                    </li>
                </ul>
          </div>
        </details>
        <details>
          <summary >What happens at the SSUF accelerator?</summary>
            <div className="wrapper"><p>The 10 to 16 weeks are divided into three phases::</p>
                    <ul><li>
                        <p>Phase 1: Business Model Development</p>
                        </li>
                        <li>
                        <p>Phase 2: Market Traction</p>
                        </li>
                        <li>
                        <p>Phase 3: Growth Hacking Strategy</p>
                        </li>
                    </ul>
                    <p>You will work with the most relevant startup frameworks from our SSUF Company Building Playbook and validate your ideas in intense one-on-one sessions with our experienced team, excellent mentors and industry partners. The accelerator is focused on as many personal interactions with experienced personnel as possible. They will question your assumptions and give you valuable feedback based on their vast experience.</p>
        </div>
        </details>
    </div>
    <div class="" style={{marginTop: "3em"}}>
        <h3>During the program</h3>
        <details>
          <summary id="faq-smoking">How much equity does the SSUF take?</summary>
          <div className="wrapper">
          <p>We strongly believe in performance indicators. We challenge you in the program, so you should challenge us. Therefore, the amount of equity we receive depends on your assessment of our accelerator program.</p>
                <p>After each milestone you rate our performance. This will result in a combined rating on a scale from A to D after the program with the following meaning:</p>
                <ul><li>
                    <p>A: fantastic job = CHF 50’000 convertible</p>
                    </li>
                    <li>
                    <p>B: well done = CHF 40’000 convertible</p>
                    </li>
                    <li>
                    <p>C: OK, but not more = CHF 25’000 convertible</p>
                    </li>
                    <li>
                    <p>D: poor job = CHF 10’000 convertible</p>
                    </li>
                </ul><p>At the next financing round our convertible converts into equity with a cap of CHF 500’000. The exact mechanics are part in our term sheet.</p>
        </div>
        </details>
        <details>
          <summary id="faq-animals">Why does the SSUF want shares in my startup?</summary>
          <div className="wrapper"><p>Like you, we are entrepreneurs and our focus is on business execution. We believe that the value of input, networking, and mentoring offered by the program is of extraordinary value. Our accelerator program will provide you with an incredible basis to start out from, and greatly improve your chances for success and sustainability. Once we invest, we have skin in the game and are motivated to help you succeed by introducing you to people, assisting you with your strategy, finding investors, and generally helping you win all along your entrepreneurial journey.</p>
        </div>
        </details>
        <details>
          <summary id="faq-alcohol">Can I get kicked out the program? What are the milestones?</summary>
          <div className="wrapper"><p>During the program there are three milestones that are made to fit the customer, market traction and investment suitability. If the jury determines that you will not pass the milestone, your startup needs to leave the accelerator. In this case, you can keep the cash contribution that you have received so far and we will not take an equity stake in your company.</p>
        </div>
        </details>
        <details>
          <summary id="faq-change-driver">Who decides if the milestones are accomplished?</summary>
          <div className="wrapper"><p>A pre-selected jury, composed of industry specialists, entrepreneurs and founding partners of the SSUF, will conduct the milestone reviews. Defining the milestones will be a collaborative effort between the startup and the jury. The milestones are generally the same for everyone, but will be slightly adjusted to each startup’s specific situation and industry.</p>
        </div>
        </details>
        <details>
          <summary id="faq-food">How much do you invest?</summary>
          <div className="wrapper"><p>We have a standard deal – we invest CHF 15,000 in cash. In combination with the value of the program our package is worth more. You will receive the cash per passed milestone.</p>
                    <ul><li>
                        <p>Milestone 1: 5’000</p>
                        </li>
                        <li>
                        <p>Milestone 2: 5’000</p>
                        </li>
                        <li>
                        <p>Milestone 3: 5’000</p>
                        </li>
                    </ul>
        </div>
        </details>
        <details>
          <summary id="faq-accident">How should the cash contribution be invested?</summary>
          <div className="wrapper"><p>You are free to spend the cash to cover any business related costs..</p>
        </div>
        </details>
        <details>
          <summary id="faq-damage">Can we participate without moving to your coworking space in Zurich?</summary>
          <div className="wrapper"><p>You do not have to be present all the time, but you will need to be here for the numerous mandatory meetings. (e.g. milestone meetings and some coaching sessions). This benefits you because you can take advantage of various education sessions, as well as networking and coaching that will be provided.</p>
        </div>
        </details>
        <details>
          <summary id="faq-breakdown">Can I, or part of my team, participate part time?</summary>
          <div className="wrapper"><p>Basically, we want you and your team to be dedicated to your startup full-time. If you have any legacy projects that you are involved in, please be upfront about them and we will find the best solution possible.</p>
        </div>
        </details>
        <details>
          <summary id="faq-empty">What else does the Swiss Startup Factory provide?</summary>
          <div className="wrapper"><p>We provide working and meeting areas at WestHive, the best co-working space in Zurich. With regards to housing, we will support you in finding cheap lodging close to our co-working space. We just want you to focus on creating a great product while you are here and not having to worry about other stuff.</p>
        </div>
        </details>
    </div>
    <div class="" style={{marginTop: "3em"}}>
        <h3>Application</h3>
        <details>
          <summary id="faq-accident">What kind of companies do you fund?</summary>
          <div className="wrapper"><p>The SSUF accelerator is industry-agnostic and we accept startups from any industry. Typically, our startups are web-based or ICT companies, but we have successfully supported hardware projects as well.</p>
        </div>
        </details>
        <details>
          <summary id="faq-damage">Can I apply only with an idea?</summary>
          <div className="wrapper"><p>The general requirement to get accepted is that your company already has a proof of concept; however, there are always exceptions and if you have an outstanding team with a mind-blowing idea, you can try to convince our analyst team by completing the questionnaire form.</p>
        </div>
        </details>
        <details>
          <summary id="faq-breakdown">Is my company “too far along” to apply to the SSUF accelerator?</summary>
          <div className="wrapper"><p>
          Probably not! We supported companies even after some financing rounds with fully developed products were completed. Our expertise is in business development as well as in scaling. With our help, your startup will grow tremendously - in Switzerland and the EU. Furthermore, we help with introductions to potential partners and customers. Lastly, in terms of financing, we either connect you with VC funds and business angels or you have the chance to receive financing through different startup financing vehicles we have available ourselves. In both cases, we can help even with very large financing rounds.</p>
        </div>
        </details>
        <details>
          <summary id="faq-empty">How do you choose which companies to accept into the program and to fund?</summary>
          <div className="wrapper"><p>After you have completed the application form, our specialized startup analyst team screens your idea using our self-established startup rating tool. This tool analyzes the market, product, team and business model. To get accepted, your startup should include:</p>
                    <ul><li>
                        <p>An innovative and scalable business model based on an IP.</p>
                        </li>
                        <li>
                        <p>A well-defined vision proven by early traction that validates your core assumptions.</p>
                        </li>
                        <li>
                        <p>A complementary team with business &amp; technical skills.</p>
                        </li>
                    </ul>
        </div>
        </details>
        <details>
          <summary >What is the application process at the Swiss Startup Factory</summary>
          <div className="wrapper"><p>You apply by completing the application form. Your answers are forwarded to our analyst team, which will screen your idea. If they see potential in your startup, they contact you for a Skype call to ask you a few questions that came up during the analysis process. Then, we will schedule another call with you in which we will answer all your questions. Afterwards, you get invited for a pitch in front of the SSUF team, including the founders of the company. The pitch is followed by an intense Q&A session. If you pass all steps, you’ll get offered a place in the program with a standard term sheet.</p>
        </div>
        </details>
        <details>
          <summary >Is my age relevant in your selection process?</summary>
          <div className="wrapper"><p>Not at all.</p>
        </div>
        </details>
        <details>
          <summary >Do I need to send in a business plan?</summary>
          <div className="wrapper"><p>No. Just complete the online application, send your CVs and maybe a pitch deck.</p>
        </div>
        </details>
        <details>
          <summary >Do you give feedback on the submission results?</summary>
          <div className="wrapper"><p>Due to the large amount of applications we receive, we can’t provide comprehensive responses to all submissions.</p>
        </div>
        </details>
        <details>
          <summary >I’m a single founder. Can I get accepted to the Swiss Startup Factory Accelerator or do you only look for teams?</summary>
          <div className="wrapper"><p>We look for great, balanced teams that have a full range of skills. We strongly advise you to look for co-founders who complement your skill set. You need to be able to convince your future clients and investors to either buy your product or invest in your company and therefore your first test is to convince other people to believe in your project. As a result, you should NOT apply as a single founder.</p>
        </div>
        </details>
        <details>
          <summary >Should I be worried about the protection of my intellectual property?</summary>
          <div className="wrapper"><p>We are not stealing or copying concepts, and we treat all submissions as confidential. Each year, we see hundreds of applications with comparable ideas. You do not have to disclose all detailed information about your product if you’re not comfortable doing so. Therefore, we generally do not sign NDAs.</p>
        </div>
        </details>
        <details>
          <summary >Can I apply if our founders are not from Switzerland? Can you support us with Visa/immigration issues?</summary>
          <div className="wrapper"><p>Yes, you can apply and we will support you with the relevant paperwork; however, you do have to be legally in Switzerland during the program.</p>
        </div>
        </details>
        <details>
          <summary >Do you fund companies that are competitive with each other?</summary>
          <div className="wrapper"><p>We do our best to avoid accepting competitive companies into the same batch. However, it is possible that there was a competitive company in a previous batch. In this case, we work thoroughly to ensure there is no exchange of sensitive data.</p>
        </div>
        </details>
        <details>
          <summary >Do we need to sign a contract for the acceleration program?</summary>
          <div className="wrapper"><p>Yes, startups and the Swiss Startup Factory will sign a term sheet. A term sheet is a bullet-point document outlining the material terms and conditions of a business agreement. The term sheet will guide legal counsel in the preparation of a final agreement (bylaws and shareholder agreements).</p>
        </div>
        </details>
    </div>
    <div class="" style={{marginTop: "3em"}}>
        <h3>After the program</h3>
        <details>
          <summary >Do I have to stay in Zurich, after the accelerator?</summary>
          <div className="wrapper"><p>No. It’s your company and you can choose where to live. Many companies decide to move to Zurich because of the contacts they made during the program.</p>
        </div>
        </details>
        <details>
          <summary id="faq-insurance">How can we get funded after the SSUF accelerator ends?</summary>
          <div className="wrapper"><p>We provide you with funding during the program so you can pay your basic expenses but you may well need more funding to really make it. Once a year we organise a Demo Day where we invite the most renowned angel investors and venture capitalists in Switzerland. In the past, about 250 people attended the event. In various pitch training sessions and investor workshops, we coach you to be as successful as possible, and do everything we can to help you get follow-on funding. However, we cannot guarantee that you will find an investor after the program. Within our Swiss Startup Factory ecosystem, we have seed and growth financing vehicles. If your startup develops impressively after the accelerator, your chances of receiving funding from our investment companies increases remarkably.</p>
        </div>
        </details>
        <details>
          <summary id="faq-penalty">What control am I giving up by granting shares to the SSUF?</summary>
          <div className="wrapper"><p>We don’t want any special or controlling interests in your company. We won’t ask for a board seat or for any uncommon investor rights. You will still be in control. But of course, if you offer us a board seat, we will either fill it ourselves or will help you to connect with the right people. In order to support you as well as possible, there will be a reporting meeting every quarter in which we will talk about your progress, difficulties and the outlook for the next quarter.</p>
        </div>
        </details>
        <details>
          <summary id="faq-empty-phone">What services does the SSUF offer me after the program?</summary>
          <div className="wrapper">
          <p>You will get lots of graduate services, which are split into counsel and 360-degree services.</p>
                <p>Counsel services include:</p>
                <ul><li>
                    <p>You can schedule strategic meetings with the SSUF founders</p>
                    </li>
                    <li>
                    <p>You will become a part of the SSUF family, which means that you have access to all SSUF events and get support not just from us, but also from the other portfolio startups</p>
                    </li>
                    <li>
                    <p>You can use our social media channels to post jobs or publish news about new products and general news about your firm</p>
                    </li>
                    <li>
                    <p>You can contact our great mentor network</p>
                    </li>
                    <li>
                    <p>We help you, as much as possible to connect you to investors, clients and board members. Here, we cannot guarantee success, but we will try our best to increase your sales and find investors</p>
                    </li>
                </ul>
                <p>You will get a reduced price or even free service from one of our service companies as a part of our 360-degree service:</p>
                <ul><li>
                    <p>Legal questions</p>
                    </li>
                    <li>
                    <p>HR related topics, such as staffing</p>
                    </li>
                    <li>
                    <p>Technical consulting</p>
                    </li>
                    <li>
                    <p>Marketing planning</p>
                    </li>
                    <li>
                    <p>Photo/video content production</p>
                    </li>
                    <li>
                    <p>Accounting service</p>
                    </li>
                    <li>
                    <p>Market analysis and startup valuation</p>
                    </li>
                </ul>
        </div>
        </details>
    </div>
    </Wrapper>
    </Layout>
);

export default Faq;