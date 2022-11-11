//use Bootstrap Card component to display game info

import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card } from "react-bootstrap";
import AddIcon from "@mui/icons-material/Add";
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import WebIcon from "@mui/icons-material/Web";

function GameCard({ game }) {
  return (
    <>
      {game.map((game) => (
        <div className="b-game-card">
          <Card.Body
            className="b-game-card__cover"
            style={{ color: "#A6ACCD", background: "#090B10", margin: "0.5em", padding: "0em 1em 0em 1em" }}
          >
            <div className="d-flex justify-content-end pt-2">
              <AddIcon />
            </div>
            <Card.Title className="text-truncate pb-2" style={{ color: "#80CBC4" }}>
              {game.title}
            </Card.Title>

            <Card.Img variant="top" src={game.thumbnail} />
            <Card.Text className="text-truncate pt-2">{game.short_description}</Card.Text>

            <div className="d-flex justify-content-center">
              <div
                className="text-truncate pl-1 pr-1 w-50"
                style={{
                  margin: "0.8em",
                  textAlign: "center",
                  borderRadius: "12px",
                  backgroundColor: "#80CBC4",
                  color: "black",
                  paddingTop: "0.1em"
                }}
              >
                {game.genre}
              </div>
              <div
                style={{
                  margin: "0.8em",
                  width: "3em",
                  padding: "0.1em",
                  textAlign: "center",
                  borderRadius: "12px",
                  backgroundColor: "#80CBC4",
                  color: "black",
                }}
              >
                {game.platform === "PC (Windows)" ? <DesktopWindowsIcon /> : <WebIcon />}
              </div>
            </div>
          </Card.Body>
        </div>
      ))}
    </>
  );
}

export { GameCard };
