import React from "react";
import { useState } from "react";

import { Navbar, Button, FormControl, Form, Nav } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import AddMovie from "./AddMovie";

const MovieNav = ({ handleShow,handleAdd }) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  //  const [search, setSearch] = useState("");

  // const searchMovie = movies.filter(title=> title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <Navbar style={{ backgroundColor: "#000000" }}>
        <Navbar.Brand href="#home">NETFLIX</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home"> </Nav.Link>
        </Nav>
        <Form inline>
          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={24}
            activeColor="#ffd700"
          />

          <FormControl type="text" placeholder="Search" className="mr-sm-2" />

          <Button variant="outline-light">Search</Button>

          <Button onClick={handleShow} variant="outline-light">
            Add
          </Button>
        </Form>
      </Navbar>
      
    </div>
  );
};

export default MovieNav;
