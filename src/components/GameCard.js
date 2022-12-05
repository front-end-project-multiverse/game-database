//use Bootstrap Card component to display game info

import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Card } from "react-bootstrap";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DesktopWindowsIcon from "@mui/icons-material/DesktopWindows";
import WebIcon from "@mui/icons-material/Web";
import { Link } from "react-router-dom";
import { NameSearchContext } from "../context/NameSearchProvider";
import { LightModeContext } from "../context/LightModeContext";
import { WishlistContext } from "../context/WishlistProvider";
import Button from "react-bootstrap";

function GameCard({ game }) {
  const { wishlist, addToWishlist, removeFromWishlist } = useContext(WishlistContext);
  const { name, setName } = useContext(NameSearchContext);
  const { lightMode, toggleLightMode } = useContext(LightModeContext);
  return (
    <>
      {game
        .filter((game) => {
          // filter with name currently in searchbar
          // useContext here
          let title = game.title.toLowerCase();
          return game === "ALL" ? game : title.indexOf(name) > -1;
        })
        // then map
        .map((game, idx) => (
          <div className="b-game-card" key={idx}>
            <Card.Body
              className="b-game-card__cover"
              style={
                lightMode
                  ? { color: "#A6ACCD", background: "#b7b9bd", margin: "0.5em", padding: "0em 1em 0em 1em" }
                  : { color: "#A6ACCD", background: "#090B10", margin: "0.5em", padding: "0em 1em 0em 1em" }
              }
            >
              <div className="d-flex justify-content-end pt-2 card-wishlist-button">
                {!wishlist.find((e)=>e === game) ? 
                (<ShoppingCartOutlinedIcon onClick={() => addToWishlist(game)} 
                style={
                  lightMode
                  ? { color: "black"}
                  : { color: "grey"}
                }/>) :
                (<ShoppingCartIcon onClick={() => removeFromWishlist(game)} style={
                  lightMode
                    ? { color: "green"}
                    : { color: "gold"}
                }/>)}
              </div>
              <div class="main-card-body">
                <Link to={`/${game.id}`} style={
                      lightMode
                        ? { textDecoration: "none", color: "#030505" }
                        : { textDecoration: "none", color: "#80CBC4" }
                    }>
                <Card.Title className="text-truncate pb-2">
                    {game.title}
                </Card.Title>

                <Card.Img variant="top" src={game.thumbnail} alt="game thumbnail"/>
                <Card.Text className="text-truncate pt-2" style={lightMode ? { color: "#030505" } : null}>
                  {game.short_description}
                </Card.Text>

                <div className="d-flex justify-content-center">
                  <div
                    className="text-truncate pl-1 pr-1 w-50"
                    style={
                      lightMode
                        ? {
                            margin: "0.8em",
                            textAlign: "center",
                            borderRadius: "12px",
                            backgroundColor: "#030505",
                            color: "white",
                            paddingTop: "0.1em",
                          }
                        : {
                            margin: "0.8em",
                            textAlign: "center",
                            borderRadius: "12px",
                            backgroundColor: "#80CBC4",
                            color: "black",
                            paddingTop: "0.1em",
                          }
                    }
                  >
                    {game.genre}
                  </div>
                  <div
                    style={
                      lightMode
                        ? {
                            margin: "0.8em",
                            width: "3em",
                            padding: "0.1em",
                            textAlign: "center",
                            borderRadius: "12px",
                            backgroundColor: "#030505",
                            color: "white",
                          }
                        : {
                            margin: "0.8em",
                            width: "3em",
                            padding: "0.1em",
                            textAlign: "center",
                            borderRadius: "12px",
                            backgroundColor: "#80CBC4",
                            color: "black",
                          }
                    }
                  >
                    {game.platform === "PC (Windows)" ? <DesktopWindowsIcon /> : <WebIcon />}
                  </div>
                </div>
                </Link>
              </div>
            </Card.Body>
          </div>
        ))}
    </>
  );
}

export { GameCard };
