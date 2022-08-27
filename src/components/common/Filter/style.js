import styled from 'styled-components'

export const Container = styled.div`
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f7f9;
  margin: 2rem;
  border-radius: 5rem;
`

export const Label = styled.label`
  background: #f6f7f9;
  display: block;
  width: 50%;
  height: 8rem;
  border-radius: 5rem;
  text-align: center;
  line-height: 8rem;
  font-size: 4.2rem;
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
