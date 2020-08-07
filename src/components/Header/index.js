import React, { Component } from "react"

import Image from "../Image"
import Nav from "../Nav"
import MenuLink from "../MenuLink"
import Container from "../Container"

export class Header extends Component {
  render() {
    return (
      <Nav>
        <Container>
          <div
            style={{ maxWidth: `50px`, position: `absolute`, width: `50px` }}
          >
            <Image />
          </div>
          <MenuLink href="#yeet" class="nav-link">
            My Work
          </MenuLink>
          <MenuLink href="#yeet2" className="nav-link">
            Contact Me
          </MenuLink>
        </Container>
      </Nav>
    )
  }
}

export default Header
