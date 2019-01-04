/* eslint no-unused-expressions: 0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tachyons from 'tachyons/css/tachyons.min.css';
import { injectGlobal } from 'emotion';
import { ThemeProvider } from 'emotion-theming';
import 'typeface-roboto';
import 'typeface-poppins';
import { Footer, SEO } from 'components';
import { theme, reset } from 'styles';

injectGlobal`
  ${reset}
  h1, h2, h3, h4, h5, h6 {
    color: ${theme.colors.black};
  }
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    color: ${theme.colors.greyDarker};
    background-color: ${theme.colors.bg};
    overflow-x: hidden;
  }
  ::selection {
    color: ${theme.colors.bg};
    background-color: ${theme.colors.primary};
  }
  a {
    color: white;
    transition: all 0.4s ease-in-out;
    text-decoration: none;
    font-weight: 400;
    text-transform: initial;
    &:hover, &:focus {
    }
  }
  @media (max-width: ${theme.breakpoints.m}) {
    html {
      font-size: 16px !important;
    }
  }
  @media (max-width: ${theme.breakpoints.s}) {
    h1 {
      font-size: 2.2rem !important;
    }
    h2 {
      font-size: 1.777rem !important;
    }
    h3 {
      font-size: 1.333rem !important;
    }
    h4 {
      font-size: 1rem !important;
    }
    h5 {
      font-size: 0.75rem !important;
    }
    h6 {
      font-size: 0.563rem !important;
    }
  }
`;

const PureLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      {/* <SEO /> */}
      {children}
      <Footer />
    </>
  </ThemeProvider>
);

class Layout extends Component {
  render() {
    return (
      <PureLayout {...this.props} />
    );
  }
}

export default Layout;

PureLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired
};
