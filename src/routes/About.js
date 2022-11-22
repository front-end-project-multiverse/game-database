import React from "react";
import { Card } from "react-bootstrap";

export default function About() {
  return (
    <div className="d-flex flex-row justify-content-center mt-5">
      <Card bg="dark" key="dark" text="white" style={{ width: "50rem" }} className="mb-2">
        <Card.Header as="h4">About</Card.Header>
        <Card.Body>
          <Card.Title>The Free Game Database</Card.Title>
          <Card.Text>
            This free game database was created as part of a group project for a Multiverse Software Engineering
            Apprenticeship. It's main purpose is to demonstrate the skills we have learnt and how we can work together
            through the Software Development Lifecycle.
            <p />
            <p />
            This was purely a front-end project utilizing the below technologies:
            <p />
            <ul>
              <li>React</li>
              <li>React Router</li>
              <li>React Context</li>
              <li>React Bootstrap</li>
              <li>Material UI</li>
              <li>HTML/CSS/JS</li>
            </ul>
            <p />
            For project management we used Github Projects.
            <p />
            Created by:
            <p />
            <ul>
              <li>Abdalla Yusuf</li>
              <li>Matthew Eland</li>
              <li>Michael Bracey</li>
              <li>Nigel Marongere</li>
              <li>Ryan Curry</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
