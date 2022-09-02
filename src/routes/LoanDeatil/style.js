import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.2rem;
`

export const LoanImage = styled.img`
  width: 6rem;
  height: 6rem;
  margin-top: 2rem;
  border-radius: 50%;
`

export const LoanTitle = styled.div`
  margin-top: 2rem;
  font-size: 2rem;
`

export const LoanSubTitle = styled.div`
  color: #333a44;
  margin-top: 1.5rem;
`

export const ContentContainer = styled.div`
  display: flex;
  margin: 4rem 0 3.5rem 0;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 7rem;

  .title {
    color: #979cac;
  }

  .content {
    font-size: 2.22rem;
    margin-top: 1rem;
    color: #13bd7e;
  }
`

export const Button = styled.div`
  .btn {
    margin-top: 3rem;
    width: 100%;
  }
`

export const ExplanationTitle = styled.div`
  margin-top: 3rem;
  padding: 3rem 0 2rem 0;
  background-color: #f6f7f9;
  color: #555b66;
`

export const Explanation = styled.div`
  display: flex;
  background-color: #f6f7f9;
  height: 33rem;
  margin-bottom: 1rem;

  .title {
    width: 15rem;
    color: #979cac;
    div {
      margin: 1.8rem 0;
    }
  }

  .content {
    color: #555b66;
    div {
      margin: 1.8rem 0;
    }
  }
`
