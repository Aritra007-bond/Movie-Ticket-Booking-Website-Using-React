import React, { Component } from "react";
import MovieNavbar from "../components/Navbar/MovieNavbar.Component";

//Hoc is stands for high order component.
const MovieLayoutHoc = 
    (Component) =>
    ({ ...props }) => {
        return (
            <div>
                <MovieNavbar/>
                <Component {...props} />
                <div>Footer</div>
            </div>
     )

    }

export default MovieLayoutHoc;