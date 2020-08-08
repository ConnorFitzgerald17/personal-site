import React, { Component } from "react"
import styled from "styled-components"

import Container from "../Container"
import H1 from "../H1"

const FormElement = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
`
const EmailDiv = styled.div`
  width: 75%;
  padding: 15px;
  @media only screen and (min-width: 668px) {
    width: 50%;
  }
`

const MessageDiv = styled.div`
  padding: 15px;
  width: 75%;

  @media only screen and (min-width: 668px) {
    width: 50%;
  }
`

const Input = styled.input`
  width: 100%;
  padding: 15px;
  font-size: 1.6em;
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  resize: vertical;
  min-height: 50px;
  font-size: 1.6em;
`

const Label = styled.label``

const Button = styled.button`
  padding: 15px;
  outline: none;
  border: none;
  background: #8c52ff;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
  width: 25%;
`

const ButtonDiv = styled.button``

const Form = () => {
  return (
    <Container id="contact">
      <H1 className="centered">Contact Me</H1>
      <FormElement action="https://formspree.io/mjvalnaj" method="POST">
        <EmailDiv>
          <Input
            type="email"
            id="_replto"
            name="_replto"
            placeholder="Your email"
          ></Input>
        </EmailDiv>
        <MessageDiv>
          <TextArea
            id="message"
            name="message"
            placeholder="Send me a message!"
          ></TextArea>
        </MessageDiv>
        <Button type="submit">Submit</Button>
      </FormElement>
    </Container>
  )
}

export default Form
