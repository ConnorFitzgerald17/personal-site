import React, { Component } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { CardDiv, FlexDiv } from "../div"
import P from "../P"

const Card = () => {
  const data = useStaticQuery(graphql`
    query {
      GamePressKit: file(relativePath: { eq: "GamePressKit.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <FlexDiv>
      <CardDiv>
        <Img fluid={data.GamePressKit.childImageSharp.fluid} />
        <P>Hello</P>
      </CardDiv>
      <CardDiv>
        <Img fluid={data.GamePressKit.childImageSharp.fluid} />
        <P>Hello</P>
      </CardDiv>
    </FlexDiv>
  )
}

export default Card
