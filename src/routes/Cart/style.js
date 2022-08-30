import styled from 'styled-components'

export const CartsTitleContainer = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  margin-left: 2rem;
`

export const CardContainer = styled.div`
  // width: 40rem;
`

export const CardCheckInput = styled.input`
  opacity: 0;
`

export const CardLabel = styled.label`
  border: 1px solid red;
  border-radius: 0.4rem;
  background-color: #fff;
  color: #bababc;
  border: 1px solid #e4edf2;
`

export const CardCheckBox = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  cursor: pointer;
`

export const Container = styled.div`
  ${CardCheckInput}:checked + ${CardLabel} {
    background-color: rgba(19, 189, 126);
    color: #63e6be;
  }
`
export const CartsTitle = styled.h2`
  font-size: 2rem;
`

export const TitleSpan = styled.span`
  font-size: 2rem;
  color: ${(props) => props.theme.palette.baseColor};
`
