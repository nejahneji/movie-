import "./App.css";

import MovieList from "./components/MovieList";
import { useState } from "react";
import MovieNav from "./components/MovieNav";
import AddMovie from "./components/AddMovie";

function App() {
  const [movieList, setMovieList] = useState([
    {
      id: 1,
      image: "https://i.ebayimg.com/images/g/RScAAOSwsJpfCgYB/s-l300.jpg",

      title: "The Green Mile",
      rating: 2,
      year: "1999",
    },
    {
      id: 2,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/81luv8TaKlL._AC_SY879_.jpg",

      title: "The Revenant",
      rating: 4,
      year: "2015",
    },
    {
      id: 3,
      image:
        "https://www.cdiscount.com/pdt2/9/4/8/1/700x700/clo4035519880948/rw/poster-batman-the-dark-knightle-joker-heath.jpg",
      title: "Dark Knight",
      rating: 3,
      year: "2008",
    },
    {
      id: 1,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/817O-vUusjL._AC_SL1500_.jpg",
      title: "Jurassic World",
      rating: 4,
      year: "2015",
    },
  ]);
  const handleAdd = (title, image, rating, year) =>
    setMovieList([...movieList, { title, image, rating, year }]);
  console.log(movieList);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);

  return (
    <div className="movie">
      <MovieNav
        handleAdd={handleAdd}
        movies={movieList}
        handleShow={handleShow}
        handleHide={handleHide}
      />
      {show ? (
        <AddMovie
          handleShow={handleShow}
          handleAdd={handleAdd}
          handleHide={handleHide}
        />
      ) : null}
      
      <MovieList movies={movieList} />
      </div>
    
  );
}

export default App;
