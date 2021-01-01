import React,{useState} from 'react'
import StarRatingComponent from 'react-star-rating-component';
import {Link} from "react-router-dom" 
import {Modal,Button} from 'react-bootstrap'

const MovieCard = ({movie}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div  className="movie">
            <img src={movie.image} alt='' width="150px"/>
    <h4 className="movie-name">{movie.name}</h4>
    <StarRatingComponent 
          name="rate" 
          starCount={5}
          value={movie.rating}
          
        />
            <p>{movie.year}</p>
            <Button variant="primary" onClick={handleShow}>
        More Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{movie.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ul>
                <li>
                    {movie.name}
                </li>
                <li>
                    {movie.year}
                </li>
                <li>
                    <img src={movie.image} style={{width:"150px"}}/>
                </li>
                <li>
                    <h6>Decription :</h6>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </li>
            </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

        </div>
    )
}

export default MovieCard ;

