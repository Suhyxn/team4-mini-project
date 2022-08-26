import styled from 'styled-components'

export const Container = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f7f9;
  margin: 20px;
  border-radius: 50px;
`

export const Label = styled.label`
  background: #f6f7f9;
  display: block;
  width: 50%;
  height: 80px;
  border-radius: 50px;
  text-align: center;
  line-height: 80px;
  font-size: 42px;
  font-weight: bold;
  color: #9ea2b0;

  :last-child {
    margin-right: 10px;
  }
`

export const Input = styled.input`
  opacity: 0;
  &:checked + ${Label} {
    background: white;
    color: black;
    transition: 0.3s;
  }
`
