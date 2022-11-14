import logo from './logo.svg';
import './App.css';
import { GameDetails } from './routes/gameDetails';
import "bootstrap/dist/css/bootstrap.css"
import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Card } from "react-bootstrap";
import { TheNavbar } from './components/NavBar';

function App() {

  return (
    <div>
      <TheNavbar />
      <GameDetails />
    </div>
  )
}

export default App;
