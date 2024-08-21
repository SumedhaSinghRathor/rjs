import React, { useEffect, useState } from 'react'
import HomeCarousel from '../../components/Home/HomeSlider'
import { baseAPI } from '../../api/axiosInstance'
import { movieCard } from '../../utils/constant'
import HomeSlider from '../../components/Home/HomeSlider'
import MovieList from '../../components/Home/MovieList'

function Home() {
	const [movies, setmovies] = useState<movieCard[]>([])
	
	const fetchMovies = async () => {
		try {
			const response = await baseAPI.get(`/3/movie/top_rated?language=en-US&page=1`)
			// console.log(response.data.results)
			setmovies(response.data.results)
		} catch (err) {
			console.log("Fetch Error in homepage Top rated movies", err)
		}
	}
	
	useEffect(() => {
		fetchMovies()
	}, [])
	
	return (
		<div className='w-[90%] mx-auto'>
			<HomeSlider />
			<MovieList movies={movies}/>
		</div>
	)
}

export default Home