import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
     
      * {
 
      font-family: 'Open Sans', sans-serif;
      margin:0;
      padding:0;
      /* color: #1B1E1E; */
      list-style:none;
    }
  


  body {
   overflow-x: hidden;

  
  }

  a{
    text-decoration: none;
    cursor: pointer;
    color:#1B1E1E;
  }
  li{list-style: none;}
      ul{
        margin:none;
        padding:none;
      }

      button{
    
    color: #fff;
    border: none;
    cursor: pointer;
    padding: 10px;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 3px;
    overflow:hidden;
    display:flex;
    align-items:center;
    justify-content: center;
    box-shadow:-5px 6px 10px -6px rgba(6, 6, 6, 0.45);
    background: ${(props) => props.theme.bc.defaultBtn};
   
    svg{font-size:1.2rem;padding-right:10px;color:#fff}
    

    :hover{
        background-color: #666;
       
    }
  }
      

`;
 
export default GlobalStyle;