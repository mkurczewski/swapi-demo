import React from "react"
import { Provider } from "react-redux"
import ReactDOM from "react-dom"
import { Normalize } from "styled-normalize"
import { GlobalStyle } from "./global-style"
import App from "./App"
import { ThemeProvider } from "styled-components"
import { store } from "./store"

/*
  Theme is empty for demo purposes.
  It's only to allow styled components to work properly.
*/
export const theme = {}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Normalize />
        <GlobalStyle />
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
