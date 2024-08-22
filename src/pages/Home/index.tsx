import { useEffect, useState } from 'react'
import { baseAPI } from '../../api/axiosInstance'
import { MovieCardType } from '../../utils/constant'
import HomeSlider from '../../components/Home/HomeSlider'
import MovieList from '../../components/Home/MovieList'
import LoadMoreBtn from '../../components/Button/LoadMoreBtn'

function Home() {
	const [movies, setmovies] = useState<MovieCardType[]>([])
	const [page, setPage] = useState<number>(1)
	
	const fetchMovies = async (page:number) => {
		try {
			const response = await baseAPI.get(`/3/movie/top_rated?language=en-US&page=${page}`)
			// console.log(response.data.results)
			setmovies(response.data.results)
		} catch (err) {
			console.log("Fetch Error in homepage Top rated movies", err)
		}
	}
	
	useEffect(() => {
		fetchMovies(page)
		console.log("render")
	}, [page])

	const handlePageUpdate = () => {
		setPage(prev => prev + 1)
	}
	
	return (
		<div className='w-[90%] mx-auto mb-44'>
			<HomeSlider />
			<MovieList movies={movies}/>
			<div onClick={() => handlePageUpdate()}>
				<LoadMoreBtn />
			</div>
		</div>
	)
}

export default Home