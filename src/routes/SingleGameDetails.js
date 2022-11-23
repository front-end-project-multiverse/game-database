import React,{ useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CommentsBox from '../components/CommentsBox'

export default function SingleGameDetails() {
    const params = useParams();

    const [game, setGame] = useState(null)

    async function fetchData() {
        await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${params.id}`, {
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
        console.log(game)
    }, []
    )

    if (!game) {
        return <>Loading...</>
    }

  return (

   
    <div> 
        <Container>
      <Row>
        <Col xs={5}><img src={game.thumbnail}/>
        <h5>More stuff here</h5>
        <h5>More stuff here</h5>
        <h5>More stuff here</h5>
        <h5>More stuff here</h5>
        <h5>More stuff here</h5>
        <CommentsBox id={params.id}/>
        </Col>
        <Col xs={7}  className='singleGame'><h4>{game.title}</h4>
        <h5 className="mt-4">About</h5>
        {game.description}
        <h5 className="mt-4">System Requirements</h5><hr/>
        
        </Col>
       
      </Row>
      {/* <Row className="mt-4">
        <Col>Something here</Col>
        <Col xs={7}><h5>System Requirements</h5><hr/></Col>
      </Row> */}
    </Container></div>
  )
}
