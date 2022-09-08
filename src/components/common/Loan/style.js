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
  margin-bottom: 2rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`

export const Box = styled.div`
  display: flex;
`
export const imgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  flex-shrink: 0;
`
export const StyledImg = styled.img`
  width: 90%;
  height: 90%;
`
export const InfoBox = styled.div`
  margin: 1rem;
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
  color: ${({ index }) =>
    index == 0 ? 'rgba(100,120,237, 0.9)' : 'rgba(134,140,156, 0.9)'};
  background-color: ${({ index }) =>
    index == 0 ? 'rgba(100,120,237, 0.1)' : 'rgba(228,237,242, 0.9)'};
`
export const CardFavorite = styled.div`
  font-size: 2.5rem;
  flex-shrink: 0;
  text-align: center;
  padding: 1rem;
`
