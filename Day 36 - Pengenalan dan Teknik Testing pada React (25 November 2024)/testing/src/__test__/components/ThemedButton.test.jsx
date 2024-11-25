import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "../../components/context/ThemeContext";
import ThemeButton from "../../components/context/ThemeButton";

describe("ThemeButton component", () => {
  test("renders with the correct background color", () => {
    render(
      <ThemeProvider value="red">
        <ThemeButton />
      </ThemeProvider>
    );
    expect(screen.getByText("Click Me")).toHaveStyle("background-color: red");
  });
});
