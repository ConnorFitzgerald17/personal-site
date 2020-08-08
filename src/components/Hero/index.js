import React, { Component } from "react"
import styled from "styled-components"

import Blank from "../../images/hero.svg"
import Github from "../../images/github.svg"
import LinkedIn from "../../images/linkedin.svg"

import Container from "../Container"
import { HeroWrapper, HeroImage, HeroText } from "../div"
import H1 from "../H1"
import H2 from "../H2"
import P from "../P"
import Link from "../link"

const Social = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  flex-direction: row;
  padding: 5px 13px;

  svg {
    margin: 0 10px;
    max-width: 15px;
    max-height: 15px;
  }
`

const SocialLink = styled.a`
  text-decoration: none;
`

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

            <Social>
              <SocialLink
                href="https://www.linkedin.com/in/connor-fitz/"
                target="_blank"
              >
                <LinkedIn />
              </SocialLink>
              <SocialLink
                href="https://github.com/ConnorFitzgerald17"
                target="_blank"
              >
                <Github />
              </SocialLink>
            </Social>
            <P>
              Experienced Web Developer with a demonstrated history of working
              in the banking industry. Skilled in SQL, WordPress, Agile
              Methodologies and Software Development. Strong engineering
              professional graduated from Algonquin College of Applied Arts and
              Technology. Currently working at the{" "}
              <Link href="https://www.bankofcanada.ca">Bank of Canada</Link>.
            </P>
          </HeroText>
        </HeroWrapper>
      </Container>
    )
  }
}

export default Hero
