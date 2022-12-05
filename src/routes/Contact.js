import React from "react";
import { Card } from "react-bootstrap";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Contact() {
  return (
    <div className="d-flex flex-row justify-content-center mt-5">
      <Card bg="dark" key="dark" text="white" style={{ width: "50rem", "margin-top": "40px" }} className="mb-2">
        <Card.Header as="h4">Contact</Card.Header>
        <Card.Body>
          <Card.Title>How to contact</Card.Title>
          <Card.Text>
            {`To contact any member of the team, please reach out to us at our `}
            <a href="https://github.com/front-end-project-multiverse">Github page</a>
            <br/>
            <br/>
            Or at any of the below: <br/>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
