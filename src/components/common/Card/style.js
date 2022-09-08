import styled from 'styled-components'

export const CardContainer = styled.div`
  border-radius: 1.2rem;
  background-color: #fafafb;
  height: 11.9rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  position: relative;
  font-size: small;
  margin-bottom: 2rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`
export const CardBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6.8rem;
  flex-shrink: 0;
`

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  transform: rotate(90deg);
`
export const CardInfo = styled.div`
  display: flex;
  flex-flow: column;
  gap: 1rem;
  flex-grow: 1;
`
export const CardTitle = styled.div`
  display: flex;
  gap: 0.6rem;
  flex-flow: column;
`
export const CardName = styled.div`
  background-color: transparent;
`
export const CardBank = styled.div`
  background-color: transparent;
  white-space: nowrap;
  font-size: 1.2rem;
`
export const CardDescription = styled.div`
  background-color: transparent;
  color: #979cac;
`

export const CardFavorite = styled.div`
  font-size: 2.5rem;
  flex-shrink: 0;
  text-align: center;
  display: block;
  padding: 1rem;
  cursor: pointer;
`
