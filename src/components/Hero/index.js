import React, { Component } from "react"

import Blank from "../../images/hero.svg"

import Container from "../Container"
import { HeroWrapper, HeroImage, HeroText } from "../div"
import H1 from "../H1"
import H2 from "../H2"
import P from "../P"
import Link from "../link"

export class Hero extends Component {
  render() {
    return (
      <Container bgColor="#f9fafb">
        <HeroWrapper className="hero__wrapper">
          <HeroImage className="hero__image">
            <Blank />
          </HeroImage>
          <HeroText className="hero__text">
            <H1>Connor Fitzgerald</H1>
            <H2>Full-stack web developer</H2>
            <P>
              Experienced Web Developer with a demonstrated history of working
              in the banking industry. Skilled in SQL, WordPress, Agile
              Methodologies, Microsoft Office, and Software Development. Strong
              engineering professional graduated from Algonquin College of
              Applied Arts and Technology. Currently working at the{" "}
              <Link href="https://www.bankofcanada.ca">Bank of Canada</Link>.
            </P>
          </HeroText>
        </HeroWrapper>
      </Container>
    )
  }
}

export default Hero
