
import './App.css';
import { GameDetails } from './routes/gameDetails';
import "bootstrap/dist/css/bootstrap.css"
import React from "react"
import "bootstrap/dist/css/bootstrap.css"
// import { GamePagination } from './routes/GamePagination';
import { TheNavBar } from './components/TheNavBar'
import { SearchFilterBar } from './components/SearchFilterBar'

function App() {


  return (
    <>
      <SearchFilterBar />
      <TheNavBar />
      <GameDetails />
    </>
  )
}

export default App;