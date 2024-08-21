import React from 'react'
import { imagepath, movieCard } from '../../utils/constant'

interface MovieListProps {
    movies: movieCard[]
}

function MovieList({ movies }: MovieListProps) {
  return (
    <div className='my-14'>
        <h1 className='text-3xl font-bold text-yellow-500'>Top Rated Movies</h1>
        <div className="row row-cols-6">
            {
                movies.length > 0 && movies.map((data, ind) => (
                    <div className="col">
                        <div key={ind} className="my-3 border-2 border-zinc-800 rounded-lg overflow-hidden">
                            <div className="relative overflow-hidden">
                                <img src={imagepath + data.poster_path} alt="" />
                                <div className="absolute w-full h-28 _carouselGradient bottom-0"></div>
                            </div>
                            <div className="bg-[#222] p-2">
                                <h1 className='text-[17px] font-semibold line-clamp-1'>{data.title}</h1>
                                <div className="text-zinc-300 mt-2">
                                    <h1 className='text-[15px]'>Rating : {String(data.vote_average).substring(0,3)}</h1>
                                    <h1>Language : {data.original_language}</h1>
                                    <h1>Release Date : {data.release_date}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default MovieList