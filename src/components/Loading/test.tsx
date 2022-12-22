import { render, screen } from "@testing-library/react";
import theme from "../../global/theme";
import { ThemeProvider } from "styled-components";
import { Loading } from ".";

describe("<Loading />", () => {
  it("Deve renderizar o componente Loading", () => {
    render(
      <ThemeProvider theme={theme}>
        <Loading />
      </ThemeProvider>
    );

    expect(screen.queryByTestId("loading")).toBeInTheDocument();
  });
});
