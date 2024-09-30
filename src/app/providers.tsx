"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Global, css } from "@emotion/react";

const colors = {
  maroon: "#C33F82",
};

const fonts = {
  heading: "'Acme', sans-serif",
  body: "'Comic Neue', sans-serif",
};

const components = {
  Heading: {
    baseStyle: {
      fontFamily: "'Acme', sans-serif",
    },
  },
  Button: {
    baseStyle: {
      fontFamily: "'Comic Neue', sans-serif",
    },
  },
};

export const theme = extendTheme({ colors, fonts, components });

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Acme&family=Comic+Neue:wght@300;400;700&display=swap');
        `}
      />
    </CacheProvider>
  );
}