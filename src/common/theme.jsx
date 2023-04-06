import { extendTheme } from "@chakra-ui/react";
const theme = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  styles: {
    global: {
      body: {
        magin: 0,
        "font-family":
          "-apple-system, BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantell','Fira Sans','Helvetica','Droid Sans','Helvetica Neue','Helvetica','Sans-serif'",
        "-webkit-font-smoothing": "antialiased",
        "-moz-osx-font-smoothing": "grayscale",
      },

      code: {
        "font-family":
          "source-code-pro,Menlo,Monaco, Consolas,'Courier New',monospace",
      },
    },
  },
};

export default extendTheme(theme);
