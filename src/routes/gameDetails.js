import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function gameDetails() {
    const [game, setGame] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://www.freetogame.com/api/game?id=${id}`)
            .then((res) => res.json())
            .then((json) => setGame(json));
    }, [id]);

    return (
        <div>
            <h1>{game.name}</h1>
            <p>{game.short_description}</p>
        </div>
    );

}