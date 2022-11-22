import React, { useEffect, useState, useContext } from "react"
import { GameCard } from "../components/gameCard"
import { GamePagination } from "./GamePagination"
import { CategoriesContext } from "../components/TheNavBar"
function GameDetails() {

    const [game, setGame] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const gamesPerPage = 30;


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

    }, []
    )

    console.log(game)


    const indexOfLastGame = currentPage * gamesPerPage;
    const indexOfFirstGame = indexOfLastGame - gamesPerPage;
    const currentGame = game !== null && game.slice(indexOfFirstGame, indexOfLastGame);
    console.log(currentGame)

    const categoryGames = useContext(CategoriesContext)
    console.log(categoryGames)
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        // <CategoriesContext value={categoryGames}>
        <>
            <div className='d-flex flex-wrap'>
                {game !== null && <GameCard game={currentGame} />}
            </div>
            <GamePagination
                gamesPerPage={gamesPerPage}
                totalGames={game !== null && game.length}
                paginate={paginate}
            />
        </>
        // </CategoriesContext >
    )
}

export { GameDetails }
