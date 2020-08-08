import React from "react"

import { CardDiv, FlexDiv, Div } from "../div"
import Link from "../link"
import Img from "../Img"
import P from "../P"
import H2 from "../H2"

const Card = ({ title, description, file, link }) => {
  return (
    <FlexDiv>
      <CardDiv>
        <Link href={link} className="card__size">
          <Img file={file} title={title} />
        </Link>
        <Div bgColor="#f7fafd">
          <Link href={link}>
            <H2>{title}</H2>
          </Link>
          <P>{description}</P>
        </Div>
      </CardDiv>
    </FlexDiv>
  )
}

export default Card
