import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

describe("App Component", () => {
  test("renders vite logo", () => {
    render(<App />);
    const viteLogo = screen.getByAltText("Vite logo");
    expect(viteLogo).toBeInTheDocument();
  });

  test("render react logo", () => {
    render(<App />);
    const reactLogo = screen.getByAltText("React logo");
    expect(reactLogo).toBeInTheDocument();
  });

  test("display count is 0", () => {
    render(<App />);
    const countElement = screen.getByText("count is 0");
    expect(countElement).toBeInTheDocument();
  });

  test("increment count when button is clicked", () => {
    render(<App />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    const countElement = screen.getByText("count is 1");
    expect(countElement).toBeInTheDocument();
  });

  test("display h1", () => {
    render(<App />);
    const h1Element = screen.getByText("Vite + React");
    expect(h1Element).toBeInTheDocument();
  });

  test("display p read the docs", () => {
    render(<App />);
    const pElement = screen.getByText(
      "Click on the Vite and React logos to learn more"
    );
    expect(pElement).toBeInTheDocument();
  });
});