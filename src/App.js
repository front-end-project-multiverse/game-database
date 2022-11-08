import logo from './logo.svg';
import './App.css';
import { GameDetails } from './routes/gameDetails';

import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Card } from "react-bootstrap";
function App() {

  return (
    <div>
      <h1>Game Details</h1>
      <GameDetails />

    </div>
  )
}

export default App;
