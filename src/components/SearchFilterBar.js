import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState, useContext } from "react"
import  { NameSearchContext } from '../context/NameSearchProvider';

function SearchFilterBar() {
    // array of game names
    // set state input in the search bar
    // go through array of game names and render cards with name

    const {name, setName} = useContext(NameSearchContext)
    // may need react context  so can leverage this name state within GetAllGames so we can filter

    const onSearchInput = (e) => {
      setName(e.target.value.toLowerCase())
    }
    const resetInput = (e) => {
      setName("")
      document.getElementById("search-bar").value = "";
    }

    return (
      <>
      <div className="" style={{ margin: "80px 40px 20px 40px" }}>
        <Form className="d-flex">
            <Form.Control
            type="search"
            placeholder="Search for a game..."
            className="me-2"
            id="search-bar"
            aria-label="Search"
            onChange={onSearchInput}
            />
            <Button variant="outline-success" onClick={resetInput}>Clear</Button>
        </Form>
      </div>
      </>
    )
  }
  
  export {SearchFilterBar};