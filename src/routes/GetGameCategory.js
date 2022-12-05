import React, { useEffect, useState, useContext } from "react"
import { GameCard } from "../components/GameCard"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  {NameSearchContext} from '../context/NameSearchProvider';

function GetGameCategory() {

    const {category, setCategory} = useContext(NameSearchContext)
    const [game, setGame] = useState(null)

    async function fetchData() {
        console.log(category)
            let response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT",
                    'X-RapidAPI-Key': '9ca1093946msh6ac41c1e7eb41e3p1d009bjsnccd03c100be5',
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                },
            })
            
            response.then((response) => response.json())
            .then(data => setGame(data));
    }

    useEffect(() => {
        fetchData()
        console.log(game)
    }, []
    )

    // do another router in here for categories depending on fetch?
    // getAllGames is not being called with correct category if statemnt not being called
    return (
        <>
            <h3>All {category} Games</h3>
            <div className='d-flex flex-wrap'>
                {game !== null && <GameCard game={game} />}
            </div>  
        </>
    )
}

export { GetGameCategory }
