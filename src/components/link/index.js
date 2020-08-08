import React from "react"

import { Anchor } from "../Anchor"

const Link = ({ className, href, children }) => {
  return (
    <Anchor className={className} href={href} target="__blank">
      {children}
    </Anchor>
  )
}

export default Link
