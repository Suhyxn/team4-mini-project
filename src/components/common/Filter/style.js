import styled from 'styled-components'

export const Container = styled.div`
  height: 6rem;
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
  height: 4rem;
  border-radius: 5rem;
  text-align: center;
  line-height: 6rem;
  font-size: 2rem;
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
