import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  justify-content: space-between;
`

export const BankTitle = styled.div`
  font-size: 2rem;
  margin-top: 0.5rem;
  flex-grow: 1;
  padding-right: 30px;
  text-align: center;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const CardImage = styled.img`
  margin-top: 2rem;
  height: 12rem;
  margin-bottom: 2rem;
`

export const CardTitle = styled.div`
  font-size: 2.1rem;
  line-height: 30px;
  font-weight: 700;
  margin-bottom: 0.5rem;
`

export const CardSubTilte = styled.div`
  margin-top: 0.4rem;
  font-size: 1.5rem;
  color: #888888;
  width: 23rem;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-word;

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.8rem;
`

export const DescriptionContainer = styled.div`
  margin: 2.5rem 0 0.5rem;
`

export const Description = styled.div`
  display: flex;
  margin-top: 0.4rem;

  .icons {
    margin-right: 1rem;
    width: 2.2rem;
    height: 2.2rem;
  }

  .description {
    margin-top: 0.7rem;
    color: #444b55;
    font-size: 1.2rem;

    span {
      color: #00a49d;
    }
  }
`

export const Button = styled.div`
  margin-top: 5rem;
`
