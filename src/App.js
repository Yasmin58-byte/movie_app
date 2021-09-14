import React , {useState,useEffect} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from "./components/MovieList";
import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import AddFavourites from "./components/AddFavourites";
import RemoveFavourites  from "./components/RemoveFavourites";
const App = () => {
  // save movie results coming from the search
  const [movies,setMovies] = useState([]);
  //when we click on a film we add this film to the favoutites
  const [favourites,setFavourites] = useState([]);
  //to make the search dynamic connected to the input the user gives
  const [searchValue,setSearchValue] = useState('');
//function bellow is to request api 
//async await is alternative way of promises based on the func wait untill it returns something
  const getMovieRequest =async (searchValue) =>{
  const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=541aa01c`
  const response = await fetch(url);
const responseJson = await response.json();
if(responseJson.Search){
  // we only set the movies if we get any search values back
setMovies(responseJson.Search);
}
};
//bellow the getMovieRequest in use effect so that it's called when typing in search bar
useEffect(() =>{
  getMovieRequest(searchValue);
},[searchValue])
// any time search val changes we call the function
const AddFavouriteMovie = (movie) =>{
  const newFavouriteList  = [...favourites,movie];
  setFavourites(newFavouriteList);
}
//...creates a  copy of current array of favs and adds the movie to it
const removeFavouriteMovie = (movie) =>{
  const newFavouriteList = favourites.filter((favourites)=> favourites.imdbID!== movie.imdbID);
  // we filter the movie from the array of favs
  
  setFavourites(newFavouriteList);
}
  return( 
  <div className="container-fluid movie-app">
    <div className="row d-flex align-items-center mt-4 mb-4 ">
      {/* flex box property */}
      <MovieListHeading heading='Movies'/>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
    </div>
    <div className='row'>
      <MovieList movies={movies} handleFavouritesClick={AddFavouriteMovie} favouriteComponent={AddFavourites} />
      {/* by passing fav means you can passing diff components in diff situatioms */}
    </div>
    {/* adds the fav movie and displaying it */}
    <div className="row d-flex align-items-center mt-4 mb-4 ">
      <MovieListHeading heading='Favourites'/>
      </div>
      <div className="row">
      <MovieList movies={favourites}  
      handleFavouritesClick={removeFavouriteMovie} 
      favouriteComponent={RemoveFavourites} />
   
    </div>
  </div>
  );
};

export default App;
// when the app loads useEffect get called as it always gets called 
//in 1st render calls getmovierequest passing search value
//which is an empty string so get the movie request takes the search val
//converting the response to json and if we have results
//we use it in if statment when user types the setsearchvalue
//gets called and get stored instead so the useeffect gets triggered
//getmovierequest get called with the new search val sending to api and loop as that
