import React from 'react'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRatingComponent from 'react-star-rating-component';
const MovieList = ({movies,searchMovie}) => {
    return (
        <div className="movieList">
 {movies.filter((el)=>el.title.match()).map((el,index) =>  <div className="movie">
 <Card key={el.id} style={{ width: '18rem'}}>
  <Card.Img variant="top" src={el.image} style={{height:"300px"}}></Card.Img> 
  <Card.Body style={{}}>
    <Card.Title> {el.title} </Card.Title>
    <Card.Text> {el.year} </Card.Text>
   <StarRatingComponent value={el.rating} />
  </Card.Body>

</Card> </div> )}

        </div>
    )
}

export default MovieList
