import styled from 'styled-components'

export const CardContainer = styled.div`
  border-radius: 12px;
  background-color: #fafafb;
  height: 119px;
  width: 378px;
  display: flex;
  align-items: center;
  padding: 16px;
  position: relative;
  font-size: small;
`

export const CardCheckBox = styled.div`
  margin-right: 30px;
`
export const CardImage = styled.div`
  height: 68px;
  width: 43px;
  margin-right: 18px;
  background-image: url(${({ imageName }) => {
    return `../../../../public/assets/images/${imageName}Card.png`
  }});

  background-size: cover;
`

export const CardName = styled.div`
  background-color: transparent;
  width: 142px;
  margin-right: 10px;
`
export const CardBank = styled.div`
  background-color: transparent;
  width: 52px;
`
export const CardDescription = styled.div`
  background-color: transparent;
  width: 98px;
  position: absolute;
  left: 132px;
  top: 70px;
  color: #979cac;
`
export const CardFavorite = styled.div`
  position: absolute;
  font-size: 25px;
  top: 0.5rem;
  right: 0.5rem;
`
