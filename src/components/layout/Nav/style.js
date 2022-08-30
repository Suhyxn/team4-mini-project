import styled from 'styled-components'

export const NavContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  display: flex;
  background: #fff;
  border-radius: 1.5rem 1.5rem 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-top: 1px solid rgb(232, 232, 232);
  box-shadow: rgb(0 0 0 / 4%) 0px 0px 6px 4px;
  a {
    border-radius: 1.2rem;
  }
`

export const NavBtn = styled.div`
  font-size: 1.4rem;
  text-align: center;
  line-height: 2.2rem;
  width: 6rem;
  height: 6rem;
  border-radius: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #eee;
`
