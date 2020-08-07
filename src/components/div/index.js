import styled from "styled-components"

export const Div = styled.div`
  background: ${props => props.bgColor || "#fff"};
`

export const HeroWrapper = styled.div`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100%;
`

export const HeroImage = styled.div`
  width: 50%;
  svg {
    max-width: 100%;
  }
`

export const HeroText = styled.div`
  width: 50%;
  text-align: left;
`

export const CardDiv = styled.div`
  background: #f7fafd;
  padding: 15px;
  border-radius: 2px;
  width: 75%;
  display: flex;
  margin: 15px 0;

  img {
    height: 200px;
  }
`
export const FlexDiv = styled.div`
  background: ${props => props.bgColor || "#fff"};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
