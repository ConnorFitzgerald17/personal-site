import React, { Component } from "react"

import gamepresskit from "./GamePressKit.png"
import viola from "./viola.png"

import Container from "../Container"
import H1 from "../H1"
import P from "../P"
import { Div, FlexDiv } from "../div"
import Card from "../Card"

export class Work extends Component {
  render() {
    return (
      <Container id="work">
        <Div>
          <H1 className="centered">My Work</H1>
          <P className="centered">
            These are some of the projects that I have worked on.
          </P>
          <FlexDiv>
            <Card
              link="https://gamepresskit.com/"
              file={gamepresskit}
              title="GamePressKit"
              description="GamePressKit is a tool used for video game developer stuidos that
            offers an easy way to create their own press kit without any prior
            knowledge of code."
            />
            <Card
              link="https://www.bankofcanada.ca/banknotes/vertical10/"
              file={viola}
              title="Canada's Vertical 10 Bank Note - Interact Web Page"
              description="As part of a small team of developers at the Bank of Canada, I helped design and develop a product that showcases everything the note has to offer in a creative and user friendly way."
            />
          </FlexDiv>
        </Div>
      </Container>
    )
  }
}

export default Work
