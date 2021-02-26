import React from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

interface IThemeProviderProps {
  children: React.ReactNode;
}

const theme = extendTheme({
  colors: {
    brand: {
      main: "#805AD5",
      secondary: "#718096",
    },
  },
});

export const ThemeProvider: React.FC<IThemeProviderProps> = (props) => {
  return <ChakraProvider theme={theme}>{props.children}</ChakraProvider>;
};
