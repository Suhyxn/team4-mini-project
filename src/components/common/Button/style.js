import styled, { css } from 'styled-components'

const sizes = css`
  ${(props) =>
    props.size === 'large' &&
    css`
      width: 330px;
      height: 62px;
      font-size: 17px;
      line-height: 22px;
      border-radius: 12px;
    `}
  ${(props) =>
    props.size === 'medium' &&
    css`
      width: 160px;
      height: 37px;
      font-size: 13px;
      line-height: 22px;
      border-radius: 8px;
    `}
  ${(props) =>
    props.size === 'small' &&
    css`
      width: 83px;
      height: 25px;
      font-size: 13px;
      line-height: 16px;
      border-radius: 4px;
    `}
  ${(props) =>
    props.size === 'flat' &&
    css`
      width: 60px;
      height: 60px;
      font-size: 13px;
      line-height: 16px;
      opacity: 0.8;
      border-radius: 12px;
    `}
    ${(props) =>
    props.size === 'radio' &&
    css`
      display: inline-block;
      width: 100%;
      height: 33px;
      font-size: 14px;
      border-radius: 4px;
      background-color: rgba(19, 189, 126, 0.1);
      color: #63e6be;
      border: 1px solid #e4edf2;
    `}
`

export const Button = styled.button`
  margin-bottom: 0.5rem;
  outline: none;
  border: none;
  color: ${(props) => (props.disabled ? '#A9AFB9' : '#fff')};
  background-color: ${(props) =>
    props.disabled
      ? props.theme.palette.disabled
      : props.theme.palette.baseColor};
  &:hover {
    opacity: 0.9;
  }
  &:active {
    opacity: 0.9;
  }
  ${sizes}
`
