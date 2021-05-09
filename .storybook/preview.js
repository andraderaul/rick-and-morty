import React from "react";
import {ThemeProvider} from "styled-components";
import GlobalStyles from "../src/styles/global";
import theme from "../src/styles/theme";
import { QueryClient, QueryClientProvider } from 'react-query'

export const parameters = {
  controls: { expanded: true }
};

const client = new QueryClient()

export const decorators = [
  (storyFn) => (
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        {storyFn()}
        <GlobalStyles/>
      </ThemeProvider>
    </QueryClientProvider>
  ),
];
