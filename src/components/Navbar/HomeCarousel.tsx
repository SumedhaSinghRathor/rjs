import React, { useEffect, useState } from 'react';
import { FiThumbsUp } from "react-icons/fi";
import axios from 'axios';
import { imagepath } from '../../utils/constant';

function HomeCarousel() {
    interface CarouselMovies {
        backdrop_path: string;
        poster_path: string;
        title: string;
        overview: string;
        vote_count: number;
    }

    const [carouselMovies, setCarouselMovies] = useState<CarouselMovies[]>([])

    const fetchUpcoming = async () => {
        try {
            const response = await axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NjM4NzEzNDIwMGY4NTg3MzcxMDM0NDZjNDA0MGI4NSIsIm5iZiI6MTcyNDA4Njc2My4wNDI4MTMsInN1YiI6IjY2YzMyZTIyNzFlYzg5YmQ4M2QwZTUxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ROyWcTn7OTQw8iUf1KR_hEsyZgmg2qExDQJAUTY09tw'
                }
            })
            console.log(response.data.results)
            setCarouselMovies(response.data.results)
        } catch (err) {
            console.log("fetch upcoming movies error", err)
        }
    }

    useEffect(() => {
        fetchUpcoming()
    }, [])

  return (
    <div className='relative'>
        <div className="relative w-[900px]">
            {/* <div className="block bg-red-300 aspect-[7/4]"></div> */}
            <img src={imagepath + carouselMovies[0].backdrop_path} className='w-full aspect-[7/4]' alt="" />
            <div className="absolute bottom-0 h-24 _carouselGradient w-full"></div>
        </div>
        <div className="absolute bottom-0 flex items-end gap-4 px-4">
            <div className="block bg-blue-400 w-[160px] aspect-[4/5]"></div>
            <div className="flex flex-col gap-1">
                <h1 className="text-4xl text-white">Something Something</h1>
                <h2 className='w-[600px] text-xl line-clamp-3 text-zinc-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</h2>
                <div className="flex items-center gap-1 text-zinc-400 text-xl">
                    <h1><FiThumbsUp /></h1>
                    <h3 className='text-lg'>457</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeCarousel