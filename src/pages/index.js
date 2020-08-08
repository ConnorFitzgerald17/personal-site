import React from "react"
import { Helmet } from "react-helmet"
import GlobalStyle from "../global-styles"

import Header from "../components/Header"
import Hero from "../components/Hero"
import Work from "../components/Work"
import Form from "../components/Form"

const IndexPage = () => (
  <div>
    <Helmet>
      <title>Connor Fitzgerald</title>
    </Helmet>
    <GlobalStyle />
    <Header />
    <Hero />
    <Work />
    <Form />
  </div>
)

export default IndexPage
