import React from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import GlobalStyle from "./global/styles";
import theme from "./global/theme";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </QueryClientProvider>
);
