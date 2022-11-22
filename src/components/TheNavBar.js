//render games based on category clicked on by navbar
import React, { useEffect, useState } from "react"
import { GameCard } from "./gameCard"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from "react-bootstrap";

function TheNavBar() {

    //fetch data from API based on category selected
    const [game, setGame] = useState(null)
    const [category, setCategory] = useState("shooter")

    async function fetchData() {
        await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, {
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
        console.log(category) //testing that the correct category is being selected
    }

    useEffect(() => {
        fetchData()
    }, [category]
    )
    console.log(game) //testing that the correct category is being selected


    //only render games that match category selected

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Games of 2022</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <NavDropdown title="Categories" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={() => setCategory("Strategy")}>Strategy</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => setCategory("Sports")}>Sports</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => setCategory("Racing")}>Racing</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => setCategory("Fighting")}>Fighting</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => setCategory("Card")}>Card</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => setCategory("Shooter")}>Shooter</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => setCategory("Turn-Based")}>Turn-Based</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => setCategory("Action")}>Action</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => setCategory("Horror")}>Horror</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => setCategory("Survival")}>Survival</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => setCategory("Sandbox")}>Sandbox</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => setCategory("Fighting")}>Fighting</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => setCategory("Racing")}>Racing</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => setCategory("Sports")}>Sports</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/about">About</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/register">Register</Nav.Link>
                </Nav>
            </Navbar>
            <div className='d-flex flex-wrap'>
            {/* {game !== null && <GameCard game={game} />} */}
        </div>
        </div>
    )
}

export { TheNavBar }

