import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled, { ThemeProvider } from 'styled-components';

const ThemeColor = {
  default: 'red'
}

interface Theme {
  themeColor: typeof ThemeColor
}

const UI = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      <ThemeProvider theme={ThemeColor}>{children}</ThemeProvider>
    </>
  );
};

const AppStyle = styled.div<Theme>((props: Theme) => {
  console.log(props);
  return {
    color: props.theme.default
  }
})

function App() {
  return (
    <UI>
      <AppStyle>
        hello world
      </AppStyle>
    </UI>
    );
}

window.addEventListener("load", () =>
  ReactDOM.render(<App />, document.getElementById("app"))
);
