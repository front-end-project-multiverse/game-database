import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CommentsBox from "../components/CommentsBox";

export default function SingleGameDetails() {
  const params = useParams();

  const [game, setGame] = useState(null);
  const [image, setImage] = useState()

  async function fetchData() {
    await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT",
        "X-RapidAPI-Key": "9ca1093946msh6ac41c1e7eb41e3p1d009bjsnccd03c100be5",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then(data => {
        setGame(data)
        setImage(data.thumbnail)
  })
  }
  useEffect(() => {
    fetchData();
    console.log(game);
  }, []);

  if (!game) {
    return <>Loading...</>;
  }
 
  return (
    
    <div>
      <Container fluid="md">
        <Row>
          <Col xs={5} className="mt-2">
            <img src={image} width="100%" />
            <div>
            <img src={game.thumbnail} width="115" onClick={()=>setImage(game.thumbnail)} style={{margin: "0.2em"}}/>
              {game.screenshots.map(each =>{
                 return <img src={each.image} width="115" onClick={()=>setImage(each.image)} style={{margin: "0.2em"}}/>
              })}
            </div>
            <div className="mt-4 mb-4" style={{color: "white"}}>
            <h6>Platform: {game.platform}</h6>
            <h6>Publisher: {game.publisher}</h6>
            <h6>Release date: {game.release_date}</h6>
            </div>
           
            <h5 className="mt-4" style={{color: "white"}}>Reviews</h5>
            <hr  style={{color: "#6c757d"}}/>
            <CommentsBox gameId={params.id} />
          </Col>
          <Col xs={7} className="singleGame">
            <h4>{game.title}</h4>
            <h6>{game.short_description}</h6>
            <video width="100%" controls autoplay muted>
  <source src={`https://www.freetogame.com/g/${game.id}/videoplayback.webm`} type="video/mp4" />
 
</video>
            <h5 className="mt-4">About</h5>
            <hr />
            {game.description}
            <h5 className="mt-4">System Requirements</h5>
            <hr/>
            <ul>
              <li>Operating system: {game.minimum_system_requirements.os}</li>
              <li>CPU: {game.minimum_system_requirements.processor}</li>
              <li>Graphics: {game.minimum_system_requirements.graphics}</li>
              <li>RAM: {game.minimum_system_requirements.memory}</li>
              <li>Storage: {game.minimum_system_requirements.storage}</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
