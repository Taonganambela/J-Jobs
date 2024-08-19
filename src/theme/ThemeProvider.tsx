import React, { useState, ReactNode } from "react";
import { ThemeProvider } from "@mui/material";
import { themeCreator } from "./base";
import { StylesProvider } from "@mui/styles";
import { ThemeContext } from "@emotion/react";

interface ThemeProviderWrapperProps {
  children: ReactNode;
}

const ThemeProviderWrapper: React.FC<ThemeProviderWrapperProps> = (props) => {
  const curThemeName = localStorage.getItem("appTheme") || "PureLightTheme";
  const [themeName, _setThemeName] = useState<string>(curThemeName);
  const theme = themeCreator(themeName);
  const setThemeName = (themeName:string)  => {
    localStorage.setItem("appTheme", themeName);
    _setThemeName(themeName);
  };

  return (
      <StylesProvider injectFirst>
        <ThemeContext.Provider value={() => setThemeName}>
          <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
        </ThemeContext.Provider>
      </StylesProvider>
  );
};

export default ThemeProviderWrapper;
