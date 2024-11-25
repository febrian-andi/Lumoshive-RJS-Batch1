import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // untuk akses history
import NavLink from "../../components/NavLink";

describe("NavLink", () => {
  test("render link with corrrect href", () => {
    render(
      <MemoryRouter>
        <NavLink />
      </MemoryRouter>
    );

    expect(screen.getByText("About").closest("a")).toHaveAttribute(
      "href",
      "/about"
    );
  });
});
