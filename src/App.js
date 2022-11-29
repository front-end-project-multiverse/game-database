import "./App.css";
import { GetAllGames } from "./routes/GetAllGames";
import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect, useState, useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { GamePagination } from "./components/GamePagination";
import { TheNavBar } from "./components/TheNavBar";
import { SearchFilterBar } from "./components/SearchFilterBar";
import About from "./routes/About";
import Contact from "./routes/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleGameDetails from "./routes/SingleGameDetails";
import { CommentProvider } from "./context/CommentProvider";
import  {NameSearchProvider} from './context/NameSearchProvider';

function App() {
  return (
        <NameSearchProvider>
          <CommentProvider>
          <BrowserRouter>
            <TheNavBar />
            <SearchFilterBar />
            <Routes>
                <Route path="/" element={<GetAllGames />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/:id" element={<SingleGameDetails />} />
            </Routes>
          </BrowserRouter>
        </CommentProvider>
      </NameSearchProvider>
  );
}

export default App;
