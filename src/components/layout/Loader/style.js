import styled from 'styled-components'

export const Container = styled.div`
  height: calc(100vh - 9rem);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .spinner-border {
    width: 10rem;
    height: 10rem;
  }
`

export const Message = styled.div`
  margin-top: 4rem;
  font-weight: bold;
  font-size: 1.8rem;
`
