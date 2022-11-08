import logo from './logo.svg';
import './App.css';
import { GameCard } from './components/gameCard';
import { GameDetails } from './routes/gameDetails';
import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Card } from "react-bootstrap";

function App() {

  const [game, setGame] = useState(null)

  async function fetchData() {
    await fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT",
        'X-RapidAPI-Key': '9ca1093946msh6ac41c1e7eb41e3p1d009bjsnccd03c100be5',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      },
    })
      .then((response) => response.json())
      .then(data => setGame(data))
  }

  useEffect(() => {
    fetchData()

    console.log(game)
  }, []
  )

  return (
    <div>
      <h1>Game Details</h1>
      {game !== null && <GameCard game={game} />}
    </div>
  )
}

export default App;
