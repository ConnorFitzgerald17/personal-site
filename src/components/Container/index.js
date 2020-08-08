import styled from "styled-components"

const Container = styled.div`
  background: ${props => props.bgColor || "#fff"};

  @media only screen and (min-width: 668px) {
    max-width: 1280px;
    margin: 0 auto;
  }
`

export default Container
