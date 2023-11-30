import React from 'react';

import moviesData from "../data/moviesData";



const MovieName=({updateSelectedMovie}) => {
  return (
    <div>
        {
         moviesData.map(movie=>(
        <h3 onClick={()=>updateSelectedMovie(movie)}
        style={{
            backgroundColor:'wheat',
            color:'tomato',
            border:"2px solid green",
            width:"40%"
        }}>{movie.title}</h3>
        ))
      }
      
    </div>
  )
}

export default MovieName
