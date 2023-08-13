import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Baloo 2', 'Roboto', sans-serif;
    font-size: 1rem;
    font-weight: 140;
    font-style: normal;
  
  }
  
:root{

    /* Produto */
    --yellow-dark:#C47F17;
    --yellow:#DBAC2C;
    --yellow-light:#f1e9c9da;
    --purple-dark:#4B2995;
    --purple:#8047F8;
    --purple-light:#EBE5F9;
   
    /*Base*/

   --base-title:#272221;
   --base-subtitle:#403937;
   --base-text:#574F4D;
   --base-label:#8D8686;
   --base-hover:#D7D5D5;
   --base-button:#E6E5E5;
   --base-input:#EDEDED;
   --base-card:#F3F2F2;
   --base-background:#FAFAFA;
   --white:#FFFFFF

}  

body{

}
`
