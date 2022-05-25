import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
  @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;900&display=swap");
   
  body{
    font-family: 'Nunito Sans', sans-serif;
    transition: all 0.1s linear;
  }
`;
