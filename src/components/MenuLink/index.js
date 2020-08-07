import React from "react"

import { MenuAnchor } from "../Anchor"

const MenuLink = ({ className, href, children }) => {
  return (
    <MenuAnchor className={className} href={href}>
      {children}
    </MenuAnchor>
  )
}

export default MenuLink
