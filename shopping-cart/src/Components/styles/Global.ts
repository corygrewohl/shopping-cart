import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;

    font-family: 'Poppins', sans-serif;
}

body {
  background-color: whitesmoke;
}

.svg_icons {
    transform: scale(1.8);
    text-align: center;
  }
`;

export default GlobalStyles