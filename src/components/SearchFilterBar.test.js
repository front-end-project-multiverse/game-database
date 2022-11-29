import { render, screen } from "@testing-library/react";
import { SearchFilterBar } from "./SearchFilterBar";

test("Search/Filter component renders correctly", async () => {
  render(<SearchFilterBar />);
  expect(screen.getByPlaceholderText("Search for a game...")).toBeVisible();
  expect(screen.getByRole("button")).toHaveTextContent("Clear");
});
