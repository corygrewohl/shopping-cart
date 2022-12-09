import { createGlobalStyle } from "styled-components";
import ScrollButton from '../assets/scroll_button.jpg'

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;

    font-family: 'Poppins', sans-serif;
}

html::-webkit-scrollbar {
  width: 28px;
  height: 28px;
}

html::-webkit-scrollbar-thumb {
  background: url(${ScrollButton});
}

html::-webkit-scrollbar-track {
  background: white;
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