import React from "react";

const MovieListHeading = (props) => {
return(
    <div className='col'>
        <h1>{props.heading}</h1>
        {/* heading prop 
        made as a component to be reused whenever needed */}
    </div>
);
};
export default MovieListHeading;