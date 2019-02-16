import React from 'react';
import styled from 'react-emotion';

import Vertical1 from '../../static/ssuf/vertical-1.svg';
import Vertical2 from '../../static/ssuf/vertical-2.svg';
import Vertical3 from '../../static/ssuf/vertical-3.svg';
import Vertical4 from '../../static/ssuf/vertical-4.svg';

import Academic1 from '../../static/ssuf/academic-1-1.svg';
import Academic2 from '../../static/ssuf/academic-1-2.svg';
import Academic3 from '../../static/ssuf/academic-1-3.svg';
import Academic4 from '../../static/ssuf/academic-1-4.svg';

import Academic5 from '../../static/ssuf/academic-2-1.svg';
import Academic6 from '../../static/ssuf/academic-2-2.svg';
import Academic7 from '../../static/ssuf/academic-2-3.svg';
import Academic8 from '../../static/ssuf/academic-2-4.svg';

const Row = styled.div`
display: flex;
`
const Svg = styled.img`
    padding: 1em;
    max-width: 25%;
`
const Svg2 = styled.img`
    padding: 2em;
    max-width: 25%;
`
const Headline = styled.h3`
font-family: roboto;
font-weight: bold;
`
const Paragraph = styled.p`
line-height: 30px;
`
const Background = styled.div`
background-color: #FAFAFA;
padding: 2em;
`


const Partner = () => (
    <>
    <div className="tc mv6">
          <Headline>Academic Partners</Headline>
          <Paragraph>Together with Swiss academic institutions, we support entrepreneurial teaching to leverage prime-potential students and ideas to outside of the classroom.
          </Paragraph>
          <Background>
            <Row>
                <Svg src={Academic1} alt="" />
                <Svg src={Academic2} alt="" />
                <Svg src={Academic3} alt="" />
                <Svg src={Academic4} alt="" />
            </Row>
            <Row>
                <Svg src={Academic5} alt="" />
                <Svg src={Academic6} alt="" style={{padding: "3em"}}/>
                <Svg src={Academic7} alt="" />
                <Svg src={Academic8} alt="" style={{padding: "3em"}}/>
            </Row>
          </Background>
        </div>
        <div className="tc mv6">
          <Headline>Vertical Partners</Headline>
          <Paragraph>Vertical partners are forward-thinking companies looking to have access to top Swiss Startups and aiming to drive their industry innovation forward. Together we accelerate selected startups and collaborate on many other innovative projects
          </Paragraph>
          <Background>
            <div className="row">
                <Svg2 src={Vertical1} alt="" />
                <Svg2 src={Vertical2} alt="" />
                <Svg2 src={Vertical3} alt="" />
                <Svg2 src={Vertical4} alt="" />
            </div>
          </Background>
        </div>
    </>
)

export default Partner