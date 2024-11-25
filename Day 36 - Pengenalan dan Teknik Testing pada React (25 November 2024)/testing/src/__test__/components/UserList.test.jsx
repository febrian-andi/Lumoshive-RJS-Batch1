import { screen, render } from "@testing-library/react";
import UserList from "../../components/UserList";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve([{ id: 1, name: "John Doe" }]),
  });
});

describe("UserList component", () => {
  test("renders a list of users", async () => {
    render(<UserList />);
    expect(await screen.findByText("John Doe")).toBeInTheDocument();
  });
});
