import styled from 'styled-components'

export const SignUpInputBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 2rem 1.6rem 0 1.6rem;
  margin-bottom: 1.5rem;
  min-height: 6.6rem;
  font-size: 1.7rem;
  border-radius: 1.2rem;
  border: 1px solid #e4edf2;
`
export const SignUpLabel = styled.label`
  color: rgb(186, 186, 188);
`

export const SignUpInput = styled.input`
  width: 100%;
  font-size: 1.8rem;
  /* caret-color: rgb(19, 189, 126);
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 0.2s ease-in-out 0s;
  -webkit-appearance: inherit;
  -moz-appearance: inherit;
  user-select: initial; */
  border: none;
  background-color: inherit;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgb(186, 186, 188);
  }
`

export const ErrorMsg = styled.div`
  color: red;
  font-size: 1.1rem;
  margin: 1rem;
`
