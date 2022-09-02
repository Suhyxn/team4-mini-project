import styled, { css } from 'styled-components'

const hidden = css`
  ${(props) =>
    props.disabled &&
    css`
      overflow: hidden;
      position: absolute;
      clip: rect(0, 0, 0, 0);
      clip-path: polygon(0 0, 0 0, 0 0);
      width: 1px;
      height: 1px;
      margin: -1px;
      white-space: nowrap;
    `}
`

export const Container = styled.div`
  background-color: transparent;
  border-radius: 1.2rem;
  border: 1px solid #e4edf2;
  margin-bottom: 1rem;
  ${hidden}
`

export const InputBox = styled.div`
  position: relative;
  display: flex;
  align-content: center;
  padding: 2rem 1.6rem 0 1.6rem;
  min-height: 6.6rem;
  font-size: 1.7rem;
`

export const StyledInput = styled.input`
  width: 100%;
  font-size: 1.8rem;
  caret-color: rgb(19, 189, 126);
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 0.2s ease-in-out 0s;
  -webkit-appearance: inherit;
  -moz-appearance: inherit;
  user-select: initial;
  border: none;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgb(186, 186, 188);
  }
  background-color: inherit;
`

export const Button = styled.div`
  opacity: ${(props) => (props.active ? 1 : 0)};
  display: flex;
  cursor: pointer;
  padding-bottom: 1rem;
  align-items: center;
  justify-content: center;
`

export const StyledLabel = styled.label`
  position: absolute;
  bottom: 2.2rem;
  left: 1.6rem;
  transition: transform 0.2s ease-in-out 0s, color 0.2s ease-in-out 0s;
  transform-origin: left top;
  font-size: 1.8rem;
  color: ${(props) =>
    props.active ? 'rgb(102, 108, 119)' : 'rgb(186, 186, 188)'};

  transform: ${(props) =>
    props.active
      ? 'translate3d(0px, -15px, 0px) scale(0.7)'
      : 'translate3d(0px, 0px, 0px)'};
`
