import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


function gameDetails() {
    const [game, setGame] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://www.freetogame.com/api/game?id=${id}`)
            .then((response) => response.json())
            .then(setGame)
    }, [id])

    return (
        <div>
            <h1>{game.title}</h1>
            <img src={game.thumbnail} alt={game.title} />
            <p>{game.short_description}</p>
        </div>
    )
}

export default gameDetails
