import React from 'react'

function Moviedetails({selectedmovie}) {
  return (
    <div>
      {
        selectedmovie!=null && (
            <div>
                <h1>{selectedmovie.title}</h1>
                <p>Actor: {selectedmovie.actor}</p>
                <p>Rating: {selectedmovie.rating}</p>
                <p>Director: {selectedmovie.director}</p>
                <img src={selectedmovie.imageUrl} style={{width:"200px",height:"300px"}}/>
             </div>
        )
      }
    </div>
  )
}

export default Moviedetails
