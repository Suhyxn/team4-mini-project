import styled from 'styled-components'

export const Container = styled.div`
  .btn {
    margin-left: 80%;
  }
`

export const Title = styled.div`
  margin-top: 4rem;
  font-size: 2.2rem;
  font-weight: bold;

  p {
    margin-bottom: 1rem;
  }

  span {
    color: #56b983;
  }
`

export const ContentContainer = styled.div`
  margin-top: 4rem;

  .btn {
    margin-left: 50%;
  }
`

export const FilterContainer = styled.div`
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f6f7f9;
  margin: 1rem;
  border-radius: 5rem;
`

export const Label = styled.label`
  background: #f6f7f9;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 4rem;
  border-radius: 5rem;
  text-align: center;
  line-height: 6rem;
  font-size: 2rem;
  font-weight: bold;
  color: #9ea2b0;

  :last-child {
    margin-right: 10px;
  }
`

export const Input = styled.input`
  opacity: 0;
  &:checked + ${Label} {
    background: white;
    color: black;
    transition: 0.3s;
  }
`

export const countDown = styled.div`
  color: #9ea2b0;
  display: flex;
  font-size: 0.5rem;
  font-weight: bold;
  margin: 1rem;
`
export const CardContainer = styled.div`
  border-radius: 1.2rem;
  background-color: #f6f7f9;
  height: 11.9rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  text-align: center;
  line-height: 4rem;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 2rem;
  div {
    width: auto;
    margin-left: 1rem;
    margin-top: 2rem;
  }
  span {
    display: block;
    color: #56b983;
    margin-left: 1rem;
    font-size: 3rem;
  }
`
export const CardTitle = styled.div``
