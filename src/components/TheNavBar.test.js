import { render, screen } from "@testing-library/react";
import { TheNavBar } from "./TheNavBar";
import { BrowserRouter } from "react-router-dom";
import { LightModeProvider} from "../context/LightModeContext"

test("Navbar component renders correctly", async () => {
  render(
    <BrowserRouter>
    <LightModeProvider>
      <TheNavBar />
    </LightModeProvider>
    </BrowserRouter>
  );
  expect(screen.getByText("Games of 2022")).toBeVisible();
  expect(screen.getAllByRole("link")).toHaveLength(5);
  expect(screen.getAllByRole("button")).toHaveLength(2);
});
