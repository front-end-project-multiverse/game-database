//render games based on category clicked on by navbar
import React, { useEffect, useState } from "react"
import { GameCard } from "./GameCard"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from "react-bootstrap";
import { NavLink } from 'react-router-dom';


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
            <Navbar bg="dark" variant="dark" fixed="top">
            
                <Nav className="mr-auto">
                <NavLink to ='/about' className="nav-link" style={{fontWeight: 600}}>Games of 2022</NavLink>
                    <NavLink to ='/' className="nav-link">Home</NavLink>
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
                    <NavLink to ='/about' className="nav-link">About</NavLink>
                    <NavLink to ='/contact' className="nav-link">Contact</NavLink>
                    <NavLink to ='/login' className="nav-link">Login</NavLink>
                    <NavLink to ='/register' className="nav-link">Register</NavLink>
                </Nav>
            </Navbar>
            <div className='d-flex flex-wrap'>
            {/* {game !== null && <GameCard game={game} />} */}
        </div>
        </div>
    )
}

export { TheNavBar }

