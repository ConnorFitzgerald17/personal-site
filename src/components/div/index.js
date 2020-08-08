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

  @media only screen and (max-width: 668px) {
    flex-direction: column;
  }
`

export const HeroImage = styled.div`
  width: 50%;
  svg {
    max-width: 100%;
  }

  @media only screen and (max-width: 668px) {
    width: 100%;
    padding: 10px;
    svg {
      max-height: 350px;
    }
  }
`

export const HeroText = styled.div`
  text-align: left;

  @media only screen and (min-width: 668px) {
    width: 50%;
  }
`

export const CardDiv = styled.div`
  background: #f7fafd;
  padding: 20px;
  border-radius: 2px;
  display: flex;
  margin: 15px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 1200px) {
    width: 75%;
    flex-direction: row;
  }

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
