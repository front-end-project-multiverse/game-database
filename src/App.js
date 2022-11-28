
import './App.css';
import { GetAllGames } from './routes/GetAllGames';
import "bootstrap/dist/css/bootstrap.css"
import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { GamePagination } from './components/GamePagination';
import {TheNavBar} from './components/TheNavBar'
import {SearchFilterBar} from './components/SearchFilterBar'

function App() {

  return (
    <>
      <TheNavBar/>
      <SearchFilterBar/>
      <GetAllGames />
    </>
  )
}

export default App;