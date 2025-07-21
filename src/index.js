import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement)

root.render(
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <App/>
        </Provider>,
    </ThemeProvider>
);