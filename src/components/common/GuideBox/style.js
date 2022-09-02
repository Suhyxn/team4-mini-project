import styled from 'styled-components'

export const ContainerBox = styled.div`
  border: 1px solid #e5e5e5;
  border-radius: 6px;
  overflow: hidden;
`
export const Container = styled.div`
  border-bottom: 1px solid #e5e5e5;
`
export const Button = styled.button`
  display: block;
  padding: 19px 20px;
  background: #f8f8f8;
  box-sizing: border-box;
  border: 0;
  appearance: none;
  cursor: pointer;
  letter-spacing: inherit;
  width: 100%;
  strong {
    padding-right: 2rem;
    display: block;
    font-size: 1.5rem;
    line-height: 22px;
    color: #111;
    box-sizing: border-box;
  }
`

export const SubBox = styled.div`
  display: block;
  height: auto;
`
export const Accordion = styled.div`
  padding: 25px 20px;
  line-height: 18px;
  font-weight: 300;
  box-sizing: border-box;
  font-size: 1.3rem;
`

export const ListItem = styled.li`
  position: relative;
  padding-left: 8px;
  font-size: 1.5rem;
  padding-bottom: 1rem;

  li {
    color: #666;
    font-size: 14px;
  }
`
