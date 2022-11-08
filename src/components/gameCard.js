//use Bootstrap Card component to display game info

import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import { Card } from "react-bootstrap";



function GameCard({ game }) {

    return (
        <div>
            {game.map(game =>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={game.thumbnail} />
                    <Card.Body>
                        <Card.Title>{game.title}</Card.Title>
                        <Card.Text>
                            {game.short_description}
                        </Card.Text>
                    </Card.Body>
                </Card>)}
        </div>
    )
}

export { GameCard }
