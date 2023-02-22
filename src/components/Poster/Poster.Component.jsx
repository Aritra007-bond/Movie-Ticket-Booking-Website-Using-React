import React from 'react';
import { Link } from 'react-router-dom';

const Poster = (props) => {
  
  // link is similar to anchor tag in react
  //as anchor reloads the whole application but in react we dont want rto reload the entire application.
  //to is same as href. or route.
  return (
    <Link to={`/movie/${props.id}`}>
      <div className='flex flex-col items-start gap-2 px-1 md:px-2'>
        <div className='h-40 md:h-80'>
          <img src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
            alt="poster"
            className='w-full h-full rounded-md'
          ></img>
        </div>
        <h3 className={`text-sm ${props.isDark ? "text-white" : "text-gray-700"}`}>
          {props.title}</h3>
        {/* <p className={`text-lg font-bold ${props.isDark ? "text-white" : "text-gray-700"}`}>
          {props.subtitle}</p> */}
      </div>
    </Link>
  )
}

export default Poster;