import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import GlobalStyle from "./global/styles";
import theme from "./global/theme";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import { AuthProvider } from "./context/AuthContext";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

const queryClient = new QueryClient();

if (import.meta.env.VITE_APP_MODE === "PRODUCTION") {
  disableReactDevTools();
}

createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </AuthProvider>
);
