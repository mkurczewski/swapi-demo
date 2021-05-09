import React, { FunctionComponent } from "react"
import { ThemeProvider } from "styled-components"
import { Normalize } from "styled-normalize"
import { GlobalStyle } from "./global-style"

/*
  Theme is empty for demo purposes.
  It's only to allow styled components to work properly.
*/
export const theme = {}

export const AppThemeProvider: FunctionComponent = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Normalize />
    <GlobalStyle />
    {children}
  </ThemeProvider>
)
