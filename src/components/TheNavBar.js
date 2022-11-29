//render games based on category clicked on by navbar
import React, { useEffect, useState, useContext } from "react"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import  {NameSearchContext} from '../context/NameSearchProvider';

function TheNavBar() {
    const {category, setCategory} = useContext(NameSearchContext)

    return (
        <div>
            <Navbar bg="dark" variant="dark" fixed="top">
            
                <Nav className="mr-auto">
                <NavLink to ='/about' className="nav-link" style={{fontWeight: 600}}>Games of 2022</NavLink>
                    <NavLink to ='/' className="nav-link">Home</NavLink>
                    <NavDropdown title="Categories" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={() => setCategory("ALL")}>All</NavDropdown.Item>
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
        </div>
    )
}

export { TheNavBar }

