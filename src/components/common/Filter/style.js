import styled, { css } from 'styled-components'

const checked = css`
  ${(props) =>
    props.active &&
    css`
      background: white;
      color: black;
      transition: 0.3s;
    `}
`

export const Container = styled.div`
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f7f9;
  margin: 1rem;
  border-radius: 5rem;
`

export const Label = styled.label`
  background: #f6f7f9;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 3.5rem;
  border-radius: 5rem;
  text-align: center;
  line-height: 6rem;
  font-size: 2rem;
  font-weight: bold;
  color: #9ea2b0;

  :last-child {
    margin-right: 10px;
  }
  ${checked}
`

export const Input = styled.input`
  opacity: 0;
`
