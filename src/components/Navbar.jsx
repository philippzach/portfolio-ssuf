import React from 'react';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import Logo from '../../static/ss_factory.svg';
import '../styles/navbar.css';
import '../styles/pages/buttonwhite.css';
import '../styles/hovermenu.css';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2em 1.5em;
  width: 100%;
  z-index: 10;
  position: absolute;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    padding: 3em 1em 4em 1em;
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    padding: 3em 1em 4em 1em;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding: 3em 1em 4em 1em;
  }
  @media (max-width: 600px) {
    background-image: linear-gradient(rgba(255,255,255,.8),rgba(255,255,255,0.2) 58%, transparent);
  }
`;
const Navigation = styled.nav`
  margin: auto 0;
`;
const NavItem = {
fontFamily: "roboto",
fontSize: "1em",
fontWeight: "bold",
textTransform: "uppercase",
textShadow: "0 2px 4px rgba(1,1,1,0.5)",
}

const Navbar = () => (
  <Header>
    <Link to="/">
      <img src={Logo} alt="Swiss Startup Group Logo" title="Swiss Startup Group Logo" height="55px" />
    </Link>
    <Navigation>
    <ul className="nav__menu">
        <li className="nav__menu-item">
          
          <div class="sl-nav">
            <ul>
              <li>
              <Link to="/startups" className="hovereffect" style={NavItem}>Startups</Link>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                    <div class="triangle" style={{right: "5%"}}/>
                        <ul style={{right: "-73px"}}>
                        <Link className="hoversubmenu" to="/startup-accelerator"><li>Accelerator </li></Link>
                        <Link className="hoversubmenu" to="/pitch-training/"><li>Pitch Training</li></Link>
                        <Link className="hoversubmenu" to="/startup-services/"><li>Startup Services</li></Link>
                        <Link className="hoversubmenu" to="/investment/"><li style={{ paddingBottom: "5px"}}>Investment</li></Link>
                        </ul>
                </li>
              </ul>
          </div>
          
          </li>
        <li className="nav__menu-item">
        <div class="sl-nav">
            <ul>
              <li>
              <Link to="/corporates"  className="hovereffect" style={NavItem}>Corporates </Link>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                    <div class="triangle" style={{right: "15%"}}/>
                        <ul style={{right: "-82px"}}>
                        <Link className="hoversubmenu" to="/corporate-acceleration"><li>Accelerator</li></Link> 
                        <Link className="hoversubmenu" to="/company-building/"><li>Company Building</li></Link>
                        <Link className="hoversubmenu" to="/corporate-innovation-service/"><li>Innovation Consulting</li></Link>
                        <a className="hoversubmenu" href="https://ccvs.ch"><li>Venture Capital</li></a>
                        <Link className="hoversubmenu" to="/innovation-for-sme-and-kmu/"><li style={{ paddingBottom: "5px"}}>Innovation for SME</li></Link>
                        </ul>
                </li>
              </ul>
          </div>
       
        </li>
        <li className="nav__menu-item">
        <div class="sl-nav">
            <ul>
              <li>
              <Link to="/aboutus" className="hovereffect" style={NavItem}>About us</Link>
                    <i class="fa fa-angle-down" aria-hidden="true"></i>
                    <div class="triangle" style={{right: "5%"}}/>
                        <ul style={{right: "-34px"}}>
                        <a className="hoversubmenu" href="https://swissstartupjobs.com"><li>Jobs</li></a> 
                        <Link className="hoversubmenu" to="/blog/"><li style={{ paddingBottom: "5px"}}>News</li></Link>
                        </ul>
                </li>
              </ul>
          </div>
        
        </li>
      </ul>
      <div>
      <label className="mobilemenu">
        <input type='checkbox'/>
        <span className='menu'>
            <span className='hamburger'></span>
        </span>
        <ul className="list pl0 ma0" style={{paddingTop: "22em"}}>
            <li className="mv4"><Link className="ttu" style={{ fontSize: "1.5em", lineHeight: "1.2em"}} to='/startups'>Startup</Link></li>
              <ul>
                <li>Startup Accelerator</li>
                <li>Pitch Training</li>
                <li>Services for Startups</li>
                <li>Looking for Investment?</li>
              </ul>
            <li className="mv4"><Link className="ttu" style={{ fontSize: "1.5em", lineHeight: "1.2em"}} to='/corporates'>Corporates</Link></li>
              <ul>
                
              </ul>
            <li className="mv4"><Link className="ttu" style={{ fontSize: "1.5em", lineHeight: "1.2em"}} to='/aboutus'>About us</Link></li>
            <li className="mv4"><div className="button-white" style={{boxShadow: "none", backgroundColor: "#e6e6ea", margin: "0"}}><Link className="ttu" style={{ fontSize: "1.5em", lineHeight: "1.2em"}} to='/join-the-platform'>Join the Platform</Link></div></li>
        </ul>
        </label>
        </div>
    </Navigation>
    <div className="cta-navbar button-white"><Link to="/join-the-platform">Join the Platform</Link></div>
  </Header>
);

export default Navbar;
