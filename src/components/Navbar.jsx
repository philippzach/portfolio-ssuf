import React from 'react';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import Logo from '../../static/ss_factory.svg';
import '../styles/navbar.css';
import '../styles/pages/buttonwhite.css';

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
textShadow: "0 2px 4px #000000",
}

const Navbar = () => (
  <Header>
    <Link to="/">
      <img src={Logo} alt="Swiss Startup Group Logo" title="Swiss Startup Group Logo" height="55px" />
    </Link>
    <Navigation>
      <ul className="nav__menu">
        <li className="nav__menu-item"><Link to="/startups" className="hovereffect" style={NavItem}>Startup</Link></li>
        <li className="nav__menu-item"><Link to="/corporates"  className="hovereffect" style={NavItem}>Corporates</Link></li>
        <li className="nav__menu-item"><Link to="/aboutus" className="hovereffect" style={NavItem}>About us</Link></li>
        {/* <li className="nav__menu-item" style={{paddingBottom: 0,}}><div className="button -dark" style={{boxShadow: "none", backgroundColor: "#e6e6ea", margin: "0"}}><Link to="/join-the-platform" style={{color: "black"}}>Join the Platform</Link></div></li> */}
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
            <li className="mv4"><div className="button -dark" style={{boxShadow: "none", backgroundColor: "#e6e6ea", margin: "0"}}><Link className="ttu" style={{ fontSize: "1.5em", lineHeight: "1.2em"}} to='/join-the-platform'>Join the Platform</Link></div></li>
        </ul>
        </label>
        </div>
    </Navigation>
    <div className="cta-navbar button-white"><Link to="/join-the-platform">Join the Platform</Link></div>
  </Header>
);

export default Navbar;
