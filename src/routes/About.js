import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { LightModeContext } from "../context/LightModeContext";

export default function About() {
  const { lightMode } = useContext(LightModeContext);
  return (
    <div className="d-flex flex-row justify-content-center mt-5">
      <Card bg={lightMode ? "light" : "dark"} key={lightMode ? "light" : "dark"} text={lightMode ? "black" : "white"} style={{ width: "50rem", "margin-top": "40px" }} className="mb-2">
        <Card.Header as="h4">About</Card.Header>
        <Card.Body>
          <Card.Title>The Free Game Database</Card.Title>
          <div>
            This free game database was created as part of a group project for a Multiverse Software Engineering
            Apprenticeship. It's main purpose is to demonstrate the skills we have learnt and how we can work together
            through the Software Development Lifecycle.
            <br/>
            <br/>
            This was purely a front-end project utilizing the below technologies:
            <br/>
            <br/>
            <ul>
              <li>React</li>
              <li>React Router</li>
              <li>React Context</li>
              <li>React Bootstrap</li>
              <li>Material UI</li>
              <li>HTML/CSS/JS</li>
            </ul>
            For project management we used Github Projects.
            <br/>
            <br/>
            Created by:
            <br/>
            <br/>
            <ul>
              <li>Abdalla Yusuf</li>
              <li>Matthew Eland</li>
              <li>Michael Bracey</li>
              <li>Nigel Marongere</li>
              <li>Ryan Curry</li>
            </ul>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
