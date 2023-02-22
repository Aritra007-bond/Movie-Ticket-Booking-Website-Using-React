import React, { createContext, useState } from 'react'

//we use state management so tht we dont have to call the api again han again its like Hoc and it has two ways redux for bulky application and context-management
// it provides informationto any of its child

export const MovieContext = createContext(); 

const MovieProvider = ({children}) =>{
const [movie,setMovie]= useState({
    id: 0,
    original_title:"",
    overview:"",
    backdrop_path:"",
    poster_path:"",
});

    return <MovieContext.Provider value={{movie, setMovie}}>{children}</MovieContext.Provider>
};

export default MovieProvider;