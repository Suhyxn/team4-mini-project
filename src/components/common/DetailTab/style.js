import styled from 'styled-components'

export const MenuContainer = styled.div`
  display: flex;
  display: flex;
  justify-content: space-evenly;
`

export const Box = styled.div`
  width: calc((100vw - 4rem) / 3);
`

export const Label = styled.label`
  display: block;
  font-size: 1.4rem;
  font-weight: bold;
  color: #888888;
  padding: 1rem 0;
  text-align: center;
`

export const Input = styled.input`
  opacity: 0;
  &:checked + ${Label} {
    color: black;
    transition: 0.3s;
  }
`

export const SubTitle = styled.div`
  margin-top: 2rem;
  font-size: 1.4rem;
  margin-left: 2rem;
`

export const SubContent = styled.div`
  font-size: 1.2rem;
  line-height: 1.8rem;
`

export const Desc = styled.div``

export const GuideContiner = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`

export const Guide = styled.p`
  padding-left: 0.4rem;
  position: relative;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  padding-left: 2.3rem;
  font-size: 1.3rem;
  line-height: 1.6rem;
  color: #888;
  font-weight: 400;
  svg {
    margin-left: 1rem;
  }
`
export const ListBox = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  gap: 1.5rem;
  margin: 3rem;
`

export const List = styled.div`
  display: flex;
  gap: 3rem;
`

export const Text = styled.p`
  margin-top: 0.7rem;
  color: #444b55;
  font-size: 1.2rem;
  padding-right: 2rem;
  svg {
    margin-left: 2rem;
  }
`
