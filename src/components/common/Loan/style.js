import styled from 'styled-components'

export const Container = styled.div`
  cursor: pointer;
  border-radius: 1.2rem;
  background-color: #fafafb;
  display: flex;
  align-items: center;
  padding: 1.5rem;
  position: relative;
  font-size: small;
  margin: 1.5rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`

export const Box = styled.div`
  display: flex;
  gap: 1rem;
`

export const StyledImg = styled.img`
  flex-shrink: 1;
  width: 10%;
  height: 10%;
`

export const InfoBox = styled.div`
  flex-grow: 1;
  overflow: hidden;
  display: flex;
  flex-flow: column;
  gap: 0.7rem;
`

export const Title = styled.h3`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  font-weight: 700;
  font-size: 1.3rem;
  color: rgba(51, 58, 68);
  line-height: 1.6rem;
`
export const SubTitle = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  font-size: 1.4rem;
  color: rgba(51, 58, 68);
  line-height: 1.7rem;
`

export const Rate = styled.div`
  color: rgba(17, 17, 17);
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2.4rem;
  min-width: 8rem;
`

export const TagBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

export const Tag = styled.li`
  line-height: 1.4rem;
  padding: 4px 6px;
  margin: 0px 4px 4px 0px;
  border-radius: 4px;
  font-size: 1.2rem;
  color: ${({ index }) => (index == 0 ? '#DCF5EC' : '#E4EDF2')};
  background-color: ${({ index }) => (index == 0 ? '#7ADAB7' : '#868C9C')};
`
export const CardFavorite = styled.div`
  font-size: 2.5rem;
  flex-shrink: 0;
  width: 6.8rem;
  text-align: center;
`
