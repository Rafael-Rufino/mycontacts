import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Sora', sans-serif;
  }
  
  body {
    font-size:  1rem ;
    background: ${({theme}) => theme.backgroundColor};
    -webkit-font-smoothing: antialiased !important;
  }


  button{
    cursor: pointer;
  }
`;
