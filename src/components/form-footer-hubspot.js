import React, { Component } from 'react';
import HubspotForm from 'react-hubspot-form';
import '../styles/mailchimp.css';
import styled from 'react-emotion';

const Background = styled.div`
  background-color: #ebebeb;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Top = styled.h3`
  padding-top: 3em;
  font-size: 2.2em;
  padding-left: 15px;
  font-family: roboto;
  color: #00486c;
`;
const Bottom = styled.h3`
  margin: 0;
  padding-bottom: 1em;
  padding-left: 15px;
  font-family: roboto;
  color: #0c7ec3;
`;
const Span = styled.a`
  font-family: roboto;
  text-decoration: underline;
  color: #0c7ec3;
  font-weight: 600;
`;
const Form = styled.div`
  display: flex;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const Container = styled.div`
  max-width: 45em;
  padding-bottom: 5em;
`;
const Button = styled.button`
  @media (max-width: 800px) {
    flex: 0 0 50px;
  }
`;

const CustomForm = ({ status, message, onValidated }) => {
  let email; let name;
  const submit = () =>
    email &&
    name &&
    email.value.indexOf('@') > -1 &&
    onValidated({
      EMAIL: email.value,
      NAME: name.value,
    });

  return (
    <div>
      {status === 'sending' && <div style={{ color: 'blue', paddingRight: '15px' }}>sending...</div>}
      {status === 'error' && (
        <div style={{ color: 'red', paddingRight: '15px' }} dangerouslySetInnerHTML={{ __html: message }} />
      )}
      {status === 'success' && (
        <div style={{ color: 'green', paddingRight: '15px' }} dangerouslySetInnerHTML={{ __html: message }} />
      )}
      <Form>
        <input
          style={{
            fontSize: '1.5em',
            padding: '10px',
            margin: '10px',
            backgroundColor: 'rgba(26, 27, 31, .15)',
            borderStyle: 'none',
          }}
          ref={node => (name = node)}
          type="text"
          placeholder="Name"
        />
        <br />
        <input
          style={{
            fontSize: '1.5em',
            padding: '10px',
            margin: '10px',
            backgroundColor: 'rgba(26, 27, 31, .15)',
            borderStyle: 'none',
          }}
          ref={node => (email = node)}
          type="email"
          placeholder="Email Address"
        />
        <br />
        <Button id="cta-subscribe-submit" onClick={submit} className="button-blue" style={{ padding: '0' }}>
          Subscribe Now
        </Button>
      </Form>
    </div>
  );
};

class Demo extends Component {
  render() {
    return (
      <Background>
        <Container>
          <Top>Stay up to date!</Top>
          <Bottom>
            <Span href="/">Subscribe</Span> to our exclusive list.
          </Bottom>
          <div>
            <HubspotForm
              portalId="6396166"
              formId="dbefc438-68b1-4e4b-9101-b629c92494c6"
              onSubmit={() => console.log('Submit!')}
              onReady={form => console.log('Form ready!')}
              loading={<div>Loading...</div>}
            />
          </div>
        </Container>
      </Background>
    );
  }
}

export default Demo;
