import React, { Component } from "react"

import { Div } from "../Div"
import Image from "../Image"
import Nav from "../Nav"
import MenuLink from "../MenuLink"
import Container from "../Container"

export class Header extends Component {
  render() {
    return (
      <Nav>
        <Container>
          <Div
            style={{
              maxWidth: `50px`,
              position: `absolute`,
              width: `50px`,
            }}
          >
            <Image />
          </Div>

          <MenuLink href="#contact" className="nav-link">
            Contact Me
          </MenuLink>
          <MenuLink href="#work" class="nav-link">
            My Work
          </MenuLink>
        </Container>
      </Nav>
    )
  }
}

export default Header
