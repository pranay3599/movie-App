
import React,{useState} from "react";
import MovieName from "./Components/MovieName";
import Moviedetails from "./Components/Moviedetails";
 
const App=()=>{

     const [selectedmovie,setSelctedMovie]=useState(null)

     console.log(selectedmovie);

    return(
     <div>
      <h1>Movies App</h1>
      <MovieName updateSelectedMovie={setSelctedMovie}></MovieName>
      <Moviedetails selectedmovie={selectedmovie}></Moviedetails>

     </div>
    
    )
}

export default App