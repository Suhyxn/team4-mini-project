import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
`

export const BankTitle = styled.div`
  font-size: 2rem;
  justify-content: center;
  margin-top: 0.5rem;
  margin-left: 13rem;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const CardImage = styled.img`
  margin-top: 2rem;
  width: 22rem;
  height: 10rem;
`

export const CardTitle = styled.div`
  margin-top: 2rem;
  font-size: 2rem;
  font-weight: 600;
`

export const CardSubTilte = styled.div`
  margin-top: 0.4rem;
  font-weight: 300;
  color: #888888;
`

export const DescriptionContainer = styled.div`
  margin-top: 2.5rem;
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
    font-size: 1.1rem;

    span {
      color: #00a49d;
    }
  }
`

export const MenuContainer = styled.div`
  display: flex;
  margin-top: 4rem;
  padding-bottom: 4rem;
`

export const Label = styled.label`
  display: block;
  width: 8rem;
  height: 3rem;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: #888888;
  justify-content: center;
  padding: 1rem 0;
  :last-child {
  }
`

export const Input = styled.input`
  opacity: 0;
  &:checked + ${Label} {
    color: black;
    transition: 0.3s;
  }
`

export const SubTitle = styled.div`
  margin-top: 2rem;
  font-size: 1.4rem;
  margin-left: 2rem;
`

export const SubContent = styled.div`
  font-size: 1.2rem;
  line-height: 1.8rem;
`

export const Button = styled.div`
  margin-top: 5rem;
  margin-left: 2rem;
`
