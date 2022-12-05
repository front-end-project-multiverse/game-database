import "./App.css";
import { GetAllGames } from "./routes/GetAllGames";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { GamePagination } from "./components/GamePagination";
import { TheNavBar } from "./components/TheNavBar";
import About from "./routes/About";
import Contact from "./routes/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleGameDetails from "./routes/SingleGameDetails";
import Wishlist from "./routes/Wishlist";
import { CommentProvider } from "./context/CommentProvider";
import  {NameSearchProvider} from './context/NameSearchProvider';
import { LightModeProvider } from "./context/LightModeContext";
import { WishlistProvider } from "./context/WishlistProvider";

function App() {
  return (
        <WishlistProvider>
        <NameSearchProvider>
          <LightModeProvider>
          <CommentProvider>
          <BrowserRouter>
            <TheNavBar />
            <Routes>
              <Route path="/" element={<GetAllGames />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/:id" element={<SingleGameDetails />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
          </BrowserRouter>
        </CommentProvider>
        </LightModeProvider>
      </NameSearchProvider>
      </WishlistProvider>
  );
}

export default App;
