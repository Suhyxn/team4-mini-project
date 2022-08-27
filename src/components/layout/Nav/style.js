import styled from 'styled-components'

// #main {
//     min-height: calc(100vh - 6rem);
//   }
  
//   Nav {
//     margin-top: auto;
//   }
  
  export const Hr = styled.hr`
    margin: 0rem;
  `
  
  export const NavInit = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    align-items: center;
    padding: 1rem;
  `
  
  export const NavBtn = styled.button`
    background-color: #13BD7E;
    border: 0rem;
    font-size: 2rem;
    width: 8rem;
    height: 8rem;
    border-radius: 0.5rem;
  `

  export const NavA = styled.a`
    color: #fff;
  `