import React, { useEffect, useState } from "react";
import axios from "axios";
//Components
import EntertainmentCardSlider from "../components/Entertainment/Entertainment.Component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../components/PosterSlider/PosterSlider.Component";


//layout Hoc
import DefaultLayoutHoc from "../layout/Default.layout";

const HomePage = () => {

    const [recommendedMovies, setRecommendedMovies] = useState([]);
    const [premierMovies, setpremierMovies] = useState([]);
    const [onlineStreamEvents, setonlineStreamEvents] = useState([]);

 useEffect(()=>{
  const requestPopularMovies = async () =>{
  const getPopularMovies = await axios.get('/movie/popular');
  setRecommendedMovies(getPopularMovies.data.results);
};
requestPopularMovies();
},[]);

useEffect(()=>{
  const requestTopratedMovies = async () =>{
  const getTopratedMovies = await axios.get('/movie/top_rated');
  setpremierMovies(getTopratedMovies.data.results);
};
requestTopratedMovies();
},[]);

useEffect(()=>{
  const requestUpcomingMovies = async () =>{
  const getUpcomingMovies = await axios.get('/movie/upcoming');
  setonlineStreamEvents(getUpcomingMovies.data.results);
};
requestUpcomingMovies();
},[]);

    

    return (
        <>
            <HeroCarousel />
            <div className='container mx-auto px-4 md:px-12 my-8'>
                <h1 className='text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3'>The Best Of Entertainment</h1>
                <EntertainmentCardSlider />
            </div>

            <div className="container mx-auto px-4 md:px-12 my-8">
                <PosterSlider 
                    title = "Recommended Movies" 
                    subtitle  = "List Of Recommended Movies"
                    posters={recommendedMovies}
                    isDark={false}
                />
            </div>

           <div className='bg-premier-800 py-12'>
      <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
        <div className='hidden md:flex'>
          <img src='https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png' alt="Rupay" className='w-full h-full' />

        </div>
        <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
        <PosterSlider title="Premiers"
        subtitle="Brand new relases every Friday"
        posters={premierMovies}
        isDark={true} />
      </div>
    </div>
    </div>

     <div className='container mx-auto px-4 md:px-12 my-8'>
        <PosterSlider title="Online Streaming Events"
        subtitle="Stay Tunned"
        posters={onlineStreamEvents}
        isDark={false} />       
    </div>
            
        </>
    );
}

//syntax to pass Hoc asit in passed as a prop in the layout file.
export default DefaultLayoutHoc(HomePage);

    
