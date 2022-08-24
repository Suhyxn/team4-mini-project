import styled, { ThemeProvider } from 'styled-components'
import theme from './theme'
import media from './media'

export const Div = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.subtitle};

  ${({ theme }) => theme.tablet` 
    flex-direction: column;
    font-size: ${({ theme }) => theme.fontSizes.paragraph};
  `};

  width: 100vw;
  height: 100vh;
  background: wheat;
  display: flex;
  align-items: center;
  justify-content: center;
`
