import styled from 'styled-components'

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
  margin-top: 4rem;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 7rem;

  .title {
    color: #979cac;
  }

  .content {
    font-size: 3rem;
    margin-top: 1rem;
    margin-left: 0.4rem;
    color: #13bd7e;
  }
`

export const Button = styled.div`
  .btn {
    margin-top: 4rem;
    width: 100%;
  }
`

export const ExplanationTitle = styled.div`
  padding-top: 3rem;
  padding-bottom: 2rem;
  background-color: #f6f7f9;
  color: #555b66;
`

export const Explanation = styled.div`
  display: flex;
  background-color: #f6f7f9;
  height: 41rem;

  .title {
    width: 15rem;
    color: #979cac;
    div {
      margin-top: 1.8rem;
      margin-bottom: 1.8rem;
    }
  }

  .content {
    color: #555b66;
    div {
      margin-top: 1.8rem;
      margin-bottom: 1.8rem;
    }
  }
`
