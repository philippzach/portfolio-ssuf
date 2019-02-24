import React, { Component } from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import "../styles/mailchimp.css";
import styled from 'react-emotion';

const Background = styled.div`
    background-color: #EBEBEB;
    width: 100%;
    display: flex;
    justify-content: center;
`
const Top = styled.h3`
padding-top: 3em;
font-size: 2.2em;
padding-left: 15px;
font-family: roboto;
color: #00486C;
`
const Bottom = styled.h3`
margin: 0;
padding-bottom: 1em;
padding-left: 15px;
font-family: roboto;
color: #0C7EC3;
`
const Span = styled.a`
font-family: roboto;
text-decoration: underline;
color: #0C7EC3;
font-weight: 600;
`
const Form = styled.div`
display: flex;
@media (max-width: 800px) {
    flex-direction: column;
   
}
`
const Container = styled.div`
max-width: 45em;
padding-bottom: 5em;
`
const Button = styled.button`
@media (max-width: 800px) {
    flex: 0 0 50px;
}
`

const CustomForm = ({ status, message, onValidated }) => {
    let email, name;
    const submit = () =>
      email &&
      name &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
        NAME: name.value
      });
  
    return (
      <div
      >
        {status === "sending" && <div style={{ color: "blue", paddingRight: "15px" }}>sending...</div>}
        {status === "error" && (
          <div
            style={{ color: "red", paddingRight: "15px" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            style={{ color: "green", paddingRight: "15px" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        <Form>
        <input
          style={{ fontSize: "1.5em", padding: "10px", margin: "10px", backgroundColor: "rgba(26, 27, 31, .15)", borderStyle: "none" }}
          ref={node => (name = node)}
          type="text"
          placeholder="Name"
        />
        <br />
        <input
          style={{ fontSize: "1.5em", padding: "10px", margin: "10px", backgroundColor: "rgba(26, 27, 31, .15)", borderStyle: "none" }}
          ref={node => (email = node)}
          type="email"
          placeholder="Email Address"
        />
        <br />
        <Button id="cta-subscribe-submit" onClick={submit} className="button-blue" style={{padding: "0"}}>
                Subscribe Now
            </Button>
        </Form>
      </div>
    );
  };
  
  class Demo extends Component {
    render() {
      const url =
        "https://caroo.us15.list-manage.com/subscribe/post?u=3847f516d00256f75dab00f44&id=3482ea6f95";
      return (
          <Background>
          <Container>
            <Top>Stay up to date!</Top>
            <Bottom><Span href="/">Subscribe</Span> to our exclusive list.</Bottom>
        <div>
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <CustomForm
                status={status}
                message={message}
                onValidated={formData => subscribe(formData)}
              />
            )}
          />
        </div>
        </Container>
        </Background>
      );
    }
  }

  export default Demo;