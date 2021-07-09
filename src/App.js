import "./App.css";

import MovieList from "./components/MovieList";
import { useState } from "react";
import MovieNav from "./components/MovieNav";
import AddMovie from "./components/AddMovie";
import Footer from "./components/Footer";

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
        "https://i.egycdn.com/pic/WmFwZndlY21FbW1tYm1ibXVjbWptVElhY05md1A.jpg",
      title: "Dark Knight",
      rating: 3,
      year: "2008",
    },
    {
      id: 4,
      image:
        "https://images-na.ssl-images-amazon.com/images/I/817O-vUusjL._AC_SL1500_.jpg",
      title: "Jurassic World",
      rating: 4,
      year: "2015",
    },
    {
      id: 5,
      image:"https://i.egycdn.com/pic/RHNhSUNlY21IY21ibWJtRW1tbWVjbW1QbWptanhtQnd4.jpg",
      title: "Till Death",
      rating: 3,
      year: "2021",
    },
    {
      id: 6,
      image:"https://i.egycdn.com/pic/WmFwZndlY21MY212bWptdm1qbWFjY3d4bVRFbG1tbUh3.jpg",
      title: "Lion King",
      rating: 5,
      year: "2019",
    },
    {
      id:7 ,
      image:"https://i.egycdn.com/pic/WmFwZndlY21IY21FbW1tVGp2UmNtRW1Fdk5qbWp3VHZQ.jpg",
      title: "Luca",
      rating:4,
      year: "2021",
    },
    {
      id:8 ,
      image:"https://geeko.lesoir.be/wp-content/uploads/2020/10/monster.jpg",
      title: "Monster hunter",
      rating:5,
      year: "2015",
    }
  ]);
  const handleAdd = (title, image, rating, year) =>
    setMovieList([...movieList, { title, image, rating, year }]);
  console.log(movieList);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);
  
  
  const handleDelete = (idClick) => {
    setMovieList(movieList.filter(el => el.id !== idClick));
  };
  const [search, setSearch] = useState("")
  const [rate, setRate] = useState(0)
  const ratingChanged = (newRating) => {
    setRate(newRating)
  };
  

    

  return (
    <div className="movie">
      <MovieNav
        handleAdd={handleAdd}
        movies={movieList}
        handleShow={handleShow}
        handleHide={handleHide}
        search={search}
        setSearch={setSearch}
        ratingChanged={ratingChanged}
        
       
       
      />
      {show ? (
        <AddMovie
          handleShow={handleShow}
          handleAdd={handleAdd}
          handleHide={handleHide}
        />
      ) : null}
      
      <MovieList movies={movieList} handleDelete={handleDelete} search={search} rate={rate}/>
     <Footer/> 
     
      </div>
    
  );
}

export default App;
