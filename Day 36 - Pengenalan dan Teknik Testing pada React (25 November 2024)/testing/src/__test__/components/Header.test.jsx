import { render } from "@testing-library/react";
import Header from "../../components/Header";

describe("Header Component", () => {
  test("check h1 tag", () => {
    render(<Header />);
    expect(document.querySelector("h1")).toBeInTheDocument();
  });

  test("match snapshot", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
