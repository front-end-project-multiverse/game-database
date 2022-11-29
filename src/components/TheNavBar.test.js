import { render, screen } from "@testing-library/react";
import { TheNavBar } from "./TheNavBar";
import { BrowserRouter } from "react-router-dom";

test("Navbar component renders correctly", async () => {
  render(
    <BrowserRouter>
      <TheNavBar />
    </BrowserRouter>
  );
  expect(screen.getByText("Games of 2022")).toBeVisible();
  expect(screen.getAllByRole("link")).toHaveLength(6);
  expect(screen.getAllByRole("button")).toHaveLength(1);
});
