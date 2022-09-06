import styled, { ThemeProvider } from "styled-components";
import { useState } from "react";

import GlobalStyle from "./GlobalStyle";

import lightTheme from "Components/themes/light.json";
import darkTheme from "Components/themes/dark.json";

import Header from "Components/UI/Header";
import Footer from "Components/UI/Footer";

export default function Layout({ children }) {
  const [islight, setIsLight] = useState(true);

  function handleToggleTheme() {
    setIsLight(!islight);
  }

  return (
    <ThemeProvider theme={islight ? lightTheme : darkTheme}>
      <wrapper>
        <GlobalStyle />

        <Header />
        <Main>{children}</Main>
        <Footer islight={islight} handleToggleTheme={handleToggleTheme} />
      </wrapper>
    </ThemeProvider>
  );
}

const wrapper = styled.div``;

const Main = styled.div`
  min-height: calc(100vh - 192px);
  width: 96%;
  max-width: 1240px;
  margin: auto;
  margin-top: 32px;
  display: flex;
  justify-content: center;
`;
