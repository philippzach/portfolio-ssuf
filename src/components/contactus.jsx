import React from 'react';
import styled from 'react-emotion';

const Background = styled.div`
background-color: #EBEBEB;
width: 100%;
text-align: center;
`
const Top = styled.h3`
padding-top: 3em;
font-family: roboto;
color: #00486C;
`
const Bottom = styled.h3`
margin: 0;
padding-bottom: 3em;
font-family: roboto;
color: #0C7EC3;
`
const Span = styled.a`
font-family: roboto;
text-decoration: underline;
color: #0C7EC3;
font-weight: 600;
`

const ContactCTA = () => (
    <Background>
        <Top>How can we help?</Top>
        <Bottom><Span href="/">Contact us</Span> any time!</Bottom>
    </Background>
)

export default ContactCTA;