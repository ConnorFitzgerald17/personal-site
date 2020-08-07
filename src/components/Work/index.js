import React, { Component } from "react"

import Container from "../Container"
import H2 from "../H2"
import H1 from "../H1"
import P from "../P"
import { Div } from "../div"
import Card from "../Card"

export class Work extends Component {
  render() {
    return (
      <Container>
        <Div>
          <H1 className="centered">My Work</H1>
          <P className="centered">
            These are some of the projects that I have worked on.
          </P>
          <Card />
        </Div>
      </Container>
    )
  }
}

export default Work
