import styled from 'styled-components'

export const Container = styled.ul`
  display: flex;
  gap: 1rem;
`

export const Input = styled.input`
  opacity: 0;
  position: absolute;
`
export const Text = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  font-size: 1.4rem;
  cursor: pointer;
  height: ${(props) => (props.height ? props.height : '3.3rem')};
`
export const Label = styled.label`
  width: 100%;
  border-radius: 0.4rem;
  background-color: #fff;
  color: #bababc;
  border: 1px solid #e4edf2;
`
export const List = styled.li`
  width: 100%;
  display: inline-block;
  ${Input}:checked + ${Label} {
    background-color: rgba(19, 189, 126, 0.1);
    color: #63e6be;
  }
`
