import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .spinner-border {
    width: 100px;
    height: 100px;
  }
`

export const Message = styled.div`
  margin-top: 40px;
  font-weight: bold;
  font-size: 18px;
`
