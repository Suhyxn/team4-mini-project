import styled from 'styled-components'

export const Main = styled.div`
    margin-top: 12rem;
    margin-bottom: 10rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
`

export const MainTxt = styled.h1`
    font-size: 2.5rem;
    line-height: 5.5rem;
    margin-bottom: 5rem;
`
export const Container = styled.div`
    display:flex;
    gap: 0.8rem;
    margin-bottom: 3rem;
`

export const Txt = styled.p`
    font-size: 1rem;
    line-height: 1.5rem;
`

export const Line = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: 1px;
    height: 20px;
    margin: auto;
    background-color: rgba(51,58,68, 0.1);
    &:before {
        height: 14px;
        width: 100%;
        display: inline-block;
    }
`