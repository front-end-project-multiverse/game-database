
import './App.css';
import { GameDetails } from './routes/gameDetails';
import "bootstrap/dist/css/bootstrap.css"
import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import CommentsBox from './components/CommentsBox'

function App() {

  return (
    <>
      {/* <GameDetails /> */}
        <CommentsBox />
        
    </>
  )
}

export default App;