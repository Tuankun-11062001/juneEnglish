import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/color-mode";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";
// font
import "./assets/font/Alkatra-VariableFont_wght.ttf";
import "./assets/font/DeliciousHandrawn-Regular.ttf";
import "./assets/font/Roboto-Black.ttf";
import "./assets/font/Roboto-Bold.ttf";
import "./assets/font/Roboto-Italic.ttf";
import "./assets/font/Roboto-Light.ttf";
import "./assets/font/Roboto-Medium.ttf";
import "./assets/font/Roboto-Regular.ttf";
import "./assets/font/Roboto-Thin.ttf";
import "./assets/font/SourceSansPro-Light.ttf";

import "./scss/index.scss";
import theme from "./common/theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
