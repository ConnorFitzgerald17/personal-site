import styled from "styled-components"

const Container = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  background: ${props => props.bgColor || "#fff"};
`

export default Container
