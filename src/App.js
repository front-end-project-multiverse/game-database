
import './App.css';
import { GameDetails } from './routes/gameDetails';
import "bootstrap/dist/css/bootstrap.css"
import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { GamePagination } from './components/GamePagination';
import {TheNavBar} from './components/TheNavBar'

function App() {

  return (
    <>
      <TheNavBar/>
      <GameDetails />
    </>
  )
}

export default App;