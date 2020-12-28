import React,{useState} from 'react';
import './App.css';
import MoviesList from './MoviesList'
import AddMovie from './AddMovie'
import  Search from './Search' 
import Rating  from './Rating' 



function App () {
  
  const moviesList=[
    {
      name:"Ip Man",
      image:"https://pic.egybest.net/i/WmFwZndlY21ZcHBwRW1wZWNtRXZ3UG1qUHdUWWc.jpg" ,
      rating:5,
      year:2019
    },
    {
      name:'Transformers ',
      image:'https://i.egycdn.com/pic/WmFwZndlY21ibWJtYnZOam1iRWNtVHp4UG1FUG1iYQ.jpg',
      rating:3,
      year:2007
    },
    {
      name:"Spider-Man",
      image:'https://i.egycdn.com/pic/WmFwZndlY3ZOWWptVGJtdWNtSWFtSWxhYVBtZw.jpg',
      rating:2,
      year:2017,
    }
  ];
  const [movies,setMovies]=useState(moviesList) ;
  const addMovie=(newMovie)=>{
    setMovies([...movies,newMovie])
  }
  const [search,setSearch]=useState("");
  const [rating,setRating]=useState(1);
  const searchFunc=(value)=>{
    setSearch(value);
    //setMovies(movies);

  }
  const ratingFunc=(rate)=>{
    setRating(rate);
  }
  return (
    <div className="App">
      {/* <h2 className="title"> Welcome in our films store !!</h2>*/}
       <div className="something">
           <div className="search">
           <h4 className="tit"> Searsh</h4>
       <Search search={searchFunc}/>
       <div className="rate">
          <h4 className="tit">Rating :</h4>
        <Rating ratingFunc={ratingFunc} rating={rating}/>
        </div>
           </div>
        
       </div>
        <div className="list">
       
           <MoviesList movies={movies.filter(movie=>
          movie.name
          .toLocaleLowerCase()
          .includes(search.trim().toLocaleLowerCase()) && movie.rating>=rating
          ) }/>
        </div>
        <div className="something2">
        <div className="add">
          <h4 className="tit">ADD</h4>
        <AddMovie addMovie={addMovie}/>
        </div>
        </div>
        
    </div>
  )
}
export default App ;