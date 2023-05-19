import React, { useEffect, useState } from 'react';
import requests from '../Requests';
import axios from 'axios';

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  // console.log(movies);
  // console.log(movie);
  // console.log(movie?.backdrop_path);
  const truncateString = (str, sum) => {
    if(str?.length > sum){
      return str.slice(0, sum) + '...'
    } else {
      return str
    }

  }

  return (
    <div className="w-full h-[600px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[600px] bg-gradient-to-r from-black"></div>
        <img
          className=" h-full w-full object-cover object-top"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">{movie?.title}</h1>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border text-white border-gray-300 py-2 px-5 ml-4">
              Watch Later
            </button>
            <p className="text-gray-400 text-sm">Released: {movie?.release_date}</p>
            <p className="text-gray-200 w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[30%]">
              {truncateString( movie?.overview, 140)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
