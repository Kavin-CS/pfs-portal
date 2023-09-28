import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

.scrollbar-cus{
  overflow: auto;
}

.scrollbar-cus::-webkit-scrollbar {
  width: 5px;
}

.scrollbar-cus::-webkit-scrollbar-track {
  background:#DFE1E6;
  border-radius:5px;
}

.scrollbar-cus::-webkit-scrollbar-thumb {
  background:#adb6c9;
  border-radius:5px;
}


  html,
  body {
    height: 100%;
    width: 100%;
  }

  // body {
  //   font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  // }

  // body.fontLoaded {
  //   font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  // }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    // font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
// Custom styles

  .cardHeader{
    text-transform: uppercase;
  
      font-size:16px;
      font-weight:600;
      color:#7A869A;
  
  }

  .bottomDivider{
    border-bottom: 1px solid beige;
  }

  // styles for student page
  .icons{
    height: 12px;
    width: 12px;
  }

  .customRender{
    min-width: 100px;
  }
`;

export default GlobalStyle;
