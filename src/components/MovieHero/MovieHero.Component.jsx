import React, { useContext } from 'react';
import { MovieContext } from '../../context/Movie.context';
import MovieInfo from './MovieInfo.Component';


function MovieHero() {

    const { movie } = useContext(MovieContext);
    const genres = movie.genres?.map(({ name }) => name).join(" ");//if genres is present then map or else not ..for that this is the syntax
    //.join is used to return the lopp output in a single line.
return <>
            <div>
                {/* Mobile & Tab Screen Size */}
                <div className="lg:hidden w-full"> 
                    <img
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt="cover poster"
                        className="m-4 rounded"
                        style={{width: "calc(100%-2rem)"}}// calculate out of 100% screen size reduce 2rem in size
                        />
                </div>
                <div className="flex flex-col gap-3 lg:hidden">
                    <div className="flex flex-col-reverse gap-3 px-4 my-3">
                        <div className="text-black font-bold flex flex-col gap-2 md:px-4">
                            <h4>5k rating</h4>
                            <h4>Kannada, English, Hindi, Telugu</h4>
                            <h4>
                                {movie.runtime} min | {genres}
                            </h4>
                        </div>

                    </div>
                    <div className="flex items-center gap-3 md:px-4 md:w-screen text-xl px-4">
                        <button className="bg-red-500 w-full py-3 text-white font-semibold rounded-lg"> Rent ₹ 149</button>
                        <button className="bg-red-600 w-full py-3 text-white font-semibold rounded-lg"> Buy ₹ 599</button>
                    </div>
                </div>

                {/* Large Screen Device */}
                <div className="relative hidden w-full lg:block" style={{height: "30rem"}}>
            {/* div creating the background image of gradient style */}
            <div className="absolute z-10 w-full h-full" style={{
                        backgroundImage: "linear-gradient(90deg, rgb(34,34,34) 24.95%,rgb(34,34,34) 38.3%,rgba(34,34,34,0.04)97.47%,rgb(34,34,34)100%)"
                    }} />

                    <div className="absolute z-30 left-24 top-10 flex items-center gap-10">
                        <div className="w-64 h-96">
                            <img 
                                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                                alt="Movie Poster"
                                className="w-full h-full rounded-lg"
                                />
                        </div>
                        <div>
                            <MovieInfo movie={movie} />
                        </div>

                    </div>
                    <img 
                        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                        alt="background poster"
                        className="w-full h-full object-cover object-center"
                        />
                </div>
            </div>
    </>;
}



export default MovieHero;