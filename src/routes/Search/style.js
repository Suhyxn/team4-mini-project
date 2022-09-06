import styled from 'styled-components'

export const Container = styled.div`
  max-width: 50rem;
  min-height: 100vh;
  margin: 0 auto;
  background-color: #fff;
`
export const Box = styled.div`
  padding: 1.6rem;
`

export const Select = styled.select`
  border: none;
  background: inherit;
  border-radius: 12px;
  padding-left: 12px;

  option {
    padding: 4px;
    font-size: 14px;
  }
`

export const SearchBox = styled.div`
  cursor: pointer;
`

export const InputBox = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 4.8rem;
  background-color: #edf0f3;
  border-radius: 0.8rem;
  align-items: center;
  padding-right: 1.5rem;
`

export const Img = styled.img`
  width: 2.6rem;
  height: auto;
  cursor: pointer;
`
export const Input = styled.input`
  outline: none;
  width: 100%;
  height: 100%;
  margin-left: 1.6rem;
  marin-right: 1.6rem;
  border: none;
  background: inherit;
`

export const TagContainer = styled.div`
  padding: 0.2rem 1.5rem;
`
export const TagBox = styled.h4`
  margin-right: 1.2rem;
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 1rem;
`
export const Wrap = styled.div`
  display: flex;
  font-size: 1.4rem;
  font-weight: 400;
  color: #25282b;
  flex-wrap: wrap;
  justify-content: flex-start;
`

export const Tag = styled.div`
  text-align: center;
  border-radius: 8px;
  background-color: #edf0f3;
  cursor: pointer;
  padding: 0.6rem;
  margin: 0.5rem;
`
