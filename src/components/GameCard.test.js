import { render, screen } from "@testing-library/react";
import { GameCard } from "./GameCard";
import { NameSearchProvider } from "../context/NameSearchProvider";
import { WishlistProvider } from "../context/WishlistProvider";
import { LightModeProvider } from "../context/LightModeContext";
import { BrowserRouter } from "react-router-dom";

const testGame = [
  {
    id: 540,
    title: "Overwatch 2",
    thumbnail: "https://www.freetogame.com/g/540/thumbnail.jpg",
    short_description: "A hero-focused first-person team shooter from Blizzard Entertainment.",
    game_url: "https://www.freetogame.com/open/overwatch-2",
    genre: "Shooter",
    platform: "PC (Windows)",
    publisher: "Activision Blizzard",
    developer: "Blizzard Entertainment",
    release_date: "2022-10-04",
    freetogame_profile_url: "https://www.freetogame.com/overwatch-2",
  },
];
test("GameGard component renders correctly", async () => {
  render(
    <WishlistProvider>
    <BrowserRouter>
      <NameSearchProvider>
        <LightModeProvider>
        <GameCard game={testGame} />
        </LightModeProvider>
      </NameSearchProvider>
    </BrowserRouter>
    </WishlistProvider>
  );
  expect(screen.getByText("Overwatch 2")).toBeVisible();
  expect(screen.getByText("Shooter")).toBeVisible();
});
