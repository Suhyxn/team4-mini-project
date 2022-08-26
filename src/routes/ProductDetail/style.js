import styled from 'styled-components'

export const Container = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f7f9;
  border-radius: 50px;
`

export const Label = styled.label`
  background: #f6f7f9;
  display: block;
  width: 80px;
  height: 40px;
  background-color: blue;
  text-align: center;
  font-size: 10px;
  font-weight: bold;
  color: #111111;
  :last-child {
  }
`

export const Input = styled.input`
  opacity: 0;
  &:checked + ${Label} {
    background: red;
    color: black;
    transition: 0.3s;
  }
`
