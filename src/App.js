import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home.page';
import PlayPage from './pages/Play.page';
import MoviePage from './pages/Movie.page';
import axios from 'axios';
import "./App.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params ={};
// axios.defaults.params["api_key"]= process.env.REACT_APP_API_KEY;
axios.defaults.params["api_key"]= "958e138d79386fc7126fa3b616720368";

function App() {
  return (<Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/movie/:id" element={<MoviePage />} />
    <Route path="/plays" element={<PlayPage />} />
  </Routes>
  );
}

export default App;
