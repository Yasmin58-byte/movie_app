import React from "react";

const MovieList = (props) =>{
    const FavouriteComponent = props.favouriteComponent;

    
    return(
    <>
{props.movies.map((movie,index)=> (<div className="image-container d-flex justify-content-start m-2">
    <img src={movie.Poster} alt='movie'></img>
    {/* map func to loop over each movie and return it's img */}
    <div onClick = {()=> props.handleFavouritesClick(movie)} className="overlay d-flex align-items justify-content">
        {/* when we click it adds the movie from the map */}
<FavouriteComponent/>
</div>
</div>))}
    </>    
    )
}
export default MovieList; 